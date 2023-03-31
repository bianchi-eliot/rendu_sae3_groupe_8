<template>
    <section v-if="contractors" class="on-wl contractors">
        <p class="msg">{{ message }}</p>
        <div v-for="contractor in contractors" :key="contractor.id_personne" class="contractor">
            <p>Name: {{ contractor.nom }} {{ contractor.prenom }}</p>
            <p>Email: {{ contractor.email }}</p>
            <div class="description">Description: {{ contractor.infopersonne }}</div>
            <div class="add_delete">
                <button class="add-btn" @click="add(contractor.id_personne)">
                    Add
                </button>
                <button class="delete-btn" @click="del(contractor.id_personne)">
                    Delete
                </button>
            </div>
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
            const responce = await fetch(`http://localhost:3000/organiser/validateContractorOnWL/${id}`, {
                headers: {
                    'authorization': `Bearer ${this.$store.state.json}`
                },
            })
            const data = await responce.json()
            if (data.data == 0) {
                this.message = 'Prestataire ajouté'
            }
            this.contractors = this.contractors.filter(c => c.id_personne != id)
        },
        async del(id) {
            const responce = await fetch(`http://localhost:3000/organiser/deleteContractorOnWL/${id}`, {
                method: 'DELETE',           
                headers: {
                    'authorization': `Bearer ${this.$store.state.json}`
                },
            })
            const data = await responce.json()
            if (data.data == 0) {
                this.message = 'Prestataire supprimé'
            }
            this.contractors = this.contractors.filter(c => c.id_personne != id)
        }
    },
    async mounted() {
        const responce = await fetch('http://localhost:3000/organiser/listContractorsOnWL', {              
                headers: {
                    'authorization': `Bearer ${this.$store.state.json}`
                },})
        this.contractors = await responce.json()

    }
}
</script>

<style scoped> 
.description {
    display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 300px;
    border: 2px solid black;
    line-break: normal;
    overflow: scroll;
    height: 150px;
}
.add_delete {
    display: flex;
        gap: 20px;
    width: 100%;
}
.add_delete > button {
    flex-grow: 1;
}
.contractors {
    display: flex;
        gap: 30px;
        flex-wrap: wrap;
    margin-top: 300px;
}

.contractor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 2px 2px 3px lightgray;
    width: 350px;
    height: max-content;
}

.add-btn {
    border: 2px solid rgb(40, 200, 40);;
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    background-color: rgb(40, 200, 40);;
    color: white;
    padding: 10px 25px;
    transition: 0.25s;
    cursor: pointer;
}
.add-btn:hover {
    background-color: white;
    color: rgb(40, 200, 40);;
}

.delete-btn {
    border: 2px solid rgb(200, 40, 40);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    background-color: rgb(200, 40, 40);
    color: white;
    padding: 10px 25px;
    transition: 0.25s;
    cursor: pointer;
}
.delete-btn:hover {
    background-color: white;
    color: rgb(200, 40, 40);
}

.msg {
    position: absolute;
        top: 10vh;
        right: 100px;
        left: 100px;
    color: rgb(40, 200, 40);
    font-weight: bold;
    text-align: center;
}
</style>