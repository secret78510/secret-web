<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <!-- pre -->
        <li
          class="page-item"
          :class="{disabled: !childPagination.has_pre}"
          @click.prevent="pageComponent(childPagination.current_page -1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- current -->
        <li
          class="page-item"
          v-for="page in childPagination.total_pages"
          :key="page"
          :class="{active: childPagination.current_page === page}"
          @click.prevent="pageComponent(page)"
        >
          <a class="page-link" href="#">{{page}}</a>
        </li>
        <!-- next -->
        <li
          class="page-item"
          :class="{disabled: !childPagination.has_next}"
          @click.prevent="pageComponent(childPagination.current_page +1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    childPagination: {
      type: Object,
    },
  },
  methods: {
    pageComponent(page) {
      this.$emit('changePage', page);
    },
  },
};
</script>
