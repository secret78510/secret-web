<template>
  <div class="wrap">
    <div class="container">
      <div class="text-right pt-4">
        <button class="btn btn-secondary" @click="openCouponModal(true)">建立新的優惠券</button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ item.due_date | date }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted">未起用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-primary btn-sm mr-1"
                @click="openCouponModal(false, item)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 優惠卷modal  -->
      <div
        class="modal fade"
        id="couponModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">優惠卷</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempCoupon.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="form-group">
                <label for="coupon_code">優惠碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="coupon_code"
                  v-model="tempCoupon.code"
                  placeholder="請輸入優惠碼"
                />
              </div>
              <div class="form-group">
                <label for="due_date">到期日</label>
                <input type="date" class="form-control" id="due_date" v-model="due_date" />
              </div>
              <div class="form-group">
                <label for="price">折扣百分比</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="tempCoupon.percent"
                  placeholder="請輸入折扣百分比"
                />
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempCoupon.is_enabled"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
              <button type="button" class="btn btn-primary" @click="updateCoupon()">更新優惠券</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 分頁 -->
      <Pagination
        v-if="pagination.total_pages"
        :childPagination="pagination"
        @changePage="getCoupons"
      ></Pagination>
      <!-- 刪除Modal -->
      <div
        class="modal fade"
        id="delCouponModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>刪除優惠卷</span>
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消
              </button>
              <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      isNew: false,
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: '',
      },
      due_date: '',
      pagination: {},
    };
  },
  watch: {
    due_date() {
      const timestamp = Math.floor(new Date(this.due_date));
      this.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/admin/coupons?page=${page}`;
      this.$http.get(api).then((response) => {
        this.coupons = response.data.coupons;
        this.pagination = response.data.pagination;
      });
    },
    updateCoupon() {
      if (this.isNew) {
        const api = `${process.env.VUE_APP_APIPATH}/api/admin/coupon`;
        this.$http.post(api, { data: this.tempCoupon }).then(() => {
          $('#couponModal').modal('hide');
          this.getCoupons();
        });
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/admin/coupon/${this.tempCoupon.id}`;

        this.$http.put(api, { data: this.tempCoupon }).then(() => {
          $('#couponModal').modal('hide');
          this.getCoupons();
        });
      }
    },
    openCouponModal(isNew, item) {
      $('#couponModal').modal('show');
      this.isNew = isNew;
      if (isNew) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...item };
        const dateAndTime = new Date(
          this.tempCoupon.due_date,
        ).toISOString();
        this.due_date = dateAndTime.split('T')['0'];
      }
    },
    delModal(item) {
      this.tempCoupon = item;
      $('#delCouponModal').modal('show');
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/admin/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          this.getCoupons();
        } else {
          $('#delCouponModal').modal('hide');
          this.getCoupons();
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style lang="scss"  scoped>
.wrap {
  margin-top: 67px;
}
</style>
