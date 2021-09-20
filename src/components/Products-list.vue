<template>
  <div>
    <h2 class="products-heading">Discounted Offers</h2>
    <div class="products">
      <div
        style="width: 20%"
        v-for="(offer, index) in offers"
        v-bind:key="index"
      >
        <product :offer="offer" />
      </div>
    </div>
  </div>
</template>
<script>
import Product from "./Product.vue";
export default {
  name: "Products",
  components: {
    Product,
  },
  data() {
    return {
      offers: [
        {
          img_src: "images/offers/1.jpg",
          old_price: "Rs 1050",
          new_price: "Rs 950",
          title:
            "BUY Vital Tea Zip Pack 950 Gm GET Vital Cardamom Green Tea Bags Box 30 Pcs FREE",
        },
        {
          img_src: "images/offers/2.jpg",
          old_price: "Rs 1060",
          new_price: "Rs 861",
          title:
            "BUY 4 Nestle Cerelac 3 Fruits Baby Food 175 Gm GET Nestle Cerelac Bowl FREE",
        },
        {
          img_src: "images/offers/3.jpg",
          old_price: "Rs 1005",
          new_price: "Rs 729",
          title:
            "BUY Menu Burger Patties 1075 Gm GET Menu Chicken Nuggets 270 Gm FREE",
        },
        {
          img_src: "images/offers/4.jpg",
          old_price: "Rs 360",
          new_price: "Rs 330",
          title:
            "BUY Nestle Pure Life Water 1.5 Ltr X 6 Pcs GET 3 Nestle Everyday Sachet 15 Gm FREEE",
        },
        {
          img_src: "images/offers/5.jpg",
          old_price: "Rs 335",
          new_price: "Rs 315",
          title:
            "BUY Nescafe Classic Coffee 50 Gm GET 2 Nestle Everyday Sachet 15 Gm FREE",
        },
      ],
    };
  },
};
</script>
<style>
.products {
  display: flex;
}
.products-heading {
  text-align: center;
}
</style>
