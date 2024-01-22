<template>
  <div class="wrap">
    <div class="img">
      <h2>常見問題</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 my-5 mx-auto font-weight-bold">
          <h2 class="text-info text-center pb-4">常見問題</h2>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{'active': visibility === 'all'}"
                @click.prevent="visibility = 'all'"
                href="#"
              >All</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{'active': visibility === 'order'}"
                @click.prevent="visibility = 'order'"
                href="#"
              >訂購問題</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{'active': visibility === 'exchange'}"
                @click.prevent="visibility = 'exchange'"
                href="#"
              >退換貨問題</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{'active': visibility === 'transport'}"
                @click.prevent="visibility = 'transport'"
                href="#"
              >運送問題</a>
            </li>
          </ul>
          <div class="accordion" id="accordionExample">
            <div class="card" v-if="visibility === 'all' || visibility === 'order'">
              <div class="card-header p-0" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >付款方式有哪些?</button>
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body p-3"
                >目前僅提供信用卡付款方式，可隨時線上刷卡完成訂單。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'order'">
              <div class="card-header p-0" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >發票會跟或一同寄送嗎</button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >不會<br>現在改用電子發票，提倡環保會用系統兌獎，如中獎會簡訊通知並寄送過去。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'order'">
              <div class="card-header p-0" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >紙箱可以給秘密回收嗎？</button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >不會<br>等等集滿20箱後，聯絡我們00-1234-5678</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'exchange'">
              <div class="card-header p-0" id="headingFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >如何退換貨？</button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >七日內沒使用或貨品有問題，聯絡我們客服人員立即為你處理。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'exchange'">
              <div class="card-header p-0" id="headingFive">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >退貨時已索取發票須要寄回嗎？</button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >需要寄回發票正本才能辦理退款</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'exchange'">
              <div class="card-header p-0" id="headingSix">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >如何退款</button>
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >如果消費款項不同或辦理退貨而退款，請聯絡我們客服為你選擇你最適合的方式退款。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'transport'">
              <div class="card-header p-0" id="headingSeven">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >配送時間有固定星期幾嗎?</button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >配送時間為星期一~星期六<br>星期天貨運廠商休息日不送貨。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'transport'">
              <div class="card-header p-0" id="headingEight">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >可否指定送貨時段?</button>
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >可以<br>早上九點到晚上8點為送貨段，這時間都能選擇。</div>
              </div>
            </div>
            <div class="card" v-if="visibility === 'all' || visibility === 'transport'">
              <div class="card-header p-0" id="headingNine">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >送貨範圍?</button>
                </h2>
              </div>
              <div
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >台灣</div>
              </div>
              <div class="card" v-if="visibility === 'all' || visibility === 'transport'">
              <div class="card-header p-0" id="headingTen">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >運費計算方式</button>
                </h2>
              </div>
              <div
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                >免運費</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visibility: 'all',
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 67px;
}
.img {
  background-image: url(https://images.unsplash.com/photo-1580722434936-3d175913fbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  width: 100%;
  height: 30vw;
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
.link{
  color:black;
  text-decoration: none;
}
.link:hover{
  color: #2f6c47;
}
p {
  font-size: 20px;
}
* {
  list-style: none;
}

@media (max-width: 768px) {
  .img h2 {
    font-size: 26px;
  }
}
@media (max-width: 575.98px) {
  .img h2 {
    font-size: 18px;
  }
}
</style>
