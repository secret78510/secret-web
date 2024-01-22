<template>
  <div class="wrap">
    <div class="container font-weight-bold">
      <div class="row borderBottom pb-2 text-center pt-3">
        <div class="col">
          <h2 class="text-info">歡迎來電</h2>
          <p class="font-size">只要有任何問題不論是產品還是品質或其他問題，<br>歡迎來電詢問任何關於秘密的問題。</p>
        </div>
      </div>
      <div class="row pt-4 font-size ">
        <div class="col paddingLeft">
          <div>
            <p>
              <i class="fas fa-phone"></i>
              電話:00-1234-5678
            </p>
            <p>
              <i class="fab fa-line"></i>
              Line:<a href="https://hub.line.me/" target="blank">https://hub.line.me/</a>
            </p>
            <p>
              <i class="fab fa-facebook-square"></i>
              facebook:<a href="https://www.facebook.com" target="blank">https://www.facebook.com</a>
            </p>
          </div>
          <div class="pl-2">
              <p class="text-secondary">上班時間：週一至週五 09:00~18:00 (午休一小)</p>
              <p class="text-secondary">地址:地球的某個角落</p>
          </div>
        </div>
        <div class="col-12">
          <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d231123.80101258002!2d121.66279117246093!3d25.15902899476332!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1592992805269!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
.borderBottom {
  border-bottom: 2px solid #336666;
}
.font-size {
  font-size: 20px;
}
.paddingLeft{
  padding-left: 40px;
}
@media (max-width: 768px) {
  .paddingLeft{
  padding-left: 15px;
}
}
</style>
