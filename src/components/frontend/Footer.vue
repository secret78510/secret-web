<template>
  <div>
      <footer class="footer bg-primary">
          <router-link to="/" title="回到首頁">
          <img  src="../../assets/img/secret-logo.png" alt="">
          </router-link>
          <p class="text-white">
              個人學習用，不做商業用途
          </p>
      </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer{
    text-align: center;
    p{
      margin: 0;
    }
}
</style>
