<template>
    <div id="home">
        <TheHeader :user="user"></TheHeader>
        <section id="heading">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="hide-xs show-sm">Electronics</h1>
                    </div>
                </div>
            </div>
        </section>
        <div id="content" class="container">
            <div class="show-xs hide-sm">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>Electronics</h1>
                    </div>
                </div>
            </div>
            <div class="filter">
                <div class="row">
                    <div class="col-xs-12">
                        <button class="btn btn--default filter-btn" @click="openCollapse">
                            <img src="@/assets/icons/order.svg" alt="Order Icon"> Sort by
                        </button>
                        <div :class="{active: isActive}" class="buttons">
                             <span class="title light sort">
                                Sort by:
                            </span>
                            <button class="btn" @click="sort=false, recent=true, low=false, desc=false" :class="{ active: recent }">
                                Most recent
                            </button>
                            <button class="btn" @click="sort=true, recent=false, low=true, desc=-1" :class="{ active: low }">
                                Lowest price
                            </button>

                            <button class="btn" @click="sort=true, recent=false, low=false, desc=1" :class="{ active: desc==1 }">
                                Highest price
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <section id="products" v-if="products">
                    <div class="row">
                        <ProductCard
                                v-for="product in displayedProducts"
                                :key="product.id"
                                :product="product"
                                :user="user"
                        ></ProductCard>
                    </div>
                </section>
            </transition>
            <div class="more">
                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn--primary"> More
                    products
                </button>
            </div>
        </div>
        <TheFooter></TheFooter>
    </div>
</template>
<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import {mapState} from 'vuex';

export default {
    name: 'Home',
    components: {TheHeader, TheFooter, ProductCard},
    data() {
        return {
            perPage: 16,
            page: 1,
            pages: [],
            totalProducts: null,
            isActive: false,
            isSortActive: false,
            low: false,
            sort: false,
            recent: true,
            desc: 0
        };
    },
    watch: {
        products() {
            this.setPages();
        }
    },
    computed: {
        ...mapState(['user']),
        ...mapState(['products']),
        ...mapState(['loading']),
        displayedProducts(products) {
            if (this.sort) {
                const productsOrder = this.products.slice(0).sort((a, b) => a.cost < b.cost ? this.desc : -this.desc );
                return this.paginate(productsOrder);
            } else {
                return this.paginate(this.products);
            }
        }
    },
    methods: {
        setPages() {
            const numberOfPages = Math.ceil(this.products.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(products) {
            const page = this.page;
            const perPage = this.perPage;
            const to = (page * perPage);
            return products.slice(0, to);
        },
        openCollapse() {
            this.isActive = !this.isActive;
        }
    },
    async created() {
        await this.$store.commit('set_loading', true);
        await this.$store.dispatch('getProducts');
        await this.$store.dispatch('getUser');
        await this.$store.commit('set_loading', false);
    }
};
</script>
