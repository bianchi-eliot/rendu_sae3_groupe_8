<template>
    <h2>Guest's book's comments</h2>
    <p v-if="error">{{ error }}</p>
    <section v-if="guestsBook" class="book">
        <div v-for="guest in guestsBook" :key="guest.id_visiteur" class="guest">
            <p class="guest__fullname">{{ guest.prenom }} {{ guest.nom }}</p>
            <div class="guest__message">{{ guest.message_visiteur }}</div>
            <p class="guest__date">{{ guest.date_signature }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GuestBookView',
    data() {
        return {
            url: `http://localhost:3000/services/guest-book`,
            guestsBook: null,
            error: null
        }
    },
    async mounted() {
        const responce = await fetch(this.url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.$store.state.json}`
            },
        })
        const result = await responce.json()
        if (result.data === 0) this.guestsBook = result.guestBook
        else if (result.data === 1) this.error = 'An error occured while loading the guest\'s book'
    }
}
</script>

<style>
section.book {
    display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 300px;
        place-items: center;
        gap: 20px;

    border: 2px solid var(--app-color);
    border-radius: 5px;
    box-shadow: 2px 2px 3px lightgray;
    padding: 20px 10px;
}
.guest {
    display: flex;
        flex-direction: column;
        gap: 10px;

    border: 2px solid darkgreen;
    border-radius: 3px;
    padding: 15px;
    width: 250px;
    height: 250px;
}
.guest__fullname {
    background-color: hsl(0, 25%, 90%);
}
.guest__message {
    background-color: whitesmoke;
    height: 100px;
    overflow: scroll;
}
.guest__date {
    align-self: flex-end;
}
</style>