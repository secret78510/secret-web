<template>
  <div class="wrap">
     <div class="newsImg">
          <h2>情人節</h2>
      </div>
      <div class="container py-3">
        <div class="row text-center font-weight-bold">
          <div class="col">
            <h2 class="text-success">2/14情人節活動</h2><br>
            <p>
              為了響應一年一度的情人節<br><br>
              本館全面七折外<br><br>
              滿500元還送一朵玫瑰花(會在運送時一同寄去)<br><br>
            </p>
            <img class="newsImg-fit" src="https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="">
            <br>
            <br>
            <p>幫助那些單身的女孩告白<br><br>
            如告白失敗還能享有7折優惠的食物<br><br>
            在悲傷的時吃下酸甜的草莓<br><br>
            就像愛情一樣酸甜美味<br><br>
            趕快到以下索取優惠卷吧<br><br>
            限量300名 就只有2/14千萬別錯過<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">
              優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:valentineDay</p>
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
.wrap{
  margin-top: 67px;
}
.newsImg {
  background-image: url(https://images.unsplash.com/photo-1517938833378-3c78e6c8ddf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
p{
  font-size: 20px;
  margin: 0;
}

</style>
