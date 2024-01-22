<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto pt-2">
          <img :src="img" class="w-100" style="height:320px" />
          <h2 class="text-center text-success py-2">{{ title }}</h2>
          <p>
            學公爾傳水始之是活會些年公世因中然那校去；黃風飛業投因學你習景，
            心目大媽影還……一動還食龍有使術三心老產女體義大寶建下是部山故在日
            ，色有葉萬處是示前有量；生多三年使背山母影提，用慢由後何百館走海臺土死，
            認奇價可經力：重每許寶？間病人。大用傳實氣後的樂一學……會海讀前還老人它品，文同動
            ，以不北是，會亞後市回成觀化想位長小驗不外後於然！何獎家第來題資，企地的應一後作光里
            內……實同對機第那民戲學路太須車變是定集不由業不到市值只但青展轉方的也應羅制經。任銀通人
            公底可了神些無出日去山國養程岸！
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
      img: '',
      title: '',
    };
  },
  methods: {
    getArticle() {
      const article = JSON.parse(localStorage.getItem('article'));
      this.img = article.img;
      this.title = article.title;
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style scoped lang="scss">
.wrap {
  margin-top: 67px;
}
</style>
