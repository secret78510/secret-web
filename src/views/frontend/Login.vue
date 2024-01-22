<template>
  <div>
    <AlertMessage/>
    <form class="form" @submit.prevent="signin">
      <h1>登入</h1>
    <input class="input" type="email"
        autocomplete="off"
        name="email"
        placeholder="信箱"
        required
        v-model="user.username"
        >
    <input class="input" type="password"
        autocomplete="off"
        placeholder="密碼"
        name="password"
        required
        v-model="user.password"
        >
    <input class="submit" type="submit" value="登入">
  </form>
 <i class="fas fa-times icon" title="回到上一頁" @click="previous()"></i>
  </div>
</template>

<script>
import AlertMessage from '../../components/backend/AlertMessage.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    AlertMessage,
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$http.post(api, this.user).then((response) => {
        if (response.data.success) {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          document.cookie = `hexTokenExpired=${expired}; expires=${new Date(expired)}`;
          this.$router.push('/manage/product');
        } else {
          this.$bus.$emit('message:push', '密碼錯誤');
        }
      });
    },
    previous() {
      window.history.back();
    },
  },
  mounted() {
    const hexTokenExpired = document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenExpired\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const hexToken = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (hexToken && Number(hexTokenExpired) > Date.now()) {
      this.$router.push('/manage/product');
    }
  },
};
</script>

<style lang="scss" scoped>
.icon{
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
.form {
  width:100%;
  height: 100%;
  padding: 40px;
  background-color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;

  h1 {
      text-transform: uppercase;
      font-weight: 500;
      color: white;
  }
  .input {
      border: 2px solid #336666;
      display: block;
      background: none;
      margin: 20px auto;
      padding: 14px 10px;
      text-align: center;
      width: 250px;
      color: #fff;
      border-radius: 24px;
      transition: 0.3s;
      outline: none;
  }
  .input:focus {
      width: 330px;
      border-color: #02C874;
  }
  .submit {
      width: 150px;
      cursor: pointer;
      border: 2px solid #02C874;
      background: none;
      margin: 10px auto;
      padding: 14px 10px;
      text-align: center;
      color: #fff;
      border-radius: 24px;
      transition: 0.3s;
      outline: none;
  }
  .submit:hover {
      background: #02C874;
      color: #000;
  }
}
</style>
