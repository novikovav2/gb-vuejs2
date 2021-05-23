import Vue from 'vue'
import Vuex from 'vuex'

import defaultPaymentValues from "@/data/payments";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        payments: [],
        currentPage: 1,
        totalCount: 0,
        itemsOnPage: 5
    },
    mutations: {
        // Захардкодил, как будто это значение пришло из БД
        setInitialTotalCount(state, payload) {
          state.totalCount = payload
        },
        addPayments (state, payload) {
            if (payload) {
                for (let i = 0; i < payload.length; i++) {
                    const existItem = state.payments.find(payment => payment.id === payload[i].id)
                    if (!existItem) {
                        state.payments.push(payload[i])
                        this.state.totalCount++
                    }
                }
            }

        },
        setCurrentPage (state, payload) {
            state.currentPage = payload
        }
    },
    getters: {
        getPayments: (state) => {
            const payments = state.payments
            const itemsOnPage = state.itemsOnPage
            const currentPage = state.currentPage
            // Вырезаем из массива нужные нам элементы
            return payments.slice(itemsOnPage * (currentPage - 1), itemsOnPage * currentPage)
        },
        getCurrentPage: state => state.currentPage,
        getTotalPaymentsCount: state => state.totalCount,
        getItemsOnPage: state => state.itemsOnPage
    },
    actions: {
        init({ commit }) {
            commit('setInitialTotalCount', 12)
        },
        fetchData({ commit, getters }) {
            const result = defaultPaymentValues.payments[getters.getCurrentPage - 1]
            commit('addPayments', result)
        },
        changeCurrentPage({ commit }, page) {
            commit('setCurrentPage', page)
        }
    }
})
