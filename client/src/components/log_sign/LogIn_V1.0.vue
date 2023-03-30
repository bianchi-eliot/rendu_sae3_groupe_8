<template>
    <div class="user loginBx">
        <div class="imgBx">
            <img src="../../assets/jpg/lock.jpg" alt="Log In image">
        </div>
        <div class="formBx">
            <form ref="logInForm" @submit.prevent="logIn">
                <h3 class="form-title">Log In</h3>
                <input type="text" name="email" placeholder="Email" v-model="email">
                <input type="password" name="password" placeholder="Password" v-model="password">


                <input type="submit" value="Log In">

            
                <p class="login">No account ?</p>
                <a class="change-btn" @click="$emit('toggleActive')">Sign In</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogInComponent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async logIn() {
            const body = { email: this.email, password: this.password }
            const responce = await fetch('http://localhost:5000/log-in', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(body)
            })
            const data = await responce.json()
            if (data.data === 0) {
                this.$store.commit('logIn', data)
                this.$router.push({ name: 'home', query: { connected: 'true' } })
            }
        }
    }
}
</script>

<style>

</style>