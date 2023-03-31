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
  name: 'StarsPrestataire',
  components: { Doughnut },
  data() {
    return {
      data: {
        labels: ['Données', 'Pas données'],
          datasets: [
              {
                  // data: null,
                  backgroundColor: ['#40d430', '#d43830'],
                  data: [82, 18],
                  borderColor: 'rgba(225, 99, 255, 1)',
                  borderWidth: 2
              },
          ],
      },
    }
  },
  async mounted() {
    // const result = await fetch('http://localhost:3000/services/start-contractors', {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${this.$store.state.json}`
    //         }
    //     })
    // const json = await result.json()
    // const stars = []
    // json.data.forEach(d => stars.push( d.avg ))
    // this.data.datasets[0].data = stars
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
  color: #40d430;
}

</style>