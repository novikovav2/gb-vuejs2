<template>
  <div :class="$style.paginator">
    <a href v-for="i in countOfPages" :key="i" @click.prevent="pageSelect(i)" :class="$style.link">
      <span :class="$style.active" v-if="i === currentPage">{{ i }}</span>
      <span v-else>{{ i }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    total: {
      type: Number,
      default: () => { 5 }
    },
    itemsOnPage: {
      type: Number,
      default: () => { 5 }
    },
    currentPage: {
      type: Number,
      default: () => { 1 }
    }
  },
  computed: {
    countOfPages: function () {
      return Math.ceil(this.total / this.itemsOnPage)
    }
  },
  methods: {
    pageSelect(page) {
      this.$emit('pageChange', page)
    }
  }
}
</script>

<style lang="scss" module>
.paginator {
  width: 50%;
  text-align: center;
  margin-top: 24px;
  font-size: large;
}

.link {
  margin-left: 24px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.active {
  font-weight: bold;
}
</style>
