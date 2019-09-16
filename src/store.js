import Vue from 'vue';
import Vuex from 'vuex';
import userService from './services/user';
import productsService from './services/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    products: [],
    product: [],
    loading: false
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    set_products(state, products) {
      state.products = products;
    },
    set_product(state, product) {
      state.product = product;
    },
    set_loading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async getUser({commit}, data) {
      try {
        const user = await userService.getUser();
        commit('set_user', user);

      } catch (error) {
        alert('error');
      }
    },
    async getProducts({commit}, count) {
      try {
        const products = await productsService.getProducts();
        commit('set_products', products);
      } catch (error) {
        alert('error');
      }
    },
    async redeemPoints({commit}, amount) {
      try {
        const redeem = await userService.addToRedeem({productId: amount});
      } catch (error) {
        alert('error');
      }
    }
  }
});
