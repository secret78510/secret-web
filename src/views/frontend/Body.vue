<template>
  <div style="overflow:hidden">
    <div class="marquee bg-success">
      <i class="far fa-bell"></i>
      <span>現正鼠年特價活動ing~走過路過千萬別錯過唷</span>
    </div>
    <section>
      <div class="img">
        <router-link class="img-caption text-center" to="/secret_feature"
        style="text-decoration:none">
          <h1>secret</h1>
          <p>歡迎來到秘密商店</p>
          <p>全商品經檢驗無農藥</p>
          <p>價格保證業界最低</p>
          <button class="btn btn-success btn-size w-75 font-weight-bold text-dark">
            瞭解更多</button>
        </router-link>
      </div>
    </section>
    <section class="section-space">
      <div class="container">
        <h2 class="text-center py-4">
          從農地到府上，秘密給你
          <span class="text-info" style="font-size:40px">三大保證</span>
        </h2>
        <div class="row text-center">
          <div class="col-md-4">
            <div class="circle bg-light">
              <i class="fab fa-apple" style="font-size:100px"></i>
            </div>
            <h3 class="font-weight-bold py-3">有機無農藥</h3>
            <p class="font-weight-bold py-2">經過秘密認證，檢驗合格無任何農藥。</p>
          </div>
          <div class="col-md-4">
            <div class="circle bg-light">
              <i class="fas fa-truck-moving" style="font-size:100px"></i>
            </div>
            <h3 class="font-weight-bold py-3">全台冷藏配送到府</h3>
            <p class="font-weight-bold py-2">秘密本身在全台都有送貨據點，將最新鮮蔬果留給你。</p>
          </div>
          <div class="col-md-4">
            <div class="circle bg-light">
              <i class="fab fa-line" style="font-size:100px"></i>
            </div>
            <h3 class="font-weight-bold py-3">專人客服</h3>
            <p class="font-weight-bold py-2">有專人與你語音以及LINE線上回應，不用擔心售後不理。</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="content">
        <div class="container text-white" style="position: relative">
          <div class="row">
            <div class="col col-md-6 text-md-dark">
              <h2 class="mt-5 text-primary pl-5 text-center">鼠年特價活動</h2>
              <ul>
                <li class="date">
                  <div class="row">
                    <div class="col-2">
                      <small>2020</small>
                      <p class="text-darkBlue">1/24</p>
                    </div>
                    <div class="col-10 mt-3">
                      <p class="font-weight-bold">
                          <router-link class="link" to="/new_years_eve">除夕全面商品打3折，還送橘子包你大吉大利。
                          </router-link>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="date">
                  <div class="row">
                    <div class="col-2">
                      <small>2020</small>
                      <p class="text-darkBlue">1/29</p>
                    </div>
                    <div class="col-10 mt-3">
                      <p class="font-weight-bold">
                          <router-link class="link" to="/commencement_day">開工日全館打九折，送一元紅包，一元復始 萬象更新。
                          </router-link>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="date">
                  <div class="row">
                    <div class="col-2">
                      <small>2020</small>
                      <p class="text-darkBlue">2/14</p>
                    </div>
                    <div class="col-10 mt-3">
                      <p class="font-weight-bold">
                          <router-link class="link" to="/valentines_day">情人節優惠活動，凡購買超過500元贈送玫瑰一朵。
                          </router-link>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="date">
                  <div class="row">
                    <div class="col-2">
                      <small>2020</small>
                      <p class="text-darkBlue">4/4</p>
                    </div>
                    <div class="col-10 mt-3">
                      <p class="font-weight-bold">
                          <router-link class="link" to="/childrens_day">歡慶兒童節全館8折，滿100送棒棒糖。
                          </router-link>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="clearfix list-unstyled pr-4 pt-2">
                  <p class="font-weight-bold float-right" style="font-size:20px">
                    <router-link class="link" to="/news">More..</router-link>
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-md-6 backgroundImg"></div>
          </div>
        </div>
      </div>
    </section>
    <section  class="section-space">
      <div class="container">
        <div class="text-center">
          <h2 class="text-success category d-inline-block py-4">商品分類</h2>
        </div>
        <div class="row">
          <div class="col-md-6 pb-4">
            <div class="img-container my-1 rounded img-scroll-left" @click="toProductList('水果')">
              <img
                class="img-animation"
                src="~@/assets/img/fruit.png"
              />
              <div class="img-text">水果</div>
            </div>
          </div>
          <div class="col-md-6 pb-3">
            <div class="img-container my-1 rounded img-scroll-right" @click="toProductList('蔬菜')">
              <img
                class="img-animation"
                src="~@/assets/img/vegetable.png"
              />
              <div class="img-text">蔬菜</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div v-if="products.length > 0" class="container-fiuld">
        <h2 class="text-center text-white popular">熱門商品</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
             v-for="(product, index ) in products"
             :key="product.id"
             :class="{ 'active': index === 0 }"
             data-target="#carouselExampleIndicators"
             data-slide-to="0"
             class="active"></li>
          </ol>
          <div class="carousel-inner">
            <a
              href="#"
              v-for="(product, index ) in products"
              :key="product.id"
              class="carousel-item header-carousel-item w-100 bg-cover"
              :class="{ 'active': index === 0 }"
              @click.prevent="toProduct(product.id)"
              :style="{backgroundImage: `url(${product.imageUrl})`}"
            ></a>
            <div class="carousel-caption px-3">
              <h5>本店熱銷商品</h5>
              <p>本店目前熱門商品促銷中貨品足，歡迎訂購，全商品無農藥現採冷藏低溫運送免費宅配到府，
                讓你吃的安心用的放心，還不快點擊圖片圖片購買。</p>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/products/all`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        const maxLangth = 7;
        this.isLoading = false;
        this.products = response.data.products;
        this.products.length = this.products.length > maxLangth ? maxLangth : this.products.length;
      });
    },
    toProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/product/${id}`;
      this.$http.get(api).then(() => {
        localStorage.setItem('product', JSON.stringify(id));
        this.$router.push('/introduction');
      });
    },
    toProductList(category) {
      sessionStorage.setItem('category', category);
      this.$router.push('/product_list');
    },
    imgAnimate() {
      const animateLeft = document.querySelector('.img-scroll-left');
      const animateRight = document.querySelector('.img-scroll-right');
      const { clientHeight } = document.documentElement;
      const { scrollTop } = document.documentElement;
      const animateLeftPos = $('.img-scroll-left').offset().top;
      const animateRightPos = $('.img-scroll-right').offset().top;
      if (animateLeftPos <= clientHeight + scrollTop) {
        animateLeft.style.opacity = '1';
        animateLeft.style.transform = 'translateX(0)';
      }
      if (animateRightPos <= clientHeight + scrollTop) {
        animateRight.style.opacity = '1';
        animateRight.style.transform = 'translateX(0)';
      }
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    window.addEventListener('scroll', this.imgAnimate, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.imgAnimate, true);
  },
};
</script>

