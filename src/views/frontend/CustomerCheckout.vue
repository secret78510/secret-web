<template>
  <div class="wrap">
    <div v-if="isLoading" class="loading">
      <div class="loading-item fas fas fa-apple-alt"></div>
      <div class="loading-item fas fa-lemon"></div>
      <div class="loading-item fas fa-carrot"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="text-center text-primary pt-5 font-weight-bold progressTitle">結帳進度</h4>
          <ul class="progressBar pt-5">
            <li>0</li>
            <li>25</li>
            <li>50</li>
            <li>75</li>
            <li>100</li>
          </ul>
        </div>
      </div>
      </div>
      <div class="row my-5 justify-content-center">
        <form class="col-md-6 mt-5" @submit="payOrder">
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                <td class="align-middle">{{ item.final_total }}元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td>{{ order.total }}元</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <a href="#" class="btn btn-danger mr-3" @click="payOrder">確認付款去</a>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUMSTOMPATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.order = response.data.order;
        this.isLoading = false;
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUMSTOMPATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then(() => {
        this.getOrder();
        this.isLoading = false;
        this.$router.push('/checkout_complete');
      });
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId; // 取得網址的ID
    this.getOrder();
    this.$store.dispatch('getCart');
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
  overflow: hidden;
}
.questionnaire{
  display: none;
}
.progressBar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 10px;
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
    content: '';
    height: 10px;
    width: 88px;
    background-color: white;
    border: solid 1px #333;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
  li:not(:nth-of-type(5)) {
    background-color: #02C874;
  }
  li:not(:nth-of-type(4))::after {
    background-color: #02C874;
  }
  li:nth-of-type(4)::before {
    content: "確認訂單";
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
    li {
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin-right: 30px;
    }
    li:not(:last-child)::after {
      width: 32px;
    }
    li:not(:last-child){
      padding: 0 6px;
    }
    li:first-child{
      padding: 0 8px;
    }
    li:nth-of-type(4)::before {
      left: -26px;
      width: 80px;
    }
  }
}
</style>
