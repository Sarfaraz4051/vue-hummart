<template>
  <div class="cart">
    <div class="cart-heading">
      <h1>Hummart Cart</h1>
      <v-icon @click="toogleCart()" style="color: green">mdi-close</v-icon>
    </div>
    <div>
      <div v-for="(item, index) in totalItemsinCart" :key="item.title">
        <div class="row">
          <div>
            <img
              :src="require(`../assets/${item.img_src}`)"
              alt="pic"
              width="100px"
              height="100px"
            />
          </div>
          <div>
            <v-icon @click="removeItem(index)">mdi-close</v-icon>
          </div>
        </div>
        <div>
          {{ item.new_price }}
        </div>
        <div>
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="last-section">Total Ammount: {{ totalAmmount }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalAmmount: 0,
    };
  },
  methods: {
    toogleCart() {
      this.$emit("toogleCart");
    },
    removeItem(index) {
      console.log(index, " => index");
      this.$store.dispatch("removeCartItem", index);
    },
  },
  computed: {
    ...mapGetters(["totalItemsinCart"]),
  },
};
</script>
<style>
.cart {
  float: right;
  z-index: 1;
  background-color: white;
  padding: 20px;
  border: 2px solid green;
  width: 20%;
}
.cart-heading {
  display: flex;
  justify-content: space-between;
  color: green;
  border-bottom: 1px solid yellowgreen;
  margin-bottom: 10px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.last-section {
  bottom: 0;
  margin-top: 10px;
  background-color: yellowgreen;
  color: white;
  padding: 30px 10px 30px 10px;
}
</style>