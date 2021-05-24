<template>
  <div id="app">
    <h1>Учет расходов</h1>
<!--    <button @click="switchShowForm" :class="$style.showForm">-->
<!--      {{ showFormText }}-->
<!--    </button>-->
<!--    <PaymentForm @add="onAdd" v-if="showForm"/>-->
<!--    <PaymentList />-->
<!--    <Paginator />-->

    <router-view></router-view>
  </div>
</template>

<script>
// import PaymentForm from "@/components/PaymentForm";
// import PaymentList from "@/components/PaymentList";
// import defaultPaymentValues from "@/data/payments";
// import Paginator from "@/components/Paginator";

import { mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    // PaymentForm,
    // PaymentList,
    // Paginator
  },
  data: () => ({
    // payments: defaultPaymentValues.payments,
    showForm: false,
    showFormText: 'ADD NEW COST+',
    // currentPage: 1,
    // itemsOnPage: 5
  }),
  methods: {
    ...mapActions([
        'init',
        'fetchData'
    ]),
    switchShowForm () {
      this.showForm = !this.showForm
      this.showFormText = this.showForm ? 'Hide form' : 'ADD NEW COST+'
    }
  },
  mounted() {
    this.init()
    this.fetchData()
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

.showForm {
  border: none;
  padding: 10px 25px;
  background-color: darkblue;
  color: white;
  margin-bottom: 20px;
}
</style>
