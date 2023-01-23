<template>
    <main class="planning">
        <section v-if="todayDate" class="date">
            <span>{{ todayDate.todayDay }} </span>
            <span>{{ todayDate.todayMonthName }} </span>
            <span>{{ todayDate.todayYear }}</span>
        </section>

        <section class="planning">
            <button v-if="yesterdayDate" class="selection yesterday"
                @click="changeDay(yesterdayDate.yesterdayDay, 
                    yesterdayDate.yesterdayMonth, yesterdayDate.yesterdayYear)">
                </button>
            <button v-if="tomorrowDate" class="selection tomorrow"
                @click="changeDay(tomorrowDate.tomorrowDay, 
                    tomorrowDate.tomorrowMonth, tomorrowDate.tomorrowYear)">
                </button>
            <Table :timeSlots="timeSlots"/>

        </section>
    </main>
</template>

<script>
import Table from '../components/planning/Table.vue'

export default {
    name: 'PlanningView',
    components: { Table },
    data() {
        return {
            url: 'http://localhost:3000/planning',
            timeSlots: null,
            todayDate: null,
            yesterdayDate: null,
            tomorrowDate: null,
        }
    },
    methods: {
        async changeDay(day, month, year) {
            const responce = await fetch(this.url + '?day=' + day +
                                        '&month=' + month + '&year=' + year)
            const data = await responce.json()
            this.timeSlots = data.timeSlots
            this.todayDate = data.todayDate
            this.yesterdayDate = data.yesterdayDate
            this.tomorrowDate = data.tomorrowDate
        }
    },
    async mounted() {
        const responce = await fetch(this.url)
        const data = await responce.json()
        this.timeSlots = data.timeSlots
        this.todayDate = data.todayDate
        this.yesterdayDate = data.yesterdayDate
        this.tomorrowDate = data.tomorrowDate
    }
}
</script>

<style>
main.planning {
    display: flex;
        flex-direction: column;
        gap: 20px;

    width: 100vw;
}

section.planning {
    display: flex;
        flex-direction: column;
        gap: 20px;
    width: calc(100vw - var(--navbar-width));
    padding: 20px;
}

section.date {
    display: flex;
        gap: 15px;
    align-self: center;
    font-size: 40px;
    font-weight: bold;
}
section.date span:first-child {
    color: var(--app-color);
}

button.selection {
    align-self: center;
    display: flex;
        gap: 10px;
    background-color: var(--app-color);
    color: black;
    cursor: pointer;
    display: flex;
        justify-content: center;
        align-items: center;

    font-size: 50px;
    text-decoration: none;
    width: 80%;
    height: 50px;
}
.yesterday::before { content: '<'; }
.tomorrow::before { content: '>'; }

button.selection:hover { background-color: hsl(160, 70%, 45%); }
.yesterday { box-shadow: 2px 2px 3px hsl(160, 70%, 45%); }
.tomorrow { box-shadow: -2px 2px 3px hsl(160, 70%, 45%); }

@media screen and (min-width: 1300px) {
    section.planning {
        flex-direction: row;
            justify-content: space-between;
    }


    button.selection {
        width: 100px;
        align-self: start;
        height: 80vh;
    }

    button.tomorrow {
        order: 2;
    }
}


</style>