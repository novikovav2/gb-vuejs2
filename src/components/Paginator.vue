<template>
  <div :class="$style.paginator">
    <a href v-for="i in countOfPages" :key="i" @click.prevent="pageSelect(i)" :class="$style.link">
      <span :class="$style.active" v-if="i === getCurrentPage">{{ i }}</span>
      <span v-else>{{ i }}</span>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Paginator",
  computed: {
    ...mapGetters([
      "getTotalPaymentsCount",
      "getCurrentPage",
      "getItemsOnPage"
    ]),
    countOfPages: function () {
      return Math.ceil(this.getTotalPaymentsCount / this.getItemsOnPage)
    }
  },
  methods: {
    ...mapActions([
       "changeCurrentPage",
       "fetchData"
    ]),
    pageSelect(page) {
      // this.$emit('pageChange', page)
      this.changeCurrentPage(page)
      this.fetchData()
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
