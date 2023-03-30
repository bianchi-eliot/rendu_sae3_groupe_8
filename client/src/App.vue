<template>
    <Header :extend="extend" @toggleExtend="handleToggle"/>
    <Navbar :extend="extend"/>
    <router-view/>
</template>

<script>
import Navbar from './components/Navbar_V1.0.vue'
import Header from './components/Header_V1.0.vue'

export default {
    name: 'App',
    components: { Navbar, Header },
    data() {
        return {
            extend: false
        }
    },
    methods: {
        handleToggle() {
            this.extend = !this.extend
        }
    },
    created() {
        if (localStorage.getItem('json')) {
            this.$store.commit('autoLog', {
                userRole: localStorage.getItem('role'),
                json: localStorage.getItem('json'),
                name: localStorage.getItem('name')
            })
        }
    },
    async mounted() {
        const res = await fetch('http://localhost:3000/')
        console.log(res)
    }
}
</script>

<style>
#app {
    margin-top: var(--header-height);
    margin-left: var(--navbar-width);
}
</style>