<style lang="scss" scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.section-space{
  padding: 2rem;
}
.text-darkBlue{
  color: #116674;
}
.marquee {
  position: relative;
  margin-top: 67px;
  padding: 1px;
  z-index: 200;
  width: 100%;
  padding-left: 20px;
  overflow: hidden;
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    font-weight: bold;
    animation: marquee 8s infinite linear alternate;
  }
}
.circle {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  text-align: center;
  margin: auto;
  i {
    line-height: 200px;
  }
}
.img {
  background-image: url(~@/assets/img/homeBg.png);
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
.img-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  background-color: rgba(238, 247, 245, 0.6);
  padding: 0 40px 8px;
  color: #000;
  h1{
    font-size: 40px;
  }
  p {
    margin: 4px;
    font-weight: bold;
    font-size: 14px;
  }
}
.btn-size{
  font-size: 20px;
}
.img-container {
  overflow: hidden;
  position: relative;
  transition: all 1s;
  cursor: pointer;
  .img-animation {
    height: 300px;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  .img-animation:hover {
    transform: scale(1.2);
  }
  .img-text {
    position: absolute;
    z-index: 100;
    bottom: 10px;
    left: 50%;
    color: white;
    transform: translateX(-50%);
    font-size: 60px;
    font-weight: bold;
  }
}
.img-scroll-left {
  transform: translateX(-300%);
  opacity: 0;
}
.img-scroll-right {
  transform: translateX(300%);
  opacity: 0;
}
.link {
  color: #000;
  text-decoration: none;
}
.link:hover {
  color: #186042;
}
.bg-cover {
  background-size: cover;
  background-position: center;
}
.header-carousel-item {
  height: 400px;
}
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  p{
    text-align-last: left;
  }
}
.content {
  overflow: hidden;
  .backgroundImg {
    background-image: url(~@/assets/img/pumpkin.png);
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .date {
    list-style: none;
    border-bottom: 2px dotted #01814a;

    p {
      margin: 0;
      font-size: 20px;
    }
  }
  .text-md-dark {
    z-index: 1100;
  }
}
.popular {
  position: absolute;
  left: 50%;
  margin-top: 50px;
  transform: translateX(-50%);
  z-index: 100;
  font-size: 40px;
  font-weight: bold;
}
.category {
  font-size: 40px;
  font-weight: bold;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 60%;
    height: 2px;
    width: 50%;
    background: #336666;
  }
  &::before {
    left: -60%;
  }
  &::after {
    left: 110%;
  }
}
@media (min-width: 500px) {
  .img {
    background-image: url(~@/assets/img/homeBg.png);
    height: 80vh;
    width: 100%;
    background-position: bottom;
    background-size: cover;
  }
  .img-caption {
    width: 60%;
    padding: 20px 50px;
    h1{
      font-size: 60px;
    }
    p{
      font-size: 20px;
    }
  }
}
@media (min-width: 768px) {
  .section-space{
  padding: 5rem;
  }
  .popular {
    position: absolute;
    left: 50%;
    margin-top: 60px;
    transform: translateX(-50%);
    z-index: 100;
    font-size: 60px;
    font-weight: bold;
  }
  .img-container .img-animation {
    height: 450px;
  }
  .btn-size{
  font-size: 25px;
  }
  .category {
    font-size: 60px;
    font-weight: bold;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 60%;
      height: 2px;
      width: 100%;
      background: #336666;
    }
    &::before {
      left: -110%;
    }
    &::after {
      left: 110%;
    }
  }
  .text-md-dark {
    color: #333;
  }
  .img-caption {

    width: 50%;
    h1{
      font-size: 90px;
    }
    p {
      font-size: 26px;
    }
  }
  .header-carousel-item {
    height: 420px;
  }
}
</style>
