import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {   
            name: 'home',
            path: '/',
            component: Home
         },
         //  商品一覧
         {
             name: 'productlist',
             path: '/product',
             component: ProductList,
         },
         // 商品情報
        {       
            name: 'product',
            path: '/product/:id',
            component: Product,
            props: route => ({id: Number(route.params.id)}),
            children: [
                // 商品詳細
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome
                },
                // 商品のレビュー一覧
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview
                },
                // 商品のレビュー詳細
                {
                    name: 'review-detail',
                    path: 'review/:rid',
                    component: ProductReviewDetail
                }
            ]
         }
    ]
})

export default router