// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import TdUI from './components/index.js'
import router from './routers'
import store from './stores'

Vue.use(TdUI);
Vue.prototype.$ELEMENT.size = 'small'
Vue.prototype.$ELEMENT.zIndex = 1000
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
