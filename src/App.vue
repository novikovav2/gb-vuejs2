<template>
  <div id="app">
    <h1>Учет расходов</h1>
    <button @click="switchShowForm" :class="$style.showForm">
      {{ showFormText }}
    </button>
    <PaymentForm @add="onAdd" v-if="showForm"/>
    <PaymentList :payments="paymentsForShow"/>
    <Paginator :total="payments.length"
               :items-on-page="itemsOnPage"
               :currentPage="currentPage"
               @pageChange="pageChange"/>
  </div>
</template>

<script>
import PaymentForm from "@/components/PaymentForm";
import PaymentList from "@/components/PaymentList";
import defaultPaymentValues from "@/data/payments";
import Paginator from "@/components/Paginator";

export default {
  name: 'App',
  components: {
    PaymentForm,
    PaymentList,
    Paginator
  },
  data: () => ({
    payments: defaultPaymentValues.payments,
    showForm: false,
    showFormText: 'ADD NEW COST+',
    currentPage: 1,
    itemsOnPage: 5
  }),
  methods: {
    switchShowForm () {
      this.showForm = !this.showForm
      this.showFormText = this.showForm ? 'Hide form' : 'ADD NEW COST+'
    },
    onAdd (data) {
      this.payments.push(data)
    },
    pageChange (page) {
      this.currentPage = page
    }
  },
  computed: {
    paymentsForShow: function () {
      const payments = this.payments
      const itemsOnPage = this.itemsOnPage
      const currentPage = this.currentPage
      // Вырезаем из массива нужные нам элементы
      return payments.slice(itemsOnPage * (currentPage - 1), itemsOnPage * currentPage)
    }
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
