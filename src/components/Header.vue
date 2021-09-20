<template>
    <div>
        <div id="upperbar">
            Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys & Electronics nationwide
        </div>
        <div id="thirdbar">
            <i class="fa fa-phone phone-icon"> </i>
            (021) 111 116 278
            <a href="#">Customer Care</a>
            <a href="#">Login</a>
        </div>
        <br>
        <br>
    

       <h1>{{uppercaseHeading}}</h1> 
    </div>
</template>

<script>
export default{
    name:'Header',
    props:{
        heading:String
    },
    data(){
        return {
        }
    },
    computed:{
        uppercaseHeading: function () {
        return this.heading.toUpperCase();
        },
    }
}
</script>
<style>
.phone-icon{
    font-size:18px;
    color:white;
}
#upperbar{
    background-color: black;
    height:40px;
    padding: 10px;
    text-align: center;
    color: white;
}#thirdbar{
    border-top: 4px solid #7bae23;
    background-color:#ececec;
    display: flex;
    justify-content:flex-end;
}
#thirdbar >a{
    color: black;
    margin: 0px 10px 0px 10px;

    text-decoration: none;
}
#thirdbar >a:hover,a:active{
    color: red;
    text-decoration: none;
}
</style>