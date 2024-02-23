<template>
  <div class="wrap">
    <div class="col-12">
        <h4 class="text-center text-primary py-4 pt-5 font-weight-bold progressTitle">結帳進度</h4>
        <ul class="progressBar pt-4 pb-5">
          <li>0</li>
          <li>25</li>
          <li>50</li>
          <li>75</li>
          <li>100</li>
        </ul>
      </div>
    <div class="my-5 row justify-content-center">
      <div class="col-md-6 font-weight-bold px-5">
        <ValidationObserver rules="required" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(createOrder)">
            <h2 class="text-center pb-4">表單資料</h2>
            <div class="form-group">
              <ValidationProvider rules="name:2|nameUnfilled" v-slot="{ errors }">
                <label for="username"><span class="text-danger">*</span>收件人姓名</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  v-model="form.user.name"
                  placeholder="輸入姓名"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="creditCardUnfilled" v-slot="{ errors }">
                <label for="userCreditCard"><span class="text-danger">*</span>信用卡卡號</label>
                <input
                  type="text"
                  class="form-control"
                  name="creditCard"
                  id="userCreditCard"
                  placeholder="請輸入16碼卡號"
                  v-model="userCreditCard"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="email" v-slot="{ errors }">
                <label for="useremail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="useremail"
                  v-model="form.user.email"
                  placeholder="請輸入 Email"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="phone|phoneUnfilled" v-slot="{ errors }">
                <label for="usertel"><span class="text-danger">*</span>收件人電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="usertel"
                  v-model="form.user.tel"
                  placeholder="請輸入電話"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider rules="address:10|addressUnfilled" v-slot="{ errors }">
                <label for="useraddress"><span class="text-danger">*</span>收件人地址</label>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  id="useraddress"
                  v-model="form.user.address"
                  placeholder="請輸入地址"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="comment">留言</label>
              <textarea
                style="resize:none"
                id="comment"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-right">
              <input type="submit" class="btn btn-danger" value="送出訂單">
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      userCreditCard: '',
    };
  },
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/order`;
      const { user } = this.form;
      const { message } = this.form;
      this.isLoading = true;
      this.$http.post(api, { data: { user, message } }).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.$router.push(`/customer_checkout/${response.data.orderId}`);
        } else {
          this.isLoading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
  overflow: hidden;
}
.progressBar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 20px;
  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #333;
    background-color: white;
    text-align: center;
    line-height: 40px;
    margin-right: 85px;
    position: relative;
  }
  li:not(:last-child)::after {
    content: "";
    height: 10px;
    width: 88px;
    background-color: white;
    border: solid 1px #333;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
  li:nth-of-type(1),
  li:nth-of-type(2),
  li:nth-of-type(3) {
    background-color: #02C874;
  }
  li:nth-of-type(1)::after,
  li:nth-of-type(2)::after {
    background-color: #02C874;
  }
  li:nth-of-type(3)::before{
    content: '表單填寫';
    position: absolute;
    top: 100%;
    left: -22px;
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
    margin-left: 0;
    li{
      margin-right: 50px;
    }
    li:not(:last-child)::after {
      width: 52px;
    }
  }
}
@media (max-width: 500.98px) {
  .progressBar {
    padding-right: 25px;
    li {
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin-right: 30px;
    }
    li:not(:last-child)::after {
      width: 32px;
      padding: 6px;
    }
    li:not(:last-child){
      padding: 0 4px
    }
    li:first-child{
      padding: 0 8px;
    }
    li:nth-of-type(3)::before{
    left: -26px;
    width: 80px;
    }
  }
}
</style>
