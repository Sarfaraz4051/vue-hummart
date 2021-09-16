<template>
    <div>
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
