<template>
    <div id="product" v-if="product">
        <TheHeader :user="user" :userPoints="user.points" @changePoints="onChangePoints"></TheHeader>
        <section class="main-product">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="image-container">
                            <img :src="product.img.url" class="show-xs hide-sm" :alt="product.name">
                            <img :src="product.img.hdUrl" class="hide-xs show-sm" :alt="product.name">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="description-content">
                            <transition name="fadeUp">
                                <div class="description" key=1 v-if="redeem">
                                    <h1>{{product.name}}</h1>
                                    <p class="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus arcu
                                        sed
                                        mauris
                                        bibendum posuere. Mauris elementum lobortis ipsum, vel dignissim risus
                                        consectetur
                                        nec.
                                    </p>
                                    <span class="price" v-if="user.points >= product.cost">
                                        {{product.cost}} <img src="@/assets/icons/coin.svg" class="coin"
                                                              alt="Aero Coin">
                                    </span>
                                    <span class="price" v-else>
                                        You need + {{product.cost-user.points}} <img src="@/assets/icons/coin.svg"
                                                                                     class="coin" alt="Aero Coin">
                                    </span>
                                    <button class="btn btn--big" v-if="user.points >= product.cost"
                                            @click="redeemProduct(product)">
                                        Redeem now
                                    </button>
                                    <router-link tag="button" v-else class="btn btn--big btn--line" to="/">
                                        See more products
                                    </router-link>
                                </div>
                                <div class="description redeem" key=2 v-else>
                                    <h1>
                                        ¡Congratulations {{userName}}!
                                    </h1>
                                    <p class="lead">
                                        Hope you enjoy your new {{product.name}}
                                    </p>
                                    <router-link tag="button" class="btn btn--big btn--line" to="/">
                                        Get more products
                                    </router-link>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TheHeader from '@/components/TheHeader';
    import {mapState} from 'vuex';

    export default {
        name: 'Product',
        props: ['id', 'product'],
        data() {
            return {
                userName: null,
                redeem: true,
                userPoints: null,
                loadingBtn: false
            };
        },
        components: {TheHeader},
        methods: {
            redeemProduct(el) {
                this.loadingBtn = true;
                if (this.user.points >= el.cost) {
                    try {
                        this.$store.dispatch('redeemPoints', el._id);
                        this.userPoints = this.user.points - el.cost;
                        this.onChangePoints(this.userPoints);
                        this.redeem = false;
                        this.loadingBtn = false;
                    } catch (error) {
                        alert('error');
                    }
                }
            },
            onChangePoints(points) {
                this.user.points = points;
            }
        },
        watch: {
            onChangePoints(points) {
                this.user.points = points;
            }
        },
        mounted() {
            this.userName = this.user.name.split(' ')[0];
        },
        computed: {
            ...mapState(['user']),
            ...mapState(['loading'])
        },
        async created() {
            await this.$store.commit('set_loading', true);
            await this.$store.dispatch('getUser');
            await this.$store.commit('set_loading', false);
        }
    };
</script>
