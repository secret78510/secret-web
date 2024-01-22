<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top navbar-light bg-primary">
      <div class="container">
        <router-link to="/" title="回到首頁">
        <img src="../../assets/img/secret-logo.png" alt />
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
            <li class="nav-item">
              <router-link class="nav-link scale" to="/manage/product">
                <i class="fas fa-book-open"></i>
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link scale" to="/manage/order_list">
                <i class="far fa-calendar-alt"></i>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link scale" to="/manage/coupon">
                <i class="fas fa-percent"></i>
                優惠卷
              </router-link>
            </li>
          </ul>
          <ul class="account-nav">
            <li class="nav-item">
              <router-link class="btn btn-outline-light mr-2" to="/product_list">購物車</router-link>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-success" @click="singout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    singout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          document.cookie = '';
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767.98px) {
  .nav-item {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #02C874;
  }
  .account-nav {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    .nav-item {
      border-bottom: 0;
      margin-top: 5px;
    }
  }
}
.navbar-light .scale{
  color: white;
}
.navbar-light .scale:focus{
  color: white;
}
.navbar-light .scale:hover {
  transition: all 0.4s;
  transform: scale(1.2);
  color: #02c874;
}
.account-nav {
  display: flex;
  margin-bottom: 0;
  li {
    list-style: none;
    a {
      color: #fff;
    }
    a:hover {
      color: black;
    }
  }
}
</style>
