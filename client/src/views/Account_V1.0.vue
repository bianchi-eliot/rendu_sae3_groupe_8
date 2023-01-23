<template>
    <main class="account">
        <section class="container-informations-slots">
            <Informations/>
            <TimeSlots/>
        </section>
        <Services/>
    </main>
</template>

<script>
import Informations from '../components/account/Informations_V1.0.vue'
import TimeSlots from '../components/account/TimeSlots_V1.0.vue'
import Services from '../components/account/Services_V1.0.vue'

export default {
    name: 'AccountView',
    components: { Informations, TimeSlots, Services }
}
</script>

<style>
main.account {
    display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 200px;
    color: hsl(100, 78%, 39%);
    width: calc(100vw - var(--navbar-width));
    padding: 5px 10px;
}
.container-informations-slots {
    flex-grow: 1;
    display: flex;
        flex-direction: column;
        gap: 20px;
    width: 100%;
    height: max-content;
}
@media screen and (min-width: 1000px) {
    .container-informations-slots {
        flex-direction: row;
    }

}
main.account section {
    height: 300px;
}
</style>