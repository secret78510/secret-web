<template>
  <div class="wrap">
    <div class="img">
      <h2>秘密特色</h2>
    </div>
    <section>
      <h2 class="text-center py-4">秘密擁有<span style="font-size:36px;color:#0d7247">
        五大特色</span></h2>
      <div class="container borderBottom pb-5">
        <div class="row text-center">
          <div class="col-md-4 py-3">
            <img class="img-circle " src="https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="#">
            <h3 class="text-weight-bold py-3 text-primary">客製化裁切</h3>
            <p class="text-weight-bold" style="text-align-last:left">
              專屬你的客製化服務，將水果切成你想要的形式再進行冷藏配送，免去自己裁切的麻煩。</p>
          </div>
          <div class="col-md-4 py-3">
            <img class="img-circle " src="https://images.unsplash.com/photo-1533252720003-9be5ea45fffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=852&q=80" alt="#">
            <h3 class="text-weight-bold py-3 text-primary">有機無農藥</h3>
            <p class="text-weight-bold" style="text-align-last:left">有機食品讓你杜絕農藥的危害，讓您吃的安心用的放心。</p>
          </div>
          <div class="col-md-4 py-3">
            <img class="img-circle" src="https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="#">
            <h3 class="text-weight-bold py-3 text-primary">24小時內退貨服務</h3>
            <p class="text-weight-bold" style="text-align-last:left">收到的產品有任何瑕疵毀損，公司無條件退貨吸收免運費。</p>
          </div>
          <div class="col-md-4 ml-auto py-3">
            <img class="img-circle " src="https://images.unsplash.com/photo-1590493843091-a7ffdeb8ae51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="#">
            <h3 class="text-weight-bold py-3 text-primary">全台運送免運費</h3>
            <p class="text-weight-bold" style="text-align-last:left">
              秘密擁有北中南據點，可是配合各地到府收送，節省您的時間。</p>
                      </div>
          <div class="col-md-4 mr-auto py-3">
            <img class="img-circle " src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="#">
            <h3 class="text-weight-bold py-3 text-primary">專人客服</h3>
            <p class="text-weight-bold" style="text-align-last:left">
              除了電話客服外還能line線上即時回復，避免通話中需求無法被解決。</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container py-5">
        <h2 class="text-center text-info pb-4">秘密與其他店家相比</h2>
        <table class="tables text-center">
        <tr>
          <th></th>
          <th>秘密</th>
          <th>水果行</th>
          <th>大賣場</th>
          <th>便利商店</th>
        </tr>
        <tr>
          <th>便利性</th>
          <td>高</td>
          <td>中</td>
          <td>低</td>
          <td>中</td>
        </tr>
        <tr>
          <th>客製化</th>
          <td>高</td>
          <td>無</td>
          <td>無</td>
          <td>無</td>
        </tr>
        <tr>
          <th>食材安全</th>
          <td>高</td>
          <td>中</td>
          <td>中</td>
          <td>中</td>
        </tr>
        <tr>
          <th>售後服務</th>
          <td>專人服務</td>
          <td>無</td>
          <td>須回店家處理</td>
          <td>須回店家處理</td>
        </tr>
        <tr>
          <td>價格</td>
          <td>低</td>
          <td>中</td>
          <td>高</td>
          <td>高</td>
        </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.wrap {
  margin-top: 67px;
}
.borderBottom {
  border-bottom: 2px solid #336666;
}
.img {
  background-image: url(https://images.unsplash.com/photo-1561171466-40b5550db7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  width: 100%;
  height: 30vw;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
      color: white;
      font-weight: bold;
      font-size: 40px;
  }
}
.img-circle{
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;

}
.tables{
  width: 100%;
  font-weight: bold;
  tr{
     border:2px solid #336666;
     background: #02C874;
     border-bottom-right-radius: 50px ;
  }
  tr:nth-of-type(even){
    background: #11B36E;
  }
  tr:hover{
    background-color: #15955F;
  }
  td,th{
    padding: 20px;
    border:2px solid #336666;
  }
}
@media (max-width: 768px) {
  .img h2{
    font-size: 26px;
  }
}

</style>
