<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
