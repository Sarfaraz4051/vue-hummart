<template>
  <div id="app">
    <Header heading="Hummart UI" />
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
  InfoBar,
  Products,
  Categories,
  Description,
  Footer,
} from "./components/index.js";
export default {
  name: "App",
  components: {
    Header,
    InfoBar,
    Products,
    Categories,
    Description,
    Footer,
  },
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
</style>
