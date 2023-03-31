import { createStore } from 'vuex'

export default createStore({
    state: {
        userRole: 'client',
        name: '',
        connected: false,
        json: undefined
    },
    getters: {
    },
    mutations: {
        logIn(state, data) {
            state.userRole = data.userRole
            state.name = data.name
            state.connected = true
            state.json = data.token
            localStorage.setItem('role', data.userRole)
            localStorage.setItem('name', data.name)
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
            localStorage.removeItem('name')
        },
        autoLog(state, credentials) {
            console.log(credentials)
            state.userRole = credentials.userRole
            state.name = credentials.name
            state.connected = true
            state.json = credentials.json
        }
    },
    actions: {
    },
    modules: {
    }
})
