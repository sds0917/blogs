import VueRouter from 'vue-router'
import routes from './routers'

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

// 钩子
router.beforeEach((to, from, next) => {
    next()
})

export default router
