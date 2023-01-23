<template>
  <h3 style="text-align: center">
    Shop
    <a class="bShowFilter" href="/#/shop#filter" @click="toggleFormFilter">
      Filters
    </a>
  </h3>
  <FilterShop v-if="form_filter" id="filterElements" :pmax="pmax"></FilterShop>
  <ElementsShop :pieces="pieces"></ElementsShop>
</template>

<script>
import FilterShop from "@/components/shop/FilterShop";
import ElementsShop from "@/components/shop/ElementsShop";

export default {
  name: 'ShopView',
  data() {
    return {form_filter: false, pieces: null, pmax: null}
  },
  components: {ElementsShop, FilterShop},
  methods: {
    toggleFormFilter() {
      this.form_filter = !this.form_filter;
    }
  },
  async mounted() {
    let resp = await fetch('http://localhost:3000/shop');
    let data = await resp.json();
    this.pieces = data.data.pieces;
    this.pmax = data.data.pmax;
    console.log(this.pieces)
  }
}
</script>

<style scoped>
  @import '@/assets/shop.css';
</style>