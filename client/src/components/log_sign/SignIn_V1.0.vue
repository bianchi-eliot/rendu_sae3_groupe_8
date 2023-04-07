<template>

    <div class="user signinBx">
        <p class="messageForm">{{ messageForm }}</p>
        <div class="formBx">
            <form @submit.prevent="signIn">
                <h3 class="form-title">Sign In</h3>

                <select name="roles" v-if="roles" v-model="idRole">
                    <option value="-1">Choose a role</option>
                    <option v-for="role in roles" :key="role.id_role" :value="role.id_role">
                        {{ role.libelle_role }}
                    </option>
                </select>

                <select name="societes" v-if="societes" v-model="idSociety" :disabled="!isContractor">
                    <option value="-1">Choose a society</option>
                    <option v-for="societe in societes" :key="societe.id_societe" :value="societe.id_societe">
                        {{ societe.nom_societe }}
                    </option>
                </select>

                <select name="activities" v-if="activities" v-model="idActivity" :disabled="!isContractor">
                    <option value="-1">Choose an activity</option>
                    <option v-for="activity in activities" :key="activity.id_activite" :value="activity.id_activite">
                        {{ activity.nom_activite }}
                    </option>
                </select>

                <input type="text" name="nom" placeholder="Last name" v-model="lastName">
                <input type="text" name="prenom" placeholder="First name" v-model="firstName">
                <input type="text" name="email" placeholder="Email" v-model="email">
                <textarea name="info" v-model="info" placeholder="Enter a description of you if you're a contractor" :disabled="!isContractor"></textarea>
                <input type="password" name="mot_de_passe" placeholder="Password" v-model="password">
                <input type="password" name="mot_de_passe_confirmation" 
                    placeholder="Password-confirm" v-model="passwordConfirm">
            
                <input type="submit" value="Sign In">
                <p class="signin">Already have an account ?</p> 
                <a class="change-btn" @click="$emit('toggleActive')">Log In</a>
            </form>
        </div>
        <div class="imgBx">
            <img src="../../assets/jpg/keys.jpg" alt="Sign In image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignInComponent',
    data() {
        return {
            url: 'http://localhost:5000/sign-in',
            messageForm: '',

            idActivity: -1,
            idRole: -1,
            idSociety: -1,

            societes: null,
            activities: null,
            roles: null,

            lastName: '',
            firstName: '',
            email: '',
            info: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        async signIn() {
            const data = {
                lastName: this.lastName,
                firstName: this.firstName,
                info: this.info,
                email: this.email,
                password: this.password,

                idActivity: this.idActivity,
                idRole: this.idRole,
                idSociety: this.idSociety,

                activities: null,
                roles: null,
                societes: null,
            }
            const responce = await fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            const json = await responce.json()
            console.log(json)
            if (json.data === 0) {
                this.$router.push({ name: 'home', query: { contractorAccount: 'true' } })
            } else if (json.data === 3) {
                this.$store.commit('logIn', json)
                this.$router.push({ name: 'home', query: { clientAccount: 'true' } })
            }
            else if (json.data === 2) this.messageForm = 'This email address already exists'
            else if (json.data === 1) this.messageForm = 'An error occured on the server'
        }   
    },
    computed: {
        isContractor() {
            if (this.roles == null) return true
            const role = this.roles.find(role => role.id_role === this.idRole)
            return role != undefined && role.libelle_role === 'prestataire'
        }
    },
    async mounted() {
        // Societes select
        let responce = await fetch('http://localhost:3000/all-societes')
        let json = await responce.json()
        if (json.data === 1) this.error = 'An error occured while loading the societes'
        else this.societes = json.societes

        // Activities select
        responce = await fetch('http://localhost:3000/all-activities')
        json = await responce.json()
        if (json.data === 1) this.error = 'An error occured while loading the activities'
        else this.activities = json.activities

        // Roles select
        responce = await fetch('http://localhost:3000/sign-in-roles')
        json = await responce.json()
        if (json.data === 1) this.error = 'An error occured while loading the societes'
        else this.roles = json.roles
    }
}
</script>

<style scoped>
    textarea {
        resize: none;
        width: 100%;
        height: 100px;
    }

    .messageForm {
        position: absolute;
            top: 2px;
            left: 50%;
        transform: translateX(-50%);

        color: green;
        z-index: 2;
    }
</style>