<template>
    <form class="form_filter_shop" method="GET" @submit.prevent="filter">
      <div class="filterElements">
        <div v-if="types_pieces">
          <label for="type">Type de pièce :</label>
          <select id="type" name="type" v-model="type_piece_filt">
            <option :value="-1">Choose</option>
            <option v-for="type in types_pieces" :value="type.nom_type_piece">{{ type.nom_type_piece }}</option> <!-- v-for -->
          </select>
        </div>

        <br>
        <div v-if="societes">
          <label for="marque">Marque vendeuse :</label>
          <select id="marque" name="marque" v-model="societe_filt">
            <option :value="-1">Choose</option>
            <option v-for="s in societes" :value="s.nom_societe">{{s.nom_societe}}</option>
          </select>
        </div>

        <br>
        <div>
          <label for="price">Prix :</label>
          <fieldset id="global">
            <p>0</p>
            <input type="range" id="price" name="price" multiple min="0" :max="pmax" step="0.01" v-model="price">
            <p id="priceOut">{{price}}</p>
          </fieldset>
        </div>
      </div>

      <br>
      <input type="submit" id="bFilter" value="Filtrer">
    </form>
</template>

<script>
export default {
  name: "FilterShop",
  props: {
    pmax: Number,
  },
  data() {
    return {societes: null, types_pieces: null, type_piece_filt: '', societe_filt: '', price: this.pmax}
  },
  methods: {
    async filter() {
      console.log(this.type_piece_filt, this.societe_filt, this.price)
      let url = `http://localhost:3000/shop/filter?`;
      if(this.societes.includes(this.societe_filt)) url += `type=${this.type_piece_filt}&`;
      if(this.societes.includes(this.societe_filt)) url += `marque=${this.societe_filt}&`;
      url += `price=${this.price}`;

      let resp = await fetch(url);
      const data = await resp.json();
      return data.data;
    }
  },
  async mounted() {
    let resp = await fetch('http://localhost:3000/shop/types_pieces');
    let data = await resp.json();
    this.types_pieces = data.data;

    resp = await fetch('http://localhost:3000/shop/societes');
    data = await resp.json();
    this.societes = data.data;
  }
}
</script>