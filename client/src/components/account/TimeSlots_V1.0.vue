<template>
    <section v-if="timeSlots" class="time-slots">
        <h3 style="color: lightcoral;">Today time slot's : </h3>
        <div class="time-slots">
            <div v-for="timeSlot in timeSlots.timeSlots" :key="timeSlot.id_stand" class="time-slot">
                <p>{{ timeSlot.creneau }}</p>
                <p>Stand N° : {{ timeSlot.numero_stand }}</p>
                <p>Number of seats : {{ timeSlot.nb_place }}</p>
            </div>
        </div>
        <router-link class="btn" :to="{ name: 'add-time-slot' }">Add a time slot</router-link>
    </section>
</template>

<script>
export default {
    name: 'TimeSlotsComponent',
    data() {
        return {
            timeSlots: null,
            id: undefined
        }
    },
    async mounted() {
        const responce = await fetch(`http://localhost:3000/contractors/time-slots`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            }
        })
        this.timeSlots = await responce.json()


    }
}
</script>

<style scoped>
section.time-slots {
    margin: 0 auto;
    width: 100%;
    padding: 15px;
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    margin-top: 20px;
    display: flex;
        flex-direction: column;
        justify-content: space-around;
    height: 400px;
}
div.time-slots {
    margin: 0 auto;
    width: 100%;
    display: flex;
        align-items: flex-start;
        gap: 30px;
    overflow: scroll;
}
.time-slot {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    background-color: whitesmoke;
    border: 2px solid black;
    border-radius: 3px;
    box-shadow: 2px 2px 3px lightgray;
    padding: 10px;
}

.btn {
    cursor: pointer;
    background-color: white;
    border: 2px solid var(--app-color);
    border-radius: 5px;
    color: var(--app-color);
    padding: 10px 20px;
    transition: 0.25s;
    text-decoration: none;
    align-self: center;
}
.btn:hover {
    background-color: var(--app-color);
    color: white;
}

</style>