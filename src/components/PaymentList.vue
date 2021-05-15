<template>
  <div :class="[$style.list]">
    <h3>Список транзакций</h3>
    <table :class="$style.table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Description</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.id">
          <td>{{ payment.id }}</td>
          <td>{{ payment.date }}</td>
          <td>{{ payment.descr }}</td>
          <td>{{ payment.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentList",
  props: {
    payments: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
.list {
  margin-top: 30px;
  width: 50%
}

.table {
  width: 100%;

  thead {
    cursor: pointer;
    background: #c9dff0;

    tr th {
      font-weight: bold;
      padding: 12px 30px;
    }
  }

  tbody {
    tr td {
      text-align: center;
      padding: 15px 10px;
    }
  }
}
</style>
