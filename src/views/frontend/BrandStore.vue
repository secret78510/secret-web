<template>
  <div class="wrap">
    <div class="header my-5">
      <div class="container">
        <div class="row pt-5">
          <div class="col-6 col-md-4 ml-auto" >
            <div class="logo" >
              <h1>secret</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section style="background-color:#01814A">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-none  d-md-block mt-5">
            <img
              class="img-fit"
              src="~@/assets/img/brandCreate.png"
              alt
            />
          </div>
          <div class="col-md-8 mt-3 p-5">
            <h3 class="text-center font-weight-bold" style="color:#a8ffc8">品牌創立</h3>
            <p class="font-weight-bold font-size text-white">
              經神秘人國小放暑假時常常陪著爺爺一起在農田裡種植蔬果，吃著辛苦種植出來漂亮的有機食物
              ，體會到食物的可貴。這些都是我們一起努力的成果，能讓每個人都感受到食物的幸福與安心。
              出社會後爺爺過世了，父親在工廠上班很辛苦沒時間管理農田，神秘人看著田裡爺爺辛苦
              種植出來漂亮又美裡的蔬果，若無人管理則浪費了爺爺辛苦打拼留下的這美麗的菜園。
              因此神秘人決定要讓這片菜園能夠保留他的美好，讓每個人能吃到有機健康的食物，
              不惜低價賣出，讓所有人都能吃到爺爺留下來的幸福。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-5">
      <div class="container">
        <h2 class="text-center py-4 text-info">我們的用心，你看的見</h2>
        <div class="row">
          <div class="col-md-4 animate pt-2">
            <img
              class="img-fit"
              src="~@/assets/img/youSeeA.png"
              alt
            />
          </div>
          <div class="col-md-4 animate pt-2">
            <img
              class="img-fit"
              src="~@/assets/img/youSeeB.png"
              alt
            />
          </div>
          <div class="col-md-4 animate pt-2">
            <img
              class="img-fit"
              src="~@/assets/img/youSeeC.png"
              alt
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bgAnimation bubbleBg bg-img mb-5 py-5"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 text-white font-weight-bold px-5">
            <h2 class="text-center ">提防詐騙</h2>
            <p class="font-size">「秘密」商店不會用任何名義進行款項變更或著改為現金交易或要求你使用ATM進行操作，請勿
              提供個人資料，並立即打給165反詐騙專線。
            </p>
            <p class="font-size">如有任何疑問可聯繫「秘密」客服,電話:00-1234-5678 官方LINE:@secret</p>
            <p class="font-size text-right ">客服時間:周一到週五9:00~1900 (國定假日休息) </p>
          </div>
        </div>
      </div>
    </section>
    <h1 class="ml-2 pt-5" style="color:#11b871">secret</h1>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {};
  },
  methods: {
    imgAnimate() {
      const animate = document.querySelectorAll('.animate');
      const { scrollTop } = document.documentElement;
      const { clientHeight } = document.documentElement;
      const animatePos = $('.animate').offset().top;
      if (animatePos <= scrollTop + clientHeight) {
        animate.forEach((item) => {
          const animateItem = item;
          animateItem.style.opacity = '1';
          animateItem.style.transform = 'translateY(0)';
        });
      }
    },
    bgAnimate() {
      const bgAnimation = document.querySelector('.bgAnimation');
      const { scrollTop } = document.documentElement;
      bgAnimation.style.backgroundPositionY = `${-scrollTop / 2}px`;
    },
    logoAnimate() {
      const logo = document.querySelector('.logo');
      const { scrollTop } = document.documentElement;
      logo.style.transform = `translateY(${scrollTop / 6}px) rotate(7deg)`;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.imgAnimate, true);
    window.addEventListener('scroll', this.bgAnimate, true);
    window.addEventListener('scroll', this.logoAnimate, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.bgAnimate, true);
    window.removeEventListener('scroll', this.imgAnimate, true);
    window.removeEventListener('scroll', this.logoAnimate, true);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-image: url(~@/assets/img/brandStoreBg.png);
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 67px;
  overflow: hidden;
}
.bubbleBg{
  background-image: url(~@/assets/img/bubble.png);
}
.logo {
  padding: 30px 25px;
  background: linear-gradient(90deg, #02c874, #336666);
  transform: rotate(7deg);
  text-align: center;
}
.font-size {
  font-size: 20px;
}
.img-fit {
  width: 100%;
  height: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.animate {
  opacity: 0;
  transition: all 1s;
  transform: translateY(50px);
}

@media (max-width: 768px) {
  .img-fit {
    margin-left: 20px;
    height: 350px;
  }
}
@media (max-width: 576px) {
  .animate{
    margin: 0 15px;
  }
}
</style>
