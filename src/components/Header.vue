<template>
  <div>
    <div id="upperbar">
      Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
      Electronics nationwide
    </div>
    <div id="thirdbar">
      <i class="fa fa-phone phone-icon"> </i>
      (021) 111 116 278
      <a href="#">Customer Care</a>
      <a href="#">Login</a>
    </div>

    <div class="container">
      <div class="main-bar">
        <div>
          <a href="#"
            ><img
              :src="require('../assets/images/humlogo.png')"
              alt="Hummart Logo"
          /></a>
        </div>
        <div class="search-container">
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Search entire store here..."
              name="search"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <img :src="require('../assets/images/Toys_Gif.gif')" alt="gif" />
        </div>
        <div>
          <v-icon @click="toogleCart()" style="color: green">mdi-cart</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    showcart: Boolean,
  },
  data() {
    return {
      // showcart: true,
    };
  },
  computed: {},
  methods: {
    toogleCart() {
      this.$emit('toogleCart');
    },
  },
};
</script>
<style>
.phone-icon {
  font-size: 18px;
  color: white;
}
#upperbar {
  background-color: black;
  height: 40px;
  padding: 10px;
  text-align: center;
  color: white;
}
#thirdbar {
  border-top: 4px solid #7bae23;
  background-color: #ececec;
  display: flex;
  justify-content: flex-end;
}
#thirdbar > a {
  color: black;
  margin: 0px 10px 0px 10px;

  text-decoration: none;
}
#thirdbar > a:hover,
a:active {
  color: red;
  text-decoration: none;
}
.main-bar {
  font-weight: 400;
  height: 40px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  margin-bottom: 30px;
}
.main-bar input[type="text"] {
  background-color: #ececec;
  padding: 6px;
  width: 500px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
}
.main-bar .search-container button {
  float: right;
  color: white;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: rgb(223, 86, 22);
  font-size: 17px;
  border: none;
  cursor: pointer;
}
</style>