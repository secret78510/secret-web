<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="questionnaire px-3 pt-2 pb-5 mt-5">
            <h4 class="text-center text-primary pt-5 font-weight-bold progressTitle">結帳進度</h4>
            <ul class="progressBar pt-5">
              <li>0</li>
              <li>25</li>
              <li>50</li>
              <li>75</li>
              <li>100</li>
            </ul>
            <h2 class="text-center text-info pb-3 pt-5">購物完成</h2>
            <p>本產品約一個工作天後低溫宅配到府，如不須立即食用可放入冰箱冷藏5天，超過天數則會造成腸胃不適，
              如有任何問題請撥打00-1234-5678聯絡我們。
            </p>
            <router-link class="btn btn-outline-info d-block mx-auto py-2 mt-4 text-dark"
            to="/product_list"
            style="width:200px">
            繼續購物</router-link>
            <h2 class="text-center text-info pb-3 pt-5">限時活動</h2>
            <p>親愛的客戶您好，感謝你完成這次的購物。
              目前有問卷滿意調查限時活動，為了讓祕密變得更好
              ，還有感謝支持我們的客戶，只要填寫完問卷就送全舘2折優惠卷，請點擊下方按鈕。
            </p>
            <router-link class="btn btn-outline-info d-block mx-auto py-2 mt-4 text-dark"
            to="/questionnaire"
            style="width:200px">
            立即參加</router-link>
          </div>
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

<style scoped lang="scss">
.wrap {
  margin-top: 67px;
  padding-bottom: 50px;
  background-color: #ccc;
}
.questionnaire{
  background-color: rgba(238, 247, 245, 0.6);
  font-weight: bold;
  h2{
    font-weight: bold;
  }
  p{
    font-size: 20px;
  }
}
.progressBar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #333;
    background-color: #02C874;
    text-align: center;
    line-height: 40px;
    margin-right: 85px;
    position: relative;
  }
  li:not(:last-child)::after {
    content: '';
    height: 10px;
    width: 88px;
    background-color: #02C874;
    border: solid 1px #333;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
  li:nth-of-type(5)::before {
    content: "購物完成";
    position: absolute;
    top: 100%;
    left: -24px;
    text-align: center;
    width: 80px;
    color: #333333;
    font-weight: bold;
  }
}
.progressTitle {
  margin-right: 25px;
}
@media (max-width: 768px) {
  .progressTitle {
    margin-right: 0;
  }
  .progressBar {
    li {
      margin-right: 50px;
    }
    li:not(:last-child)::after {
      width: 52px;
    }
  }
}
@media (max-width: 500.98px) {
  .progressBar {
    margin-left: 0;
    li{
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin-right: 30px;
    }
    li:not(:last-child)::after {
      width: 32px;
    }
    li:not(:last-child){
      padding: 0 5px;
    }
    li:first-child{
      padding: 0 8px;
    }
    li:nth-of-type(5)::before {
      left: -26px;
      width: 80px;
    }
  }
}
@media (max-width: 320px){
  .progressBar{
    li:nth-of-type(5)::before {
      content: '完成';
    }
  }
}
</style>
