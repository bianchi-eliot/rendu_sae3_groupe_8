<template>
    <section v-if="societes" class="societes">
        <img v-for="societe in societes" :key="societe.id_societe" :alt="`Image ${societe.nom_societe}`"
             :src="require(`../../assets/svg/brands/${societe.photo_marque}`)">
    </section>
</template>

<script>
export default {
    name: 'BrandsComponent',
    data() {
        return {
            url: 'http://localhost:3000',
            societes: null
        }
    },
    async mounted() {
        const responce = await fetch(this.url)
        this.societes = await responce.json()
    }
}
</script>

<style>
.societes {
    display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
}
</style>