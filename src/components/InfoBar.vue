<template>
<div class="info-bar">
    <div class="container info" >
        
        <div class="info-block ">
            <div class="info-item ">
                <div class="info-heading ">
                    <h3>Same/Next Day Delivery</h3>
                </div>
                <div class="info-content">
                    <p>Free delivery on all orders over Rs. 3,000</p>
                    <p>Rs 100 for orders below Rs. 3,000</p>
                    <p>Flat Rs 200 for Same Day orders</p>
                </div>
            </div>
        </div>

        <div class="info-block  ">
            <div class="info-item">
                <div class="info-heading ">
                    <h3>Cash On Delivery</h3>
                </div>
                <div class="info-content">
                    You pay when rider comes at your address.
                </div>
            </div>
        </div>

        <div class="info-block ">
            <div class="info-item ">
                <div class="info-heading ">
                    <h3>Online Support</h3>
                </div>
                <div class="info-content">    
                    <p>Customer support from 9AM - Midnight</p>
                    <p>(021)111 116 278</p>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name:'InfoBAr'
}
</script>

<style>
.info-bar{
    background-color: #ececec;
}
.info{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.info-block{
  display:flex;
  flex-direction: row;
}
.info-block > .icon-style{
  padding:10px; 
  align-self: center;
  font-size:48px;
  color:#7bae23;
}
</style>
