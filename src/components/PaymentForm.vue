<template>
  <div :class="$style['form-box']">
    <h3>Добавьте новую транзакцию:</h3>
    <form>
      <div :class="$style.input">
        <input type="date" v-model="date" required=""/>
        <label>Дата</label>
      </div>
      <div :class="$style.input">
        <input type="text" v-model="description" required=""/>
        <label>Описание</label>
      </div>
      <div :class="$style.input">
        <input type="number" v-model="value" required=""/>
        <label>Сумма</label>
      </div>

      <button type="submit" @click.prevent="onSubmit">Добавить</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "PaymentForm",
  data: () => ({
    date: new Date().toISOString().slice(0,10),
    description: null,
    value: null,
    id: 100
  }),
  props: [
      'paramValue'
  ],
  methods: {
    ...mapMutations([
        'addPayments'
    ]),
    onSubmit () {
      const payment = {
        id: this.id,
        date: this.date,
        descr: this.description,
        value: this.value
      }
      // this.$emit('add', payment)
      this.addPayments([ payment ] )
      ++this.id
    }
  },
  mounted() {
    if (this.$route.params.category) {
      this.description = this.$route.params.category
    }
    if (this.paramValue) {
      this.value = this.paramValue
    }

    if (this.description && this.value) {
      this.onSubmit()
      console.log("Data added")
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" module>
.form-box {
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0,0,0,.1);
  border-radius: 10px;
  width: 50%;
}
.input {
  position: relative;

  input {
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: transparent;
    margin-top: 15px;

    &:focus ~ label,
    &:valid ~ label {
      top: 0;
      left: 0;
      font-size: 12px;
    }
  }

  label {
    position: absolute;
    top:10px;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    //color: #fff;
    pointer-events: none;
    transition: .5s;
  }

}

</style>
