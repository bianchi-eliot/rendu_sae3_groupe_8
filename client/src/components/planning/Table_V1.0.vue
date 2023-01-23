<template>
    <div v-if="timeSlots && timeSlots.length !== 0" class="stands">
        <div v-for="timeSlot in timeSlots" :key="timeSlot.id_stand" class="stand">
            <p class="stand-number">Stand N°{{ timeSlot.id_stand }}</p>
            <div v-for="hour in hours" :key="hour" class="time-slot">
                <p v-if="hour === '8'" class="hour">08h</p>
                <p v-else class="hour">{{ hour }}h</p>
                <div v-if="isStand(timeSlot, hour)" class="contractor">
                    <img :src="require(`../../assets/svg/brands/${timeSlot.photo_marque[i]}`)" 
                    :alt="`Image ${timeSlot.nom_societe[i]}`">
                    <span style="align-self: center;">{{ timeSlot.nom_activite[i]}}</span>
                    <span style="justify-self: center; grid-column-start: 1; grid-column-end: span 2; color: var(--app-color);">{{timeSlot.prenom[i] }} {{ timeSlot.nom[i] }}</span>
                </div>
                <div v-else class="no-contractor">
                </div>
            </div>
        </div>
    </div>
    <div v-else style="align-self: center; font-size: 45px">
        <p>There is no time slot today</p>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: { timeSlots: Array },
    data() {
        return {
            hours: ['8', '10', '12', '14', '16', '18']
        }
    },
    methods: {
        isStand(timeSlot, hour) {
            this.i = timeSlot.hour.indexOf(hour)
            if (this.i === -1) return false
            return true
        }
    }
}
</script>


<style>
.stands {
    display: flex;
        flex-direction: column;
        gap: 15px;

    background-color: ghostwhite;
    border-radius: 5px;
    box-shadow: 4px 4px 5px lightgray;
    padding: 10px 15px;
}

.stand {
    display: flex;
        align-items: center;
        gap: 10px;

    background-color: var(--app-color);
    border-radius: 5px;
    padding: 5px 15px 15px 25px;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
}

.stand-number {
    font-size: 19px;
    font-weight: bold;
    width: 80px;
}

.time-slot {
    display: flex;
        flex-direction: column;
}
.contractor {
    display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

    background-color: ghostwhite;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px;
    width: 200px;
    height: 125px;
}
.contractor > img {
    width: 75px;
    height: 75px;
}

.no-contractor {
    background-color: lightgray;
    border-radius: 5px;
    width: 200px;
    height: 125px;
}

.hour {
    position: relative;
    font-size: 22px;
}
.hour::after {
    position: absolute;
        top: 10px;
        right: 0;
    content: '';
    background-color: black;
    width: 130px;
    height: 5px;
}

</style>