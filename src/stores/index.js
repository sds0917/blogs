import Vuex from 'vuex'
import modules from './modules'

// 其他配置
const config = {}

export default new Vuex.Store({
    ...config,
    modules
})
