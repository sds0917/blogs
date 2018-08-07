export default {
    state: {
        quanxian: {
            adduser: true,
            deluser: true,
            upduser: true,
            seauser: true
        }
    },
    getters: {
        quanxian: state => state.quanxian
    },
    mutations: {
        updateQuanxian: (state, data) => state.quanxian = data
    },
    actions: {}
}
