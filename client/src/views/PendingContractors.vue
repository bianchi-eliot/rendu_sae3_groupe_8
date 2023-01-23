<template>
    <section v-if="contractors" class="on-wl contractors">
        <p class="msg">{{ message }}</p>
        <div v-for="contractor in contractors" :key="contractor.id_personne" class="contractor2">
            <p>{{ contractor.nom }} {{ contractor.prenom }}</p>
            <button class="add-btn" @click="add(contractor.id_personne)">Add contractor</button>
            <button class="delete-btn" @click="delete2(contractor.id_personne)">Delete contractor</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PendingContractors',
    data() {
        return {
            message: '',
            contractors: null
        }
    },
    methods: {
        async add(id) {
            const responce = await fetch(`http://localhost:3000/organiser/validateContractorOnWL/${id}`)
            const data = await responce.json()
            if (data.data == 0) {
                this.message = 'Prestataire ajouté'
            }
            this.contractors = this.contractors.filter(c => c.id_personne != id)
        },
        async delete2(id) {
            const responce = await fetch(`http://localhost:3000/organiser/deleteContractorOnWL/${id}`, {
                method: 'DELETE'
            })
            const data = await responce.json()
            if (data.data == 0) {
                this.message = 'Prestataire supprimé'
            }
            this.contractors = this.contractors.filter(c => c.id_personne != id)
        }
    },
    async mounted() {
        const responce = await fetch('http://localhost:3000/organiser/listContractorsOnWL')
        this.contractors = await responce.json()

    }
}
</script>

<style scoped> 
.contractors {
    display: flex;
        gap: 30px;
        flex-wrap: wrap;
    margin-top: 300px;
}

.contractor2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 2px 2px 3px lightgray;
    width: 250px;
    aspect-ratio: 1 / 1; 
}

.add-btn {
    border: 2px solid green;
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    background-color: green;
    color: white;
    padding: 10px 25px;
    transition: 0.25s;
    cursor: pointer;
}
.add-btn:hover {
    background-color: white;
    color: green;
}

.delete-btn {
    border: 2px solid red;
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    background-color: red;
    color: white;
    padding: 10px 25px;
    transition: 0.25s;
    cursor: pointer;
}
.delete-btn:hover {
    background-color: white;
    color: red;
}

.msg {
    position: absolute;
        top: 10vh;
        right: 100px;
        left: 100px;
    color: green;
    font-weight: bold;
    text-align: center;
}
</style>