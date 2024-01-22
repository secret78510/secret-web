import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      component: () => import('@/components/frontend/Home.vue'),
      children: [
        {
          name: 'Body',
          path: '/',
          component: () => import('../views/frontend/Body.vue'),
        },
        {
          name: 'ProductList',
          path: '/product_list',
          component: () => import('../views/frontend/ProductList.vue'),
        },
        {
          name: 'CommonProblem',
          path: '/common_problem',
          component: () => import('../views/frontend/CommonProblem.vue'),
        },
        {
          name: 'BrandStore',
          path: '/brand_store',
          component: () => import('../views/frontend/BrandStore.vue'),
        },
        {
          name: 'Blog',
          path: '/blog',
          component: () => import('../views/frontend/Blog.vue'),
        },
        {
          name: 'ContactUs',
          path: '/contact_us',
          component: () => import('../views/frontend/ContactUs.vue'),
        },
        {
          name: 'Questionnaire',
          path: '/questionnaire',
          component: () => import('../views/frontend/Questionnaire.vue'),
        },
        {
          name: 'ValentinesDay',
          path: '/valentines_day',
          component: () => import('../views/frontend/news/ValentinesDay.vue'),
        },
        {
          name: 'NewYearsEve',
          path: '/new_years_eve',
          component: () => import('../views/frontend/news/NewYearsEve.vue'),
        },
        {
          name: 'CommencementDay',
          path: '/commencement_day',
          component: () => import('../views/frontend/news/CommencementDay.vue'),
        },
        {
          name: 'ChildrensDay',
          path: '/childrens_day',
          component: () => import('../views/frontend/news/ChildrensDay.vue'),
        },
        {
          name: 'ChristmasDay',
          path: '/christmas_day',
          component: () => import('../views/frontend/news/ChristmasDay.vue'),
        },
        {
          name: 'Secret',
          path: '/secret',
          component: () => import('../views/frontend/news/Secret.vue'),
        },
        {
          name: 'TeacherDay',
          path: '/teacher_day',
          component: () => import('../views/frontend/news/TeacherDay.vue'),
        },
        {
          name: 'News',
          path: '/news',
          component: () => import('../views/frontend/News.vue'),
        },
        {
          name: 'Article',
          path: '/article',
          component: () => import('../views/frontend/Article.vue'),
        },
        {
          name: 'SecretFeature',
          path: '/secret_feature',
          component: () => import('../views/frontend/SecretFeature.vue'),
        },
        {
          name: 'ShoppingCart',
          path: '/shopping_cart',
          component: () => import('../views/frontend/ShoppingCart.vue'),
        },
        {
          name: 'Introduction',
          path: '/introduction',
          component: () => import('../views/frontend/Introduction.vue'),
        },
        {
          name: 'Order',
          path: '/order',
          component: () => import('../views/frontend/Order.vue'),
        },
        {
          name: 'CustomerCheckout',
          path: '/customer_checkout/:orderId',
          component: () => import('../views/frontend/CustomerCheckout.vue'),
        },
        {
          name: 'CheckoutComplete',
          path: '/checkout_complete',
          component: () => import('../views/frontend/CheckoutComplete.vue'),
        },
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/frontend/Login.vue'),
    },
    {
      path: '/manage',
      component: () => import('@/components/backend/Manage.vue'),
      children: [
        {
          name: 'Product',
          path: '/manage/product',
          component: () => import('../views/backend/Product.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'Coupon',
          path: '/manage/coupon',
          component: () => import('../views/backend/Coupon.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'OrderList',
          path: '/manage/order_list',
          component: () => import('../views/backend/OrderList.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
