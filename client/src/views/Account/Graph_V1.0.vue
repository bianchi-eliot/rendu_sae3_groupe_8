<template>
    <!-- simple graphic with a red line -->
    <div class="grid-element">
        <h2>Chart</h2>
        <Bar v-if="data.labels" :data="data" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Bar
    },
    data() {
        return {
            data: {
                datasets: [
                    {
                        label: 'Nombre de visites',
                        data: null,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2
                    }
                ],
                url: `http://localhost:3000/contractors/affluence/`
            },
            options: {
                responsive: true
            }
        }
    },
    async mounted() {
        const responce = await fetch(this.data.url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            }
        })
        const data = await responce.json()

        const labels = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        this.data.labels = labels

        const visiteurs = []
        data.data.forEach(element => {
            const index = labels.indexOf(parseInt(element.tranche_horaire))
            visiteurs[index] = element.compteur
        })

        this.data.datasets[0].data = visiteurs
    }
}
</script>