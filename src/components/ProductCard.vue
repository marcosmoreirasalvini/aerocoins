<template>
    <div class="product">
        <router-link :to="{ name: 'product', params: { id: product._id, product:product }}">
        <div class="product__inner" :class="{redeem: user.points >= product.cost}">
            <div class="product__overlay">
                <div class="center">
                    <span class="price">
                        {{product.cost}} <img src="@/assets/icons/coin.svg" class="coin" alt="Aero Coin">
                    </span>
                    <router-link
                            class="btn btn--light btn--block"
                            v-if="user.points >= product.cost"
                            tag="button"
                            :to="{ name: 'product', params: { id: product._id, product:product }, query: { debug: true }}">
                        Redeem now
                    </router-link>
                    <span class="need" v-else>
                        YOU NEED + {{product.cost-user.points}}
                    </span>
                </div>
            </div>
            <div class="product__icons">
                <div class="redeem-price" :class="{not: user.points <= product.cost}">
                    {{product.cost}} <img src="@/assets/icons/coin.svg" class="coin" alt="Aero Coin" width="20">
                </div>
            </div>
            <div class="product__image">
                <transition name="fade">
                    <img :src="product.img.url" :alt="product.name">
                </transition>
            </div>
            <div class="product__texts">
                <h3 class="product__category">
                    {{product.category}}
                </h3>
                <h2 class="product__name">
                    {{product.name}}
                </h2>
            </div>
            <div class="loading" v-if="loading">loading</div>
        </div>
        </router-link>
    </div>
</template>

<script lang="ts">
    import user from '../services/user';

    export default {
        name: 'ProductCard',
        props: ['product', 'points', 'count', 'page', 'perPage', 'user'],
        data() {
            return {
                loading: false,
                showModal: false,
                redeemProduct: null
            };
        }
    };
</script>
