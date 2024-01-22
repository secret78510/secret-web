<template>
  <div class="wrap">
    <div v-if="isLoading" class="loading">
      <div class="loading-item fas fas fa-apple-alt"></div>
      <div class="loading-item fas fa-lemon"></div>
      <div class="loading-item fas fa-carrot"></div>
    </div>
    <div class="marquee bg-success">
      <i class="far fa-bell"></i>
      <span>點擊星星即可加入最愛，編輯喜愛的商品。</span>
    </div>
    <section>
      <div class="img">
        <h2>產品列表</h2>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-3 my-2">
            <div class="Sidebar-sticky">
              <h5 class="text-info">商品分類</h5>
              <ul class="Sidebar-menu">
                <li>
                  <a href="#" @click.prevent="category ='all'">全部商品</a>
                </li>
                <li>
                  <a href="#" @click.prevent="category ='蔬菜'">蔬菜</a>
                </li>
                <li>
                  <a href="#" @click.prevent="category ='水果'">水果</a>
                </li>
                <li>
                  <a href="#" @click.prevent="category ='我的最愛'">我的最愛</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9" >
            <div class="row" style="overflow:hidden">
              <div class="col-md-6 my-4 card-Hover" v-for="item in filteredTodo" :key="item.id"
              @click="getProduct(item.id)">
                <div class="card border-0 shadow-sm">
                  <div
                    style="height: 200px; background-size: cover; background-position: center"
                    :style="{backgroundImage: `url(${item.image})`}"
                  ></div>
                  <div class="card-body px-3 pb-1">
                    <div class="clearfix">
                      <button
                      class="fa-star btn-icon float-left"
                      title="加入最愛"
                     :class="{fas:item.isStar,far:!starProduct.id}"
                      @click.stop="addStar(item)"
                     ></button>
                      <del class="h6 float-right" v-if="item.price">
                        {{ item.origin_price | currency }}</del>
                    </div>
                    <div class="clearfix">
                      <span class="badge badge-success float" style="color:#1b1a1b">
                        {{ item.category }}</span>
                      <div class="h5 float-right" v-if="!item.price">
                        {{ item.origin_price | currency }}</div>
                      <div class="h5 float-right" v-if="item.price">
                        {{ item.price | currency }}</div>
                    </div>
                  </div>
                  <div class="px-3 pb-1">
                    <h4 >{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                      @click.stop="getProduct(item.id)"
                    >
                      <!-- icon讀取效果點擊時ID相等才觸發 -->
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingGetProduct === item.id"></i>
                    查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm ml-auto"
                      @click.stop="addCart(item.id)"
                    >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingAddCart === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a href="#" class="iconBottom" title="結帳去" @click.prevent="toShoppingCart()">
      <i class="fas fa-shopping-cart"></i>
      <small class="text-danger" v-if="cart.carts.length >= 1">{{ cart.carts.length }}</small>
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      status: {
        loadingAddCart: '',
        loadingGetProduct: '',
      },
      category: 'all',
      starProduct: [],
    };
  },
  computed: {
    filteredTodo() {
      const newProducts = {};
      switch (this.category) {
        case 'all':
          return this.products;
        case '蔬菜':
          for (let i = 0; i < this.products.length; i += 1) {
            if (this.products[i].category === '蔬菜') {
              newProducts[i] = this.products[i];
            }
          }
          return newProducts;
        case '水果':
          for (let i = 0; i < this.products.length; i += 1) {
            if (this.products[i].category === '水果') {
              newProducts[i] = this.products[i];
            }
          }
          return newProducts;
        case '我的最愛':
          return this.starProduct;
        default:
          return this.products;
      }
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUMSTOMPATH}/products/all`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
        const temCategory = sessionStorage.getItem('category');
        if (temCategory) {
          this.category = temCategory;
        }
        for (let i = 0; i < this.products.length; i += 1) {
          this.products[i].isStar = false;
        }
        this.myFavourite();
      });
    },
    myFavourite() {
      const localStoraged = JSON.parse(localStorage.getItem('Star'));
      if (localStoraged) {
        this.starProduct = localStoraged;
        this.products.forEach((product) => {
          const Product = product;
          this.starProduct.forEach((item) => {
            if (item.id === Product.id) {
              Product.isStar = true;
            }
          });
        });
      }
    },
    getProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUMSTOMPATH}/product/${id}`;
      this.status.loadingGetProduct = id;
      this.$http.get(api).then(() => {
        this.status.loadingGetProduct = '';
        localStorage.setItem('product', JSON.stringify(id));
        this.$router.push('/introduction');
      });
    },
    addCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUMSTOMPATH}/cart`;
      this.isLoading = true;
      this.status.loadingAddCart = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        this.$store.dispatch('getCart');
        this.status.loadingAddCart = '';
        this.isLoading = false;
      });
    },
    addStar(productItem) {
      const product = productItem;
      const avoidRepeat = this.starProduct.some((item) => item.id === product.id);
      if (!this.starProduct.includes(product) && !avoidRepeat) {
        product.isStar = true;
        this.starProduct.push(product);
      } else {
        product.isStar = false;
        this.starProduct.splice(this.starProduct.indexOf(product), 1);
        this.products.forEach((item) => {
          const Item = item;
          if (Item.id === product.id) {
            Item.isStar = false;
          }
        });
      }
      localStorage.setItem('Star', JSON.stringify(this.starProduct));
      this.myFavourite();
    },
    toShoppingCart() {
      this.$store.dispatch('getCart');
      if (this.cart.carts.length >= 1 && this.$router.history.current.path !== '/shopping_cart') {
        this.$router.push('/shopping_cart');
      } else if (this.$router.history.current.path !== '/product_list'
      && this.$router.history.current.path !== '/shopping_cart') {
        this.$router.push('/product_list');
        this.$bus.$emit('message:push', '購物車內無商品，請選購。');
      } if (!this.cart.carts.length) {
        this.$bus.$emit('message:push', '購物車內無商品，請選購。');
      }
    },
    removeSessionStorage() {
      sessionStorage.removeItem('category');
    },
  },
  created() {
    this.getProducts();
    this.$store.dispatch('getCart');
  },
  mounted() {
    window.addEventListener('unload', this.removeSessionStorage);
  },
  Destroy() {
    window.removeEventListener('unload', this.removeSessionStorage);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.btn-icon{
  background: none;
  outline: none;
  border: none;
  color:#336666;
  font-size: 20px;
}
.card-Hover{
  cursor: pointer;
}
.card-Hover:hover{
  transform: scale(1.01);
  transition: 0.3s;
}
.marquee {
  position: relative;
  padding: 1px;
  z-index: 200;
  width: 100%;
  padding-left: 20px;
  overflow: hidden;
  display: block;
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    font-weight: bold;
    animation: marquee 8s infinite linear alternate;
  }
}
.img {
  background-image: url(https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80);
  width: 100%;
  height: 23vw;
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
.decoration-none {
  text-decoration: none;
}
.Sidebar-sticky {
  position: sticky;
  top: 67px;
}
.Sidebar-menu {
  display: flex;
  flex-direction: column;
  padding: 0;
  li {
    list-style: none;
    border: 2px solid;
    border-color: #01814A #02C874 #02C874 #01814A;
    border-radius: 20px;
    padding: 8px;
    margin-bottom: 8px;
    text-align: center;
    transition: all 0.4s;
    a {
      display: block;
      text-decoration: none;
    }
  }
  li:hover {
    background-color: #34495e;
    a {
      color: #ffffff;
    }
  }
}
.iconBottom {
  transition: all 0.4s;
  position: fixed;
  right: 25px;
  bottom: 40px;
  font-size: 22px;
  color: #01814a;
  text-decoration: none;
  small{
    position: absolute;
    left: 100%;
    top: -2px;
  }
}

.iconBottom:hover {
  color: #2f6c47;
  transform: scale(1.2);
}
@media (max-width: 767.98px) {
  h5 {
    text-align: center;
  }
  .iconBottom {
  transition: all 0.4s;
  position: fixed;
  right: 15px;
  bottom: 20px;
  font-size: 22px;
  color: #01814a;
  text-decoration: none;
  }
}
</style>
