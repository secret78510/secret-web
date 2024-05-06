<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>教師節活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">9/18教師節活動</h2><br>
            <p>
              歡慶一年一度的教師節<br><br>
              感謝那些辛苦的老師<br><br>
              培育出我們以及未來的國家棟樑<br><br>
              除了全館消費打八折外<br><br>
              消費滿300元還送一盒鉛筆盒(會在運送時一同寄去)<br><br>
              這次限量3000名<br><br>
            </p>
            <img class="newsImg-fit" src="~@/assets/img/pencil.png" alt="">
            <br>
            <br>
            <p>
              感謝老師的辛苦以外<br><br>
              希望孩子也能在教師節開心度過<br><br>
              各位爸爸媽媽千萬不能過錯<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:teacherDay</p>
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
  background-image: url(~@/assets/img/classroom.png);
}
p{
  font-size: 20px;
  margin: 0;
}
.newsImg-fit{
  height: 400px;
  width: 400px;
  object-position:bottom;
}
@media (max-width: 768px) {
  .newsImg h2{
    font-size: 26px;
  }
}
@media (max-width: 575.98px) {
  .newsImg-fit{
    height:300px;
    width: 300px;
  }
  .newsImg h2{
    font-size: 18px;
  }
}
</style>
