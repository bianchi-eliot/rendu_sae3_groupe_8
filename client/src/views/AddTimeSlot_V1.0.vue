<template>
    <section class="add-time-slot">
        <p style="color: red">{{ message }}</p>
        <form @submit.prevent="book">
            <input type="date" v-model="date">

            <select name="" id="" v-model="hour">
                <option value="-1">Select an hour</option>
                <option v-for="hour, index in hours" :key="hour" :value="hoursValue[index]">
                    {{ hour }}
                </option>
            </select>

            <select name="" id="" v-model="standId">
                <option value="-1">Select a stand</option>
                <option v-for="stand in stands" :key="stand.id_stand" :value="stand.id_stand">
                    {{ stand.numero_stand }} -- {{ stand.nb_place }} places
                </option>
            </select>

            <input type="submit" value="Book time slot">
        </form>
    </section>
</template>

<script>
export default {
    name: 'AddTimeSlotView',
    data() {
        return {
            message: '',
            standId: -1,
            stands: null,
            date: '',
            hour: -1,
            hoursValue: ['08:00:00', '10:00:00', '12:00:00', '14:00:00', '16:00:00', '18:00:00'],
            hours: ['08h - 10h', '10h - 12h', '12h - 14h', '14h - 16h', '16h - 18h', '18h - 20h']
        }
    },
    methods: {
        async book() {
            const responce = await fetch(`http://localhost:3000/contractors/time-slot`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${this.$store.state.json}`
                },
                body: JSON.stringify({ date: this.date, hour: this.hour, standId: this.standId })
            })
            const data = await responce.json()
            if (data.data === 0) {
                this.$router.push({ name: 'account' })
            } else if (data.data === 1) {
                this.message = 'An error occured'
            } else if (data.data === 2) {
                this.message = 'Stand already book'
            } else if (data.data === 3) {
                this.message = 'Tous les champs n\'ont pas été rempli'
            }
        }
    },
    async mounted() {
        const responce = await fetch('http://localhost:3000/stands')
        const data = await responce.json()
        this.stands = data.stands
    }
}
</script>

<style scoped>
section {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    margin-top: 250px;
    width: 90vw;

}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: aliceblue;
    width: 50vw;
}
select {
    border: 2px solid black;
}
</style>