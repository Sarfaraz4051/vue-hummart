import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [
    ],
  },
  getters: {
    totalItemsinCart: (state) => state.cartItems,

  },
  mutations: {
    addItem(state, selectedItem) {
      state.cartItems.push(selectedItem);
    },
    removeItem(state, itemIndex) {
      state.cartItems.splice(itemIndex,1);
    },
  },
  actions: {
    addItemInCart(context, item) {
      context.commit("addItem", item);
    },
    removeCartItem(context, itemIndex) {
      context.commit("removeItem", itemIndex);
    },
  },
});
