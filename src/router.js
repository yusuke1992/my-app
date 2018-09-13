import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {   
            name: 'home',
            path: '/',
            component: Home
         },
         {
             name: 'productlist',
             path: '/product',
             component: ProductList,
         },
        {   
            name: 'product',
            path: '/product/:id',
            component: Product,
            props: route => ({id: Number(route.params.id)})
            // redirect: {name: 'home'}
         }
    ]
})

export default router