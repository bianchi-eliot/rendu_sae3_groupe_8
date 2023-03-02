import { createStore } from 'vuex'

export default createStore({
    state: {
        userRole: 'client',
        connected: false,
        json: undefined
    },
    getters: {
    },
    mutations: {
        logIn(state, data) {
            state.userRole = data.userRole
            state.connected = true
            state.json = data.token
            console.log(data)
            localStorage.setItem('role', data.userRole)
            localStorage.setItem('json', data.token)
        },
        /*signIn(state, data) {

        },*/  
        logOut(state) {
            state.userRole = 'client'
            state.connected = false
            state.json = undefined
            localStorage.removeItem('role')
            localStorage.removeItem('json')
        },
        autoLog(state, credentials) {
            state.userRole = credentials.userRole
            state.connected = true
            state.json = credentials.json
        }
    },
    actions: {
    },
    modules: {
    }
})
