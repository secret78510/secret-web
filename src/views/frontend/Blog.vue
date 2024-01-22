<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-9 my-3 borderRight">
          <div class="row">
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.chili)">
                <div class="img-container">
                  <img class="img-fit" :src="article.chili.img" alt />
                  <a href="#" class="img-animate" ></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a
                      class="scale"
                      href="#"
                    >{{ article.chili.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.bellPepper)">
                <div class="img-container">
                  <img class="img-fit" :src="article.bellPepper.img" alt/>
                  <a href="#" class="img-animate"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a
                      href="#"
                      class="scale"
                    >{{ article.bellPepper.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.carrot)">
                <div
                  class="img-container"
                >
                  <img
                    class="img-fit"
                    :src="article.carrot.img"
                    alt
                  />
                  <a href="#" class="img-animate"></a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.carrot.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.mango)">
                <div
                  class="img-container"
                >
                  <img
                    class="img-fit"
                    :src="article.mango.img"
                    alt
                  />
                  <a href="#" class="img-animate"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.mango.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.banana)">
                <div
                  class="img-container"
                >
                  <img
                    class="img-fit"
                    :src="article.banana.img"
                    alt
                  />
                  <a class="img-animate" href="#"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.banana.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.lemon)">
                <div
                  class="img-container"
                >
                  <img
                    class="img-fit"
                    :src="article.lemon.img"
                    alt
                  />
                  <a class="img-animate" href="#"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.lemon.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.orange)">
                <div class="img-container">
                  <img
                    class="img-fit"
                    :src="article.orange.img"
                    alt
                  />
                  <a href="#" class="img-animate"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.orange.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.blueberry)">
                <div class="img-container">
                  <img
                    class="img-fit"
                    :src="article.blueberry.img"
                    alt
                  />
                  <a class="img-animate" href="#"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#">
                      {{ article.blueberry.title }}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-3">
              <div class="card" style="cursor:pointer" title="點擊進入"
              @click.prevent="storeLocalStorage(article.cherry)">
                <div class="img-container">
                  <img
                    class="img-fit"
                    :src="article.cherry.img"
                    alt
                  />
                  <a class="img-animate" href="#"></a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a class="scale" href="#" target="blank">{{article.cherry.title}}</a>
                  </h5>
                  <p class="card-text">
                    麼市理同每管。業來紀文相夜味級爾境意滿商法部多部中那法本亮於到量……級資哥下：
                    事你會色於機我。
                  </p>
                  <p class="card-text">
                    <small class="text-muted">1個月前</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-4 text-response">
          <h4 class="font-weight-bold" style="color:#0d7247">熱門文章</h4>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.chili)"
            target="blank">{{ article.chili.title }}</a>
          </p>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.bellPepper)"
             target="blank">{{ article.bellPepper.title }}</a>
          </p>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.carrot)"
             target="blank">{{ article.carrot.title }}</a>
          </p>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.mango)"
             target="blank">{{ article.mango.title }}</a>
          </p>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.banana)"
             target="blank">{{ article.banana.title }}</a>
          </p>
          <p>
            <a class="scale" href="#" @click.prevent="storeLocalStorage(article.lemon)"
             target="blank">{{ article.lemon.title }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        chili: {
          title: '辣椒有去除濕氣以外還有別的功能',
          img:
            'https://images.unsplash.com/photo-1566045023256-fb2339a82526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        bellPepper: {
          title: '甜椒對身體的八種好處',
          img:
            'https://images.unsplash.com/photo-1502359521992-f86fd62e12dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        carrot: {
          title: '胡蘿蔔幫助眼睛以外的好處',
          img: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        mango: {
          title: '芒果吃太多對身體的影響',
          img: 'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        banana: {
          title: '香蕉能補充鈣質外還能..',
          img: 'https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80',
        },
        lemon: {
          title: '檸檬維生數多還有調解酸鹼值',
          img: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        orange: {
          title: '橘子感冒吃對身體的影響',
          img: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        blueberry: {
          title: '藍莓為何能保護牙齒跟牙齦',
          img: 'https://images.unsplash.com/photo-1564232020107-c3dfe31f4651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        },
        cherry: {
          title: '櫻桃不只能排毒和補血還有更多功能',
          img: 'https://images.unsplash.com/photo-1530176611600-d05a6387d07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      },
    };
  },
  methods: {
    storeLocalStorage(article) {
      localStorage.setItem('article', JSON.stringify(article));
      this.$router.push('/article');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding-top: 67px;
}

.card {
  position: relative;
}
.img-container {
  position: relative;
  height: 120px;
  width: 100%;
  overflow: hidden;
}
.img-container:hover .img-fit {
  opacity: 0.7;
  transition: all 4s linear;
  transform: scale(1.2);
}
.img-container:hover .img-animate {
  background-color: #336666;
  opacity: 0.5;
  z-index: 1;
  transition: all 4s linear;
}
.img-fit {
  width: 100%;
  height: 100%;
}
.img-animate {
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
}
.scale{
  color: #437e65;
}
.scale:hover {
  transition: all 0.4s;
  color: #294f3f;
  text-decoration: none;
}
.borderRight {
  border-right: 1px solid #336666;
}
@media (max-width: 768px) {
  .borderRight {
    border: none;
  }
  .text-response {
    margin-left: 30px;
  }
  .img-container {
    height: 150px;
  }
}
@media (max-width: 575.98px) {
  .img-container {
    height: 200px;
  }
  .text-response {
    margin-left: 50px;
  }
}
</style>
