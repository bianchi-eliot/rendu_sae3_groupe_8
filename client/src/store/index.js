import { createStore } from 'vuex'

export default createStore({
    state: {
        userId: -1,
        userRole: 'client',
        connected: false
    },
    getters: {
    },
    mutations: {
        setUserId(state, id) {
            state.userId = id
        },
        setUserRole(state, role) {
            state.userRole = role
        },
        toggleConnected(state) {
            state.connected = !state.connected
        }
    },
    actions: {
    },
    modules: {
    }
})
