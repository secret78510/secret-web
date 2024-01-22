<template>
  <div class="wrap">
    <section>
      <div class="container">
        <div class="row justify-content-center py-5">
          <div class="col-md-7 mx-auto">
            <h2 class="text-center text-info pb-5">問卷活動</h2>
            <form @submit.prevent="status = !status">
              <div class="survey py-2">
                <h5>1.我們的產品滿意度</h5>
                <label class="px-2" for="productVe
                ryGood">非常好</label>
                <input type="radio" value="productVe
                ryGood" id="productVe
                ryGood"
                name="product" required>
                <label class="px-2" for="productGood">好</label>
                <input type="radio" value="productGood" id="productGood" name="product">
                <label class="px-2" for="productOrdinary">普通</label>
                <input type="radio" value="productOrdinary" id="productOrdinary" name="product">
                <label class="px-2" for="productBad">差</label>
                <input type="radio" value="productBad" id="productBad" name="product">
                <label class="px-2" for="productVeryBad">非常差</label>
                <input type="radio" value="productVeryBad" id="productVeryBad" name="product">
              </div>
              <div class="survey py-2">
                <h5>2.蔬果的新鮮度</h5>
                <label class="px-2" for="freshVeryGood">非常好</label>
                <input type="radio" value="freshVeryGood" id="freshVeryGood" name="fresh" required>
                <label class="px-2" for="freshGood">好</label>
                <input type="radio" value="freshGood" id="freshGood" name="fresh">
                <label class="px-2" for="freshOrdinary">普通</label>
                <input type="radio" value="freshOrdinary" id="freshOrdinary" name="fresh">
                <label class="px-2" for="freshBad">差</label>
                <input type="radio" value="freshBad" id="freshBad" name="fresh">
                <label class="px-2" for="freshVeryBad">非常差</label>
                <input type="radio" value="freshVeryBad" id="freshVeryBad" name="fresh">
              </div>
              <div class="survey py-2">
                <h5>3.員工服務態度</h5>
                <label class="px-2" for="attitudeVeryGood">非常好</label>
                <input type="radio" value="attitudeVeryGood" id="attitudeVeryGood"
                name="attitude" required>
                <label class="px-2" for="attitudeGood">好</label>
                <input type="radio" value="attitudeGood" id="attitudeGood" name="attitude">
                <label class="px-2" for="attitudeOrdinary">普通</label>
                <input type="radio" value="attitudeOrdinary" id="attitudeOrdinary" name="attitude">
                <label class="px-2" for="attitudeBad">差</label>
                <input type="radio" value="attitudeBad" id="attitudeBad" name="attitude">
                <label class="px-2" for="attitudeVeryBad">非常差</label>
                <input type="radio" value="attitudeVeryBad" id="attitudeVeryBad" name="attitude">
              </div>
              <div class="survey py-2">
                <h5>4.售後服務</h5>
                <label class="px-2" for="serviceVeryGood">非常好</label>
                <input type="radio" value="serviceVeryGood" id="serviceVeryGood"
                name="service" required>
                <label class="px-2" for="serviceGood">好</label>
                <input type="radio" value="serviceGood" id="serviceGood" name="service">
                <label class="px-2" for="serviceOrdinary">普通</label>
                <input type="radio" value="serviceOrdinary" id="serviceOrdinary" name="service">
                <label class="px-2" for="serviceBad">差</label>
                <input type="radio" value="serviceBad" id="serviceBad" name="service">
                <label class="px-2" for="serviceVeryBad">非常差</label>
                <input type="radio" value="serviceVeryBad" id="serviceVeryBad" name="service">
              </div>
              <div class="survey py-2">
                <h5>5.價錢是否合意</h5>
                <label class="px-2" for="priceVaryHight">非常高</label>
                <input type="radio" value="priceVaryHight" id="priceVaryHight"
                name="price" required>
                <label class="px-2" for="priceHight">高</label>
                <input type="radio" value="priceHight" id="priceHight" name="price">
                <label class="px-2" for="priceMiddle">中</label>
                <input type="radio" value="priceMiddle" id="priceMiddle" name="price">
                <label class="px-2" for="priceLow">低</label>
                <input type="radio" value="priceLow" id="priceLow" name="price">
                <label class="px-2" for="priceVeryLow">非常低</label>
                <input type="radio" value="priceVeryLow" id="priceVeryLow" name="price">
              </div>
              <div class="survey py-2">
                <h5>6.便利性</h5>
                <label class="px-2" for="convenientVeryGood">非常好</label>
                <input type="radio" value="convenientVeryGood" id="convenientVeryGood"
                name="convenient" required>
                <label class="px-2" for="convenientGood">好</label>
                <input type="radio" value="convenientGood" id="convenientGood" name="convenient">
                <label class="px-2" for="convenientOrdinary">普通</label>
                <input type="radio" value="convenientOrdinary" id="convenientOrdinary"
                name="convenient">
                <label class="px-2" for="convenientBad">差</label>
                <input type="radio" value="convenientBad" id="convenientBad" name="convenient">
                <label class="px-2" for="convenientVeryBad">非常差</label>
                <input type="radio" value="convenientVeryBad" id="convenientVeryBad"
                name="convenient">
              </div>
              <div class="survey py-2">
                <h5 class="pb-3">需要改進的地方</h5>
                <textarea
                  class="px-2 w-100"
                  id="comment"
                  cols="30"
                  rows="10"
                  style="resize:none"
                ></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-danger">送出問卷</button>
              </div>
            </form>
            <div v-if="status" class="coupon pb-3 pt-5 text-center">
              <p>優惠卷:questionnaire <router-link to="/product_list"
               type="button" class="btn btn-outline-success">立即使用</router-link ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
.survey{
  h5{
    font-size: 30px;
  }
  label{
    font-size: 22px;
  }
}
.coupon{
  p{
    font-size:22px;
  }
}
</style>
