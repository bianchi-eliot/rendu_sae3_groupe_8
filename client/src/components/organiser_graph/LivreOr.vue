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
        labels: ['Signé', 'Pas signé'],
          datasets: [
              {
                  // data: null,
                  backgroundColor: ['#2c82cd', '#d43830'],
                  data: [61, 39],
                  borderColor: 'rgba(225, 99, 255, 1)',
                  borderWidth: 2
              },
          ],
          url: `http://localhost:3000/services/contractors-influence`
      },
    }
  },
  async mounted() {
    // const result = await fetch('http://localhost:3000/services/guest-book-contractors', {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${this.$store.state.json}`
    //         }
    //     })
    // const json = await result.json()
    // const livreor = []
    // json.data.forEach(d => livreor.push( d.count ))
    // this.data.datasets[0].data = livreor
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