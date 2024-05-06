<template>
  <div class="wrap">
    <div v-if="isLoading" class="loading">
      <div class="loading-item fas fas fa-apple-alt"></div>
      <div class="loading-item fas fa-lemon"></div>
      <div class="loading-item fas fa-carrot"></div>
    </div>
    <section>
      <div class="img">
        <h2>購物車</h2>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="progress-wrap">
          <h4 class="text-center text-primary pt-5 font-weight-bold progressTitle">結帳進度</h4>
          <ul class="progressBar py-5">
            <li>0</li>
            <li>25</li>
            <li>50</li>
            <li>75</li>
            <li>100</li>
          </ul>
        </div>
        <table class="table text-center">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th class="smallPhoneHide">單價</th>
            <th>小計</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                {{ item.product.title }}
              </td>
              <td class="align-middle p-0" @change="finalTotal">
                {{ item.qty }} {{ item.product.unit }}
              </td>
              <td class="align-middle smallPhoneHide">{{ item.product.price | currency }}</td>
              <td class="align-middle">
                {{ item.qty * (item.product.price ? item.product.price : item.product.origin_price)
                 | currency }}
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCart(item.product_id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart">
          <p class="text-right" v-if="cart.carts">
            <span>總計共</span>
            <b>{{ cart.carts.length }}</b>
            <span>種商品</span>
          </p>
          <p class="text-right" style="font-size:22px">總計:{{ total | currency }}</p>
          <p
            class="text-right"
            style="font-size:22px"
            v-if="cart.final_total !== cart.total"
          >折扣價:{{ final_total | currency }}</p>
          <p class="text-right text-primary py-2">(免運費)信用卡付款</p>
          <div class="clearfix py-2">
            <button
              class="btn btn-outline-primary btn-sm float-right rounded-0 btn-custom"
              type="button"
              @click.prevent="addCoupon"
              style="height:28px"
            >套用優惠碼</button>
            <input
              type="text"
              class="float-right rounded-0"
              style="height:28px"
              width="40%"
              placeholder="請輸入優惠碼"
              v-model="couponCode"
            />
          </div>
          <div class="clearfix">
            <p
              class="text-danger float-right clearfix text-align-left"
              v-if="error.length > 1"
            >{{ this.error }}</p>
          </div>
          <div class="clearfix">
            <a
              href="#"
              class="btn btn-primary btn-lg float-right text-white"
              style="margin-top: 10px"
              type="button"
              @click="addCart"
            >結帳去</a>
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
      couponCode: '',
      isLoading: false,
      error: '',
      productNum: 1,
      total: 0,
      cart: {},
      final_total: 0,
      delCart: {},
      origin_carts: [],
    };
  },
  methods: {
    returnShop() {
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`;
      this.$http.get(api).then(() => {
        if (this.cart.carts.length === 0) {
          this.getCart();
          this.$bus.$emit('message:push', '購物車內無商品，請選購。');
          this.$router.push('/product_list');
        }
      });
    },
    removeCart(id) {
      const carts = this.origin_carts.filter((item) => item.product_id === id);
      const vm = this;
      vm.isLoading = true;
      const aa = carts.map(async (item) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/cart/${item.id}`;
        await vm.$http.delete(api).then(() => { });
      });
      Promise.allSettled([...aa]).then(() => {
        vm.isLoading = false;
        vm.getCart();
        vm.returnShop();
      });
    },
    useAllCoupon(carts) {
      const coupons = carts.filter(((item) => item.coupon));
      const api = `${process.env.VUE_APP_APIPATH}/api/coupon`;
      const { code } = coupons[0].coupon;
      this.$http.post(api, { data: { code } }).then((response) => {
        if (response.data.success) {
          this.getCart();
        }
      });
    },
    addCoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/coupon`;
      const coupon = {
        code: this.couponCode,
      };
      this.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          this.getCart();
          this.isLoading = false;
          this.error = '';
        } else {
          this.isLoading = false;
          this.error = response.data.message;
        }
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        const coupons = response.data.data.carts?.filter(((item) => item.coupon));
        if (coupons?.length && coupons.length < response.data?.data?.carts?.length) {
          this.useAllCoupon(response.data.data.carts);
        } else {
          this.origin_carts = [...response.data.data.carts];
          this.cart = response.data.data;
          const newCart = JSON.parse(JSON.stringify(this.cart));
          const cartsMap = new Map();
          newCart.carts.forEach((item) => {
            cartsMap.set(item.product.id, item);
          });
          cartsMap.forEach((mapItem) => {
            const MapItem = mapItem;
            MapItem.qty = 0;
            MapItem.final_total = 0;
            MapItem.total = 0;
          });
          cartsMap.forEach((mapItem) => {
            const MapItem = mapItem;
            this.cart.carts.forEach((item) => {
              if (item.product_id === MapItem.product_id) {
                MapItem.qty += item.qty;
                MapItem.final_total = item.final_total;
                MapItem.total = item.total;
              }
            });
          });
          this.cart.carts.splice(0, this.cart.carts.length);
          cartsMap.forEach((map) => this.cart.carts.push(map));
          this.isLoading = false;
        }
      });
    },
    addCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`;
      let delApi = '';
      let cart = {};
      const vm = this;
      (async function IIFE() {
        await vm.$http.get(api).then((response) => {
          vm.delCart = response.data.data;
        });
        await vm.delCart.carts.forEach(async (item) => {
          delApi = `${process.env.VUE_APP_APIPATH}/api/cart/${item.id}`;
          await vm.$http.delete(delApi).then(() => {});
        });
        await vm.cart.carts.forEach(async (item) => {
          cart = {
            product_id: item.product.id,
            qty: item.qty,
          };
          await vm.$http.post(api, { data: cart }).then(() => { });
        });
        if (vm.cart.carts?.length && vm.cart.carts.some((item) => (item?.coupon))) {
          const couponApi = `${process.env.VUE_APP_APIPATH}/api/coupon`;
          const code = vm.cart.carts.find((item) => (item?.coupon))?.coupon?.code;
          await vm.$http.post(couponApi, { data: { code } }).then(() => {});
        }
        vm.$router.push('/order');
      }());
    },
    finalTotal() {
      this.total = 0;
      this.final_total = 0;
      this.cart.carts.forEach((item) => {
        const price = item.product.price ? item.product.price : item.product.origin_price;
        const coupon = item?.coupon?.percent ?? 100;
        this.total += item.qty * price;
        this.final_total += (item.qty * price * coupon) / 100;
      });
    },
  },
  created() {
    this.getCart();
  },
  beforeUpdate() {
    this.finalTotal();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
.img {
  background-image: url(~@/assets/img/shoppingCartBg.png);
  width: 100%;
  height: 25vw;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    font-weight: bold;
    font-size: 40px;
  }
}
.cart {
  padding: 20px;
  p {
    margin: 0;
  }
  input[type="text"] {
    border: #01814a 1px solid;
    border-radius: 4px;
  }
  input[type="text"]:focus {
    outline: #01814a 3px solid;
    box-shadow: 2px 2px 10px #484891;
  }
}
.btn-custom:focus{
  box-shadow: none !important;
  color: #fff !important;
  background-color: #336666 !important;
}
.progress-wrap{
  padding-left: 74px;
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
    background-color: white;
    text-align: center;
    line-height: 40px;
    margin-right: 85px;
    position: relative;
  }
  li:not(:last-child)::after {
    content: "";
    height: 10px;
    width: 90px;
    background-color: white;
    border: solid 1px #333;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
  li:nth-of-type(1),
  li:nth-of-type(2) {
    background-color: #02C874;
  }
  li:nth-of-type(1)::after {
    background-color: #02C874;
  }
  li:nth-of-type(2)::before {
    content: "購物車選購";
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
  margin-right: 45px;
}
@media (max-width: 768px) {
  .progress-wrap{
  padding-left: 24px;
  }
  .progressTitle {
    margin-right: 30px;
  }
  .progressBar {
    padding-left: 20px;
    li {
      margin-right: 50px;
    }
    li:not(:last-child)::after {
      width: 52px;
    }
    li:nth-of-type(2)::before {
      left: -24px;
      width: 80px;
    }
  }
}
@media (max-width: 500.98px) {
  .progress-wrap{
  padding-left: 10px;
  }
  .progressTitle {
    margin-right: 5px;
  }
  .progressBar {
    padding-left: 20px;
    width: 100%;
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
      padding: 0 4px;
    }
    li:first-child{
      padding: 0 8px;
    }
    li:nth-of-type(2)::before {
      left: -26px;
      width: 80px;
    }
  }
}
@media (max-width: 350px) {
  .progress-wrap{
  padding-left: 0;
  }
  .smallPhoneHide{
    display: none;
  }
}
</style>
