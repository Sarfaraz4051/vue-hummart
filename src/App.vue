<template>
  <div id="app">
    <Header heading="Hummart UI" />
    <Categories />
    <Description />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { Header, Categories, Description,Footer } from "./components/index.js";
// import Categories from './components/Categories-list.vue'
// import Description from
export default {
  name: "App",
  components: {
    Header,
    Categories,
    Description,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
