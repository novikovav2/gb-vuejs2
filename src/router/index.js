import Vue from "vue"
import Router from 'vue-router'
import PaymentForm from "@/components/PaymentForm";
import PaymentList from "@/components/PaymentList";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PaymentList,
            name: PaymentList
        },
        {
            path: '/add/payment/',
            component: PaymentForm,
        },
        {
            path: '/add/payment/:category',
            component: PaymentForm,
            props: (route) => ({ paramValue: route.query.value})
        }
    ]
})
