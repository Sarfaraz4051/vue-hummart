import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [
      {
        img_src: "images/offers/1.jpg",
        old_price: "Rs 1050",
        new_price: "Rs 950",
        title:
          "BUY Vital Tea Zip Pack 950 Gm GET Vital Green Tea Bags Box 30 Pcs FREE",
      },
      {
        img_src: "images/offers/2.jpg",
        old_price: "Rs 1060",
        new_price: "Rs 861",
        title:
          "BUY 4 Nestle Cerelac 3 Fruits Baby Food 175 Gm GET Nestle Cerelac Bowl FREE",
      },
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
