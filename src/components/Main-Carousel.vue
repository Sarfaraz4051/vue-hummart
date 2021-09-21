<template>
  <v-carousel  cycle hide-delimiters :show-arrows="false">
        <v-carousel-item class="main-carousel"
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
</template>
<script>
export default {
  name: "MainCarousel",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/pic3.jpg"),
        },
        {
          src: require("../assets/images/pic4.jpg"),
        },
        {
          src: require("../assets/images/pic5.jpg"),
        },
        {
          src: require("../assets/images/pic6.jpg"),
        },
        {
          src: require("../assets/images/pic7.jpg"),
        }
      ],
    };
  },
};
</script>
<style>
.main-carousel{
  margin-left: 150px;
  margin-right: 150px;
}
</style>