<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="block">
          <div class="block-title">
            <strong>HUMMART</strong>
          </div>
          <div class="block-content">
            <div class="link">
              <a href="">About us</a>
            </div>
            <div class="link">
              <a href="">Careers</a>
            </div>
            <div class="link">
              <a href="">Sell on HumMart</a>
            </div>
            <div class="link">
              <a href="">Terms & Conditions</a>
            </div>
            <div class="link">
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block-title">
            <strong>HELP</strong>
          </div>
          <div class="block-content">
            <div class="link">
              <a href="">FAQS</a>
            </div>
            <div class="link">
              <a href="">How to Order</a>
            </div>
            <div class="link">
              <a href="">How to Pay</a>
            </div>
            <div class="link">
              <a href="">Return & Refunds</a>
            </div>
            <div class="link">
              <a href="">Contact us</a>
            </div>
            <div class="link">
              <a href="">Delivery</a>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </div>
      <div class="last-footer">
        <div>
          © Hummart.com 2020. All Rights Reserved<br />
          Powered By <a href="https://www.matechco.com/">Matech CO</a>
        </div>
        <div>
          <img src="../assets/images/easy.png" alt="easypaisa" />
          <img src="../assets/images/VISA.png" alt="VISA" />
          <img src="../assets/images/mastercard.png" alt="Mastercard" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.container {
  padding-top: 20px;
  margin: 20px 150px;
}
.footer {
  max-width: 100%;
  min-height: 400px;
  color: #7b858a;
  background-color: #292929;
}
.last-footer {
  border-top: 2px solid #7b858a;
  margin-top: 50px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.row {
  display: flex;
  justify-content: space-evenly;
}
.block-title {
  color: white;
  padding: 10px 0 10px 0;
}
.block-content {
  display: flex;
  flex-direction: column;
}
.link {
  padding: 4px;
}
.link > a {
  color: #7b858a;
  text-decoration: none;
}
.link > a:hover,
a:active {
  text-decoration: underline;
}
</style>