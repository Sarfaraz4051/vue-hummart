<template>
    <footer class="footer">
        <div class="container">
            <br> <br> <br>
            <div class="row">
                <div class="col-3">
                    <div class="block">
                        <div class="block-title">
                            <strong>HUMMART</strong>
                        </div>
                        <div class="block-content">
                            <div class="link">

                                <i class="fa fa-caret-right tick"></i>
                                <a href="">About us</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Careers</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Sell on HumMart</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Terms & Conditions</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-3">
                    <div class="block">
                        <div class="block-title">
                            <strong>HELP</strong>
                        </div>
                        <div class="block-content">

                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">FAQS</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">How to Order</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">How to Pay</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Return & Refunds</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Contact us</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Delivery</a>
                            </div>
                            <div class="link">
                                <i class="fa fa-caret-right tick"></i>
                                <a href="">Easy Paisa</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="block">
                        <div class="block-title">
                            <strong>CONTACT INFORMATION</strong>
                        </div>
                        <div class="block-content">
                            <div class="sub-title">PHONE</div>
                            (021) 111 116 278
                            <div class="sub-title">EMAIL</div>
                            <div class="link">
                                <a href="">customer@hummart.com</a>
                            </div>
                            <div class="sub-title">WORKING DAYS/HOURS</div>
                            Mon - Sun /9:00AM - 9:00PM
                            <br> <br>
                            <div>
                                <a href="#" class="fa fa-facebook fa-footer"></a>
                                <a href="#" class="fa fa-twitter fa-footer"></a>
                                <a href="#" class="fa fa-google fa-footer"></a>
                                <a href="#" class="fa fa-linkedin fa-footer"></a>
                                <a href="#" class="fa fa-youtube fa-footer"></a>
                                <a href="#" class="fa fa-instagram fa-footer"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="block">
                        <div class="block-title">
                            <strong>MOBILE APPS</strong>
                        </div>
                    </div>
                </div>
            </div> <br> <br> <br>
            <hr>
            <div class="last-footer">
                <div>
                    © Hummart.com 2020. All Rights Reserved<br>
                    Powered By <a href="https://www.matechco.com/">Matech CO</a>
                </div>
                <div>
                    <img src="../assets/images/easy.png" alt="easypaisa">
                    <img src="../assets/images/VISA.png" alt="VISA">
                    <img src="../assets/images/mastercard.png" alt="Mastercard">
                </div>
            </div>

        </div>
    </footer>

</template>
<script>
export default {
    name:'Footer'
}
</script>
<style>
.container{
    margin-left: 150px;
    margin-right: 150px;
    max-width:100%;
    margin-bottom: 20px;
}
.footer{
    max-width:100%;
    height:400px;
    color: #7B858A;
    background-color: #292929;
}
.last-footer{
 display: flex;
 justify-content: space-between;
}
.row{
  display:flex;
} 

.block-title{
    color:white;
    padding: 10px 0 10px 0;
}
.block-content{
  display:flex;
  flex-direction: column;
}.link{
  padding:2px;
}
.link>a{
  color:#7B858A;
  text-decoration: none;
}
.link>a:hover ,a:active{
  text-decoration: underline;
  }
</style>