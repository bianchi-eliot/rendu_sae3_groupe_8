<template>
  <div v-if="allPieces">
    <div class="card" v-for="piece in allPieces">
      <div class="card-content">
        <router-link :to="{name: 'details_piece', params: {id: piece.id_piece}}">
          <img alt="img_piece" src="@/assets/jpg/pieces/amc_908833k.png" style="height: 200px; width: 200px; object-fit: cover; object-position: 50% 0;">
        </router-link>
      </div>
      <div class="card-footer">
        {{ piece.nom_piece }}
        <div class="alert-warning" v-if="piece.quantite_piece <= 10">
          <strong>Only {{ piece.quantite_piece }} parts in stock</strong>
        </div>
        <div v-else></div>
        {{ piece.prix_piece }} €
        <a href="#">
          <button class="addToPanier">Add to cart</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementsShop",
  props: {
    pieces: Array
  },
  data() {
    return {allPieces: this.pieces}
  }
}
</script>