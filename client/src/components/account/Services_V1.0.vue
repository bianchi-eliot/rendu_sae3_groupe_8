<template>
    <section v-if="services" class="services">
        <div class="a">
            <div v-for="service in services" :key="service.id_service">
            <div v-if="service.libelle_service != 'E-shop'">
                <input :id="service.libelle_service" type="checkbox" name="services" 
                :value="service.id_service" v-model="contractorServices" @change="toggleActivated">
                <label :for="service.libelle_service">{{ service.libelle_service }}</label>
            </div>
            </div>
        </div>

        <div class="b">
            <div v-for="service in services" :key="service.id_service">
            <div v-if="service.libelle_service === 'Guests\' book' & contractorServices.includes(service.id_service)">
                <router-link :to="{ name: 'guest-book' }" class="guest-book-btn">
                    See people's comments
                </router-link>
            </div>

            <div v-else-if="service.libelle_service === 'Stars' & contractorServices.includes(service.id_service)">
                <span class="stars-info">&#9733; : {{ stars }}</span>
            </div>


            <div v-else-if="service.libelle_service === 'Affluent graph' & contractorServices.includes(service.id_service)">
                <router-link :to="{ name: 'graph' }" class="graph-btn">
                    See your graph
                </router-link>
            </div>
        </div>
        </div>
    </section>
    <p v-if="error">{{ error }}</p>
</template>

<script>
export default {
    name: 'ServicesComponent',
    data() {
        return {
            services: null,
            contractorServices: null,
            stars: null,
            error: null,
            id: undefined
        }
    },
    methods: {
        async toggleActivated(e) {
            const serviceId = e.target.value
            if (!e.target.checked) {
              await fetch(`http://localhost:3000/contractors/active/${serviceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify({ idContractor: this.id })
              })  
            } else {
              await fetch(`http://localhost:3000/contractors/active/${serviceId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify({ idContractor: this.id })
              })  
            }
        }
    },
    async mounted() {
        let results = await fetch(`http://localhost:3000/contractors/activated-services`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            }
        })

        let responce = await results.json()
        if (responce.data === 0) {
            this.contractorServices = responce.servicesActivated
            if (responce.stars[0].grade != null) {
                this.stars = parseFloat(responce.stars[0].grade)
                this.stars = this.stars.toFixed(2)
            } else {
                this.stars = 'No stars given yet'
            }
        }
        else if (responce.data === 1) this.error = 'An error occured' 

        results = await fetch('http://localhost:3000/services')
        responce = await results.json()
        if (responce.data === 0) this.services = responce.services
        else if (responce.data === 1) this.error = 'An error occured' 
    }
}
</script>

<style>
.a {
    display: flex;
        flex-direction: column !important;
        gap: 15px;

}
.a > div > div{
    display: flex;
        gap: 20px
}
.b {
    display: flex;
        flex-direction: column !important;
        gap: 15px;

}
.b > div > div{
    display: flex;
        gap: 20px
}
section.services {
    display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    color: var(--app-color);
    font-size: 20;
    padding: 5px 10px;
}
.service {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
}
.service > div:first-child {
    display: flex;
        gap: 20px;
}

.guest-book-btn {
    background-color: rgb(180, 35, 35);
    border: 2px solid rgb(180, 35, 35);
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgb(160, 60, 60);
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    transition: 0.5s;
}
.guest-book-btn:hover {
    background-color: white;
    color: rgb(180, 35, 35);
}
.stars-info {
    font-size: 40px;
    border: 3px solid rgb(255, 215, 0);
    border-radius: 5px;
    padding: 15px 60px;
    color: rgb(255, 215, 0);
    background-color: ghostwhite;
}

.e-shop-btn {
    background-color: rgb(70, 130, 180);
    border: 2px solid rgb(70, 130, 180);
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgb(50, 105, 155);
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    transition: 0.5s;
}
.e-shop-btn:hover {
    background-color: white;
    color: rgb(70, 130, 180);
}

.graph-btn {
    background-color: rgb(190, 85, 210);
    border: 2px solid rgb(190, 85, 210);
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgb(170, 60, 185);
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    transition: 0.5s;
}
.graph-btn:hover {
    background-color: white;
    color: rgb(190, 85, 210);
}
</style>