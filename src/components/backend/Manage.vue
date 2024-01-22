<template>
  <div>
      <AlertMessage/>
      <MagageNavbar/>
      <router-view></router-view>
  </div>
</template>

<script>
import AlertMessage from './AlertMessage.vue';
import MagageNavbar from './ManageNavbar.vue';

export default {
  data() {
    return {};
  },
  components: {
    MagageNavbar,
    AlertMessage,
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>

<style>

</style>
