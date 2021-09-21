<template>
  <div class="category-item">
    <div>
        <img :src="image" :alt="item" />
    </div>
    <div  class="category-details">
      <h3>{{ category.title }}</h3>
      <p>
        {{ category.description }}
      </p>
    </div>
    </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      image: require(`../assets/images/categories/${this.category.image}`),
    };
  },
  props: {
    category: Object,
  },
};
</script>
<style>
.category-item {
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-bottom:2px solid black;
}.category-details{
  display :flex;
  flex-direction: column;
  justify-content: center;
}
</style>