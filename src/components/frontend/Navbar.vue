<template>
  <div>
    <AlertMessage/>
    <nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">
      <div class="container font-weight-bold">
        <router-link to="/" title="回到首頁">
        <img src="../../assets/img/secret-logo.png"/>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" >
              <a href="#" class="nav-link scale" @click="navbarToggle">首頁</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link scale" @click="navbarToggle">產品列表</a>
            </li>
            <li class="nav-item triangle">
              <a href="#" class="nav-link triangle-btn  scale"
              @click.prevent="drapdownClick()">
               關於我們
                <i class="fa fa-caret-down"></i>
              </a>
              <div class="triangle-menu" @mouseleave="drapdownMouseOut()">
                <a href="#" class="triangle-item"  @click="navbarToggle">品牌故事</a>
                <a href="#" class="triangle-item"  @click="navbarToggle">最新活動</a>
                <a href="#" class="triangle-item"  @click="navbarToggle">秘密特色</a>
                <a href="#" class="triangle-item"  @click="navbarToggle">常見問題</a>
                <a href="#" class="triangle-item"  @click="navbarToggle">聯絡我們</a>
              </div>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link scale"  @click="navbarToggle">部落格</a>
            </li>
          </ul>
          <ul class="account-nav">
            <li class="nav-item">
              <a href="#" class="nav-link scale" @click="toShoppingCart">
                <i class="fas fa-shopping-cart"></i>
                購物車
               <span v-if="cart.carts.length >= 1">({{ cart.carts.length }})</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link scale" to="/login">
                <i class="fas fa-cog"></i>
                登入
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';
import AlertMessage from '../backend/AlertMessage.vue';

export default {
  data() {
    return {};
  },
  components: {
    AlertMessage,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    drapdownClick() {
      const triangleMenu = document.querySelector('.triangle-menu');
      if (triangleMenu.style.display === 'none') {
        triangleMenu.style.display = 'block';
      } else {
        triangleMenu.style.display = 'none';
      }
    },
    drapdownMouseOut() {
      document.querySelector('.triangle-menu').style.display = 'none';
    },
    toShoppingCart() {
      this.$store.dispatch('getCart');
      if (window.innerWidth <= 768) {
        $('.navbar-toggler').click();
      }
      if (this.cart.carts.length >= 1 && this.$router.history.current.path !== '/shopping_cart') {
        this.$router.push('/shopping_cart');
      } else if (this.$router.history.current.path !== '/product_list'
      && this.$router.history.current.path !== '/shopping_cart') {
        this.$router.push('/product_list');
        this.$bus.$emit('message:push', '購物車內無商品，請選購。');
      } else if (!this.cart.carts.length) {
        this.$bus.$emit('message:push', '購物車內無商品，請選購。');
      }
    },
    navbarToggle(item) {
      const scale = item.target.textContent;
      switch (scale) {
        case '首頁':
          if (this.$router.currentRoute.path !== '/') {
            this.$router.push('/');
          } break;
        case '產品列表':
          if (this.$router.currentRoute.path !== '/product_list') {
            this.$router.push('/product_list');
          } break;
        case '品牌故事':
          if (this.$router.currentRoute.path !== '/brand_store') {
            this.$router.push('/brand_store');
          } break;
        case '最新活動':
          if (this.$router.currentRoute.path !== '/news') {
            this.$router.push('/news');
          } break;
        case '秘密特色':
          if (this.$router.currentRoute.path !== '/secret_feature') {
            this.$router.push('/secret_feature');
          } break;
        case '常見問題':
          if (this.$router.currentRoute.path !== '/common_problem') {
            this.$router.push('/common_problem');
          } break;
        case '聯絡我們':
          if (this.$router.currentRoute.path !== '/contact_us') {
            this.$router.push('/contact_us');
          } break;
        case '部落格':
          if (this.$router.currentRoute.path !== '/blog') {
            this.$router.push('/blog');
          } break;
        default:
          break;
      }
      if (window.innerWidth <= 768) {
        $('.navbar-toggler').click();
      }
    },
  },
  created() {
    this.$store.dispatch('getCart');
  },
};
</script>

<style lang="scss" scoped>
.account-nav {
  display: flex;
  margin-bottom: 0;
  li {
    list-style: none;
    display: flex;
    a {
      color: #fff;
    }
  }
}
.account-nav li:last-child::before {
  content: "/";
  display: flex;
  color: #fff;
  padding: 0.5rem 0;
  width: 0;
  margin: 0;
}
.navbar-light .scale{
  color: #000;
}
.navbar-light .scale:focus{
  color: #000;
}
.navbar-light .scale:hover {
  transition: all 0.4s;
  transform: scale(1.2);
  color: #186042;
}
.triangle {
  position: relative;
  .triangle-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    text-align: left;
  }
  .triangle-item {
    color: #383330;
    text-align: left;
    display: block;
    background-color: #01814A;
    width: 100%;
    padding: 10px;
    text-decoration: none;
    transform: all 0.4s;
  }
  .triangle-item:first-child{
    border-radius: 4px 4px 0 0;
  }
  .triangle-item:last-child{
    border-radius: 0 0 4px 4px;
  }
}

.triangle-item:hover{
  background-color: #02c874 ;
  color: #212115;
}
@media (max-width: 767.98px) {
  .nav-item {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #02c874;
  }
  .account-nav {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    .nav-item {
      border-bottom: 0;
    }
  }
  .triangle {
    display: block;
    width: 100%;
    text-align: center;
    .triangle-menu {
      width: 100;
      position: relative;
    }
    .triangle-item {
      text-align: center;

    }
  }
}
</style>
