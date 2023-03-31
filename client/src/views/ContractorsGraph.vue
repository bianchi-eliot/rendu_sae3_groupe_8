<script>
import ContractorsInfluence from '../components/organiser_graph/ContractorsInfluence.vue'
import MostVisitedContractor from '../components/organiser_graph/ContractorsVisit.vue'
import LivreOr from '@/components/organiser_graph/LivreOr.vue'
import StarsPrestataire from '@/components/organiser_graph/StarsPrestataire.vue'

export default {
  name: 'ContractorsGraph',
  components: { ContractorsInfluence, MostVisitedContractor, LivreOr, StarsPrestataire }
}
</script>

<template>
  <main>
    <h3>Affluence moyenne de tous les prestataires</h3>
    <ContractorsInfluence />
    <section>
      <div>
        <h3>Visite pour chaque prestataire</h3>
        <MostVisitedContractor />
      </div>
      <div>
        <h3>% de livre d'or signés</h3>
        <LivreOr />
      </div>
      <div>
        <h3>% d'étoiles données</h3>
        <StarsPrestataire />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
    flex-direction: column;
}

section {
  display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  gap: 20px;
}
</style>