<template>
  <div id="app">
    <Cart v-if="showCart" @toogleCart="toogleCart()" class="cart-app" />
    <Header @toogleCart="toogleCart()"/>
    <MainCarousel />

    <InfoBar />
    <Products />
    <Categories />
    <Description />
    <Footer />
  </div>
</template>

<script>
import {
  Header,
  MainCarousel,
  InfoBar,
  Products,
  Categories,
  Description,
  Footer,
  Cart
} from "./components/index.js";
export default {
  name: "App",
  components: {
    Header,Cart,
    MainCarousel,
    InfoBar,
    Products,
    Categories,
    Description,
    Footer,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods:{
    toogleCart() {
      this.showCart = !this.showCart;
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cart-app{
  z-index: 1;
  float: right;

}
</style>
