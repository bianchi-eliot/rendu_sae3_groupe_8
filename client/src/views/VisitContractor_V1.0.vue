<template>
    <main class="contractor-visit">
        <section v-if="contractor" class="contractor-visit">
            <div class="desc">
                <p>{{ contractor.prenom }} {{ contractor.nom }}</p>
                <p>Email : <span class="imp">{{ contractor.email }}</span></p>
            </div>
            <div>Activity : <span class="imp">{{ contractor.nom_activite }}</span></div>
            <div class="societe">
                <p>{{ contractor.nom_societe }}</p>
                <img :src="require(`../assets/svg/brands/${contractor.photo_marque}`)">
            </div>
            <div class="info-personne">{{ contractor.infopersonne }}</div>
        </section>

        <div v-if="servicesActivated">
            <div v-if="commentResponce" class="comment-responce">{{ commentResponce }}</div>
            <div v-if="!servicesActivated.includes(1)" style="color: red">This service has not been activated</div>
            <div v-else-if="$store.state.userId == -1" style="color: red">You must be connected to post a comment</div>
            <form class="add-comment" @submit.prevent="addComment">
                <textarea name="" rows="5" id="" placeholder="Write your comment here" 
                    v-model="message" :disabled="$store.state.userId == -1 || !servicesActivated.includes(1)"></textarea>
                <input type="submit" value="Send comment" :disabled="$store.state.userId == -1 || !servicesActivated.includes(1)">
            </form>
        </div>

        <div v-if="servicesActivated">
            <div v-if="starsResponce" class="stars-responce">{{ starsResponce }}</div>
            <div v-if="!servicesActivated.includes(2)" style="color: red">This service has not been activated</div>
            <div v-else-if="$store.state.userId == -1" style="color: red">You must be connected to add stars</div>
            <form action="add-stars" @submit.prevent="addStars">
                <input type="number" :disabled="$store.state.userId == -1 || !servicesActivated.includes(2)" placeholder="grade between 1 and 5" min="1" max="5" v-model="stars">
                <input type="submit" value="Add grade" :disabled="$store.state.userId == -1 || !servicesActivated.includes(2)">
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: 'VisitContractorView',
    data() {
        return {
            contractor: null,
            message: '',
            stars: '',
            commentResponce: undefined,
            starsResponce: undefined,
            servicesActivated: undefined
        }
    },
    methods: {
        async addComment() {
            const badWords = ['putain', 'merde', 'connard', 'fuck', 'slut']
            const bool = badWords.some(word => this.message.match(word) )
            if (bool == true) {
                this.commentResponce = 'Veuillez adopter un vocabulaire courtois'
                return
            }
            const body = {
                idContractor: this.$route.params.id,
                message: this.message
            }
            const responce = await fetch(`http://localhost:3000/services/guest-book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify(body)
            })
            const data = await responce.json()
            if (data.data === 0) {
                this.commentResponce = 'Message successfully added'
            } else if (data.data === 1) {
                this.commentResponce = 'An error occured while posting the message'
            } else if (data.data === 2) {
                this.commentResponce = 'Message updated'
            }
        },
        async addStars() {
            const body = {
                idContractor: this.$route.params.id,
                stars: this.stars
            }
            const responce = await fetch(`http://localhost:3000/services/stars`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify(body)
            })
            const data = await responce.json()
            if (data.data === 0) {
                this.starsResponce = 'Stars successfully added'
            } else if (data.data === 1) {
                this.starsResponce = 'An error occured while posting the stars'
            } else if (data.data === 2) {
                this.starsResponce = 'Stars updated'
            }
        },
        incGraph() {
            if (this.servicesActivated.includes(4)) {
                setTimeout(async () => {
                    await fetch('http://localhost:3000/services/add-graph', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            tranche_horaire: new Date().getHours(),
                            id_personne: this.$route.params.id
                        })
                    })
                }, 5000)
            }
        }
    },  
    async mounted() {
        let responce = await fetch(`http://localhost:3000/contractors/visitor/${this.$route.params.id}`)
        let data = await responce.json()
        this.contractor = data.contractorInfo

        responce = await fetch(`http://localhost:3000/contractors/activated-services/visitor/${this.$route.params.id}`)
        data = await responce.json()
        if (data.data === 0) {
            this.servicesActivated = data.servicesActivated
        }

        this.incGraph()
    }
}
</script>

<style scoped>
main.contractor-visit {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
}

.desc {
    display: flex;
        justify-content: space-between;
}

.imp {
    color: var(--app-color);
}

section.contractor-visit {
    display: flex;
        flex-direction: column;
        gap: 10px;
    
    width: 700px;
    background-color: rgb(246, 242, 242);
    background-color: rgb(246, 242, 242);
    border-radius: 5px;
    box-shadow: 2px 2px 3px black;
    padding: 10px 50px;
}
.societe { 
    display: flex;
        align-items: center;
        justify-content: space-around;
    background-color: lightgrey;
    padding: 10px 0;
}

form {
    display: flex;
        flex-direction: column;
        gap: 10px;

    background-color: rgb(246, 242, 242);
    border-radius: 5px;
    box-shadow: 2px 2px 3px black;
    padding: 20px;
    width: 500px;
}
form.add-comment > textarea {
    resize: none;
}

input[type="submit"] {
    cursor: pointer;
    background-color: white;
    border: 2px solid var(--app-color);
    border-radius: 5px;
    color: var(--app-color);
    padding: 5px 0;
    transition: 0.25s;
}
input[type="submit"]:hover {
    background-color: var(--app-color);
    color: white;
}
.info-personne {
    background-color: ghostwhite;
    border: 3px solid black;
    border-radius: 5px;
    padding: 20px;
}
.comment-responce, .stars-responce {
    color: var(--app-color);
}
</style>