<template>
    <div class="categories">
        <h2>Categories</h2>
        <div v-for="(category,index) in categories" v-bind:key="index" >
            <Category :category="category" />
        </div>
    </div>
</template>
<script>
import Category from './Category.vue';
export default {
    name:'Categories',
    data(){
        return {
            categories:[
                {
                    image:'1.jpg',
                    title:'Grocery & Staples',
                     description:'Pulses, Atta, Rice, Dry Fruits, Oil, Ghee, Spices, Salt, Sugar, Vinegar & Dressing '
                },
                {
                    image:'2.jpg',
                    title:'Noodles Sauces & Frozen Foods',
                     description:'Noodles, Baking & Dessert Items, Sauces & Ketchups, Pasta & Soups, Jam, Honey & Spreads'
                },
                {
                    image:'3.jpg',
                    title:'Biscuits, Snacks & Chocolates',
                     description:'Pulses, Atta, Rice, Dry Fruits, Oil, Ghee, Spices, Salt, Sugar, Vinegar & Dressing '
                },
                {
                    image:'4.jpg',
                    title:'Breakfast & Dairy',
                     description:'Noodles, Baking & Dessert Items, Sauces & Ketchups, Pasta & Soups, Jam, Honey & Spreads'
                },
                {
                    image:'5.jpg',
                    title:'Baby & Kids',
                     description:'Pulses, Atta, Rice, Dry Fruits, Oil, Ghee, Spices, Salt, Sugar, Vinegar & Dressing '
                },
                {
                    image:'6.jpg',
                    title:'Fruits & Vegetables',
                     description:'Fruits, Vegetables, Cut Frsh, Sprouts & Herbs '
                },
                ]
        }
    },
    components:{
        Category
    }
}
</script>
<style>
.categories{
    padding: 10px;
    background-color: #ececec;
    
}
</style>
