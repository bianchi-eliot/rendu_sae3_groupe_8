<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default {
  name: 'MostVisitedContractor',
  components: { Doughnut },
  data() {
    return {
      data: {
          datasets: [
              {
                  label: 'Nombre de visites',
                  data: null,
                  backgroundColor: 'rgba(99, 255, 132, 0.2)',
                  borderColor: 'rgba(99, 255, 132, 1)',
                  borderWidth: 2
              },
          ],
      },
    }
  },
  async mounted() {
    const result = await fetch('http://localhost:3000/services/visit-contractors', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            }
        })
    const json = await result.json()
    const visits = []
    json.data.forEach(d => visits.push( d.sum ))
    this.data.datasets[0].data = visits
  }
}
</script>

<template>
    <Doughnut v-if="data.datasets[0].data" :data="data" class="most-visited"/>
</template>

<style scoped>
.most-visited {
  max-height: 200px;
  width: max-content;
}

</style>