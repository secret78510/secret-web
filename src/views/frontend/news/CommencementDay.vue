<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>開工日活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">1/29開工日活動</h2><br>
            <p>
              過完年開工第一天為勞大家的辛苦<br><br>
              全館消費打九折外<br><br>
              消費送開工紅包<br><br>
              一元復始 萬象更新<br><br>
            </p>
            <img class="newsImg-fit" src="https://images.unsplash.com/photo-1578073273382-f847b29d2192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80" alt="">
            <br>
            <br>
            <p>
              紅包限量前500個<br><br>
              讓我們開工有個好彩頭 整年旺旺來<br><br>
              要買要過 錯過就沒了<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:commencementDay</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponCode: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
.newsImg {
  background-image: url(https://images.unsplash.com/photo-1464660439080-b79116909ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
p{
  font-size: 20px;
  margin: 0;
}

</style>
