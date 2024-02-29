import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import {
  ValidationProvider, extend, localize, ValidationObserver,
} from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'bootstrap';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import currencyFilter from './filter/currency';
import dateFilter from './filter/date';

localize('zh_TW', TW);
Vue.use(VueAxios, axios);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);
Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('email', email);
extend('required', {
  ...required,
  message: '此為必填',
});
extend('emailUnfilled', {
  ...required,
  message: '請輸入信箱',
});
extend('nameUnfilled', {
  ...required,
  message: '請輸入名字',
});
extend('phoneUnfilled', {
  ...required,
  message: '請輸入電話',
});
extend('addressUnfilled', {
  ...required,
  message: '請輸入地址',
});
extend('creditCardUnfilled', {
  ...required,
  message: '範例0000-1111-2222-3333',
});
extend('name', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '名子長度不夠',
});
extend('phone', {
  validate(value) {
    const regex = /^09\d{8}$/;
    return regex.test(value);
  },
  params: ['length'],
  message: '請輸入正確電話',
});
extend('address', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '請輸入完整地址',
});

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common.Authorization = myCookie;
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else {
    next();
  }
});
