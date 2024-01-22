<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>除夕活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">1/24除夕活動</h2><br>
            <p>
              恭喜2020迎新春<br><br>
              秘密這次決定讓大家省荷包 過個好年<br><br>
              發瘋了 第一次全館消費打三折<br><br>
              還送橘子包你大吉大利(會在運送時一同寄去)<br><br>
            </p>
            <img class="newsImg-fit" src="https://images.unsplash.com/photo-1575411619998-a654a55391da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="">
            <br>
            <br>
            <p>
              不限制任何名額<br><br>
              直到賣完為止<br><br>
              讓我們擁有一個完美的新年<br><br>
              史上最狂 走過路過千萬別錯過<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:newYearsEve</p>
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
  background-image: url(https://images.unsplash.com/photo-1576948794092-074fed67dea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
p{
  font-size: 20px;
  margin: 0;
}
</style>
