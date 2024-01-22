<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>兒童節活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">4/4兒童節活動</h2><br>
            <p>
              歡慶一年一度的兒童節<br><br>
              秘密這次不僅要讓大家開心<br><br>
              還要讓孩子一同開心<br><br>
              除了全館消費打八折外<br><br>
              消費滿100元還送一支棒棒糖(會在運送時一同寄去)<br><br>
              這次限量3000名<br><br>
            </p>
            <img class="newsImg-fit" src="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="">
            <br>
            <br>
            <p>
              除了讓大人省荷包外<br><br>
              就是希望孩子也能在兒童節開心度過<br><br>
              各位爸爸媽媽千萬不能過錯<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:childrensDay</p>
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
  background-image: url(https://images.unsplash.com/photo-1533234427049-9e9bb093186d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
p{
  font-size: 20px;
  margin: 0;
}
.newsImg-fit{
  height: 400px;
  width: 400px;
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
