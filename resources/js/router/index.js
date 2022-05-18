import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/products/index'
import Account from '../components/products/Account'
const routes = [
    {
        path: '/',
        name: 'Product',
        component: Product
    },
    {
        path: '/accounts/:id',
        name: 'Account',
        component: Account,
        props:true,
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router

