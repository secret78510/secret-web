<template>
  <div class="wrap">
    <div v-if="isLoading" class="loading">
      <div class="loading-item fas fas fa-apple-alt"></div>
      <div class="loading-item fas fa-lemon"></div>
      <div class="loading-item fas fa-carrot"></div>
    </div>
    <section class="py-4">
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fit" :src="product.imageUrl"/>
          </div>
          <div class="col-md-6">
            <ul class="list">
              <li>
                <b class="text-primary">商品名稱</b>
                {{ product.title }}
              </li>
              <li>
                <b class="text-primary">單位</b>
                {{ product.unit }}
              </li>
              <li>
                <b class="text-primary">數量</b>
                {{ productNumber }}
              </li>
              <li>
                <b class="text-primary">付款方式</b>
                <i class="far fa-credit-card"></i>
                  信用卡支付
              </li>
              <div class="d-flex justify-content-between">
                <div class="pt-2">
                  <span v-if="productNumber">
                    小計{{ product.price * productNumber | currency }}</span>
                  <span v-else>小計{{ product.price | currency }}</span>
                </div>
                <div>
                  <del>原價${{product.origin_price}}</del>
                  <b class="text-success" style="font-size:22px">
                    單價{{ product.price | currency }}</b>
                </div>
              </div>
              <div class="row pt-4">
                <div class="col-6">
                  <select class="w-100 h-100"  v-model="productNumber">
                 <option  :value="item" v-for="item in 10" :key="item">
                   選購{{ item }}{{ product.unit }}
                 </option>
                  </select>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100"
                    @click="addCart(product.id,productNumber)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem ===product.id"></i>
                    <i class="fas fa-shopping-cart" v-else></i>
                    加入購物車
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h4 class="text-center font-weight-bold">商品介紹</h4>
        <p class="text-center" style="font-size:18px">{{ product.description }}</p>
        <h4 class="text-center font-weight-bold">產品說明</h4>
        <p class="text-center" style="font-size:18px">{{ product.content }}</p>
      </div>
    </section>
    <router-link to="/product_list" class="iconTop" title="回到上一頁">
      <i class="fas fa-arrow-up"></i>
    </router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      product: {},
      cart: {},
      productNumber: 1,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.product = response.data.product;
      });
    },
    addCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        this.status.loadingItem = '';
        this.$store.dispatch('getCart');
      });
    },
  },
  created() {
    const localStr = JSON.parse(localStorage.getItem('product'));
    this.getProduct(localStr);
  },
};
</script>
<style lang="scss" scoped>
.wrap{
  margin-top: 67px;
  margin-bottom: 120px;
}

.container ul{
  padding: 0;
}
.img-fit{
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.list {
  b {
    width: 100px;
    display: inline-block;
  }
  li {
    list-style: none;
    border-bottom: 1px dotted #01814A;
    padding: 15px 0;
  }
}
.iconTop {
  transition: all 0.4s;
  position: fixed;
  right: 40px;
  bottom: 95px;
  font-size: 36px;
  color: #01814A;
}
.iconTop:hover {
  color: #2f6c47;
  transform: scale(1.2);
}
@media (max-width: 768px){
  .img-fit{
  height: 260px;
  object-fit: cover;
  }
  .iconTop {
  transition: all 0.4s;
  position: fixed;
  right: 20px;
  bottom: 95px;
  font-size: 24px;
  color: #01814A;
  }
}
</style>
