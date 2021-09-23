import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems:[]
  },
  getters:{
      totalItemsinCart: state=>state.cartItems
  },
  mutations: {
    addItem(state,selectedItem){
        // console.log("In stpo",selectedItem)
        state.cartItems.push(selectedItem);
    },
    removeItem(state,selectedItem){
        state.cartItems.push(selectedItem);
    }
  },
  actions: {
      addItemInCart(context,item){
        //   console.log("in action ",item);
          context.commit('addItem',item);
        //   console.log(this.getters.totalItemsinCart);
      }

  }
})