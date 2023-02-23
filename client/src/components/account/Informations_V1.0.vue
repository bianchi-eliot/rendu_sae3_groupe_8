<template>
    <section v-if="contractor" class="informations">
        <p>{{ messageUpdate }}</p>
        <form @submit.prevent="updateLaureat">
            <div class="name">
                <input type="text" name="lastname" v-model="contractor.prenom">
                <input type="text" name="firstname" v-model="contractor.nom">
            </div>

            <input type="email" name="email" v-model="contractor.email">

            <textarea name="info" v-model="contractor.infopersonne"></textarea>

            <select name="societes" v-model="contractor.id_societe">
                <option v-for="societe in societes" :key="societe.id_societe" :value="societe.id_societe">
                    {{ societe.nom_societe }}
                </option>
            </select>

            <select name="activities" v-model="contractor.id_activite">
                <option v-for="activity in activities" :key="activity.id_activite" :value="activity.id_activite">
                    {{ activity.nom_activite }}
                </option>
            </select>

            <input type="submit" value="Save changes">
        </form>
    </section>
    <p v-if="error">{{ error }}</p>
</template>

<script>
export default {
    name: 'InformationsComponent',
    data() {
        return {
            societes: null,
            activities: null,
            contractor: null,
            error: null,
            messageUpdate: null
        }
    },
    methods: {
        async updateLaureat() {
            const data = { 
                firstname: this.contractor.prenom,
                lastname: this.contractor.nom,
                email: this.contractor.email,
                info: this.contractor.infopersonne,
                societes: this.contractor.id_societe,
                activities: this.contractor.id_activite,
            }
            const results = await fetch(`http://localhost:3000/contractors/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify(data)
            })
            const responce = await results.json()
            if (responce.data === 0) this.messageUpdate = 'Laureate successfully updated' 
            else if (responce.data === 1) this.messageUpdate = 'An error occured' 
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

        // Contractor
        responce = await fetch('http://localhost:3000/contractors/single', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            }
        })
        json = await responce.json()
        if (json.data === 1) this.error = 'An error occured while loading the contractor'
        else this.contractor = json.contractorInfo
    }

}
</script>

<style scoped>
section.informations {
    margin: 0 auto;
    width: 100%;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    padding: 15px 50px;
    height: max-content;
}

div.name {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

select {
    border: 3px solid black;
    width: 100%;
}

input {
    width: 45%;
}

textarea {
    resize: none;
    width: 100%;
    height: 150px;
}

input[type="email"] {
    width: 100%;
}

input[type="submit"] {
    align-self: flex-end;
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 5px;
    width: 150px;
    transition: 0.25s;
}

input[type="submit"]:hover {
    background: var(--app-color);
    color: var(--light-white);
}
</style>