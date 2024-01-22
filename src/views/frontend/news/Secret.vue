<template>
  <div class="wrap">
    <div class="newsImg">
      <h2>secret十周年活動</h2>
    </div>
    <div class="container">
      <div class="row text-center font-weight-bold py-3">
        <div class="col">
            <h2 class="text-primary">12/1secret十周年活動</h2><br>
            <p>
              辛苦經營迎來第一個十年<br><br>
              為了這十年來一直支持我們的客戶<br><br>
              這是秘密決定要大家看到我們的用心<br><br>
              全館消費打5折<br><br>
              消費滿1000元送神秘小禮物<br><br>
              這次無限名額<br><br>
            </p>
            <img class="newsImg-fit" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="">
            <br>
            <br>
            <p>
              這次千萬不要錯過<br><br>
              秘密第一個十年 與你一起同享<br><br>
              請點取以下按鈕 領取優惠卷使用<br><br>
            </p>
            <button class="btn btn-outline-primary" @click="couponCode = !couponCode">優惠卷</button>
            <p v-if="couponCode" class="text-danger pt-3">優惠卷:secret</p>
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
  background-image: url(https://images.unsplash.com/photo-1472195870936-d88b0d4c1b41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
p{
  font-size: 20px;
  margin: 0;
}

</style>
