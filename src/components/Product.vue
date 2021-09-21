<template>
  <div class="offer">
    <div>
      <img :src="image" alt="offer" />
    </div>
    <div>
      <p>
        {{ offer.title }}
      </p>
    </div>
    <div class="offer-detail">
      <div>
        <del>{{ offer.old_price }}</del>
        <sub>{{ offer.new_price }}</sub>
      </div>
      <div>
        <v-btn rounded color="primary" dark> Add to Cart </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    offer: Object,
  },
  data() {
    return {
      image: require(`../assets/${this.offer.img_src}`),
    };
  },
};
</script>
<style>
.offer {
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-bottom: 20px;
}
.offer-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:10px;
}
</style>