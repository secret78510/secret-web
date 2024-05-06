<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>聖誕節活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">12/25聖誕節活動</h2><br>
            <p>
              慶祝聖誕節<br><br>
              秘密這次要讓每個家庭一起感覺到聖誕節<br><br>
              除了全館消費打六折外<br><br>
              消費滿1000元還送一顆聖誕樹(會在運送時一同寄去)<br><br>
              這次不限名額<br><br>
            </p>
            <img class="newsImg-fit" src="~@/assets/img/ChristmasTree.png" alt="">
            <br>
            <br>
            <p>
              除了讓大人省荷包外<br><br>
              就是希望孩子也能感到聖誕氣氛<br><br>
              各位家庭千萬不能過錯<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:christmasDay</p>
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
  background-image: url(~@/assets/img/ChristmasDayBg.png);
}
p{
  font-size: 20px;
  margin: 0;
}
.newsImg-fit{
  height: 500px;
  width: 500px;
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
