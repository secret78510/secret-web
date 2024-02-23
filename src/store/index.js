import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: {
      carts: [],
    },
    isLoading: false,
  },
  mutations: {
    CARTS(state, payload) {
      state.cart = payload;
      const newCart = JSON.parse(JSON.stringify(state.cart));
      const cartsMap = new Map();
      newCart.carts.forEach((item) => {
        cartsMap.set(item.product.id, item);
      });
      cartsMap.forEach((mapItem) => {
        const MapItem = mapItem;
        MapItem.qty = 0;
        MapItem.final_total = 0;
        MapItem.total = 0;
      });
      cartsMap.forEach((mapItem) => {
        const MapItem = mapItem;
        state.cart.carts.forEach((item) => {
          if (item.product_id === MapItem.product_id) {
            MapItem.qty += item.qty;
            MapItem.final_total = item.final_total;
            MapItem.total = item.total;
          }
        });
      });
      state.cart.carts.splice(0, state.cart.carts.length);
      cartsMap.forEach((map) => state.cart.carts.push(map));
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('CARTS', response.data.data);
      });
    },
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
  },
});
