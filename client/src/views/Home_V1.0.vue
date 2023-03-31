<template>
	<FlashMessage v-if="$route.query.connected" message="You just loged in" class="primary"/>
	<FlashMessage v-if="$route.query.contractorAccount" message="Vous pourrez vous connecter quand un organiseur vous aura validé" class="danger"/>
	<FlashMessage v-if="$route.query.clientAccount" message="Votre compte client a été crée!" class="success"/>
    <main class="home">
        <Recap/>
        <Activities/>
        <Services/>
    </main>
</template>

<script>
import Recap from '../components/home/Recap_V1.0.vue'
import Activities from '../components/home/Activities_V1.0.vue'
import Services from '../components/home/Services_V1.0.vue'
import FlashMessage from '@/components/FlashMessage_V1.0.vue'


export default {
    name: 'HomeView',
    components: { Recap, Activities, Services, FlashMessage }
}
</script>

<style>
main.home {
    display: flex;
        flex-direction: column;
        gap: 40px;
        
}
h2 {
    color: var(--app-color);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
}
.grid {
    display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        gap: 5px;

}
@media screen and (min-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media screen and (min-width: 1350px) { .grid { grid-template-columns: repeat(3, 1fr); } }
@media screen and (min-width: 1800px) { .grid { grid-template-columns: repeat(4, 1fr); } }

.grid-element {
    display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    
    background: var(--light-white);
    border: 2px solid var(--app-color);
    border-radius: 5px;
    padding: 5px;
}

.grid-element img { width: 450px; }

.detail-btn {
    border: 2px solid var(--app-color);
    border-radius: 3px;
    box-shadow: 1px 1px 3px lightgray;
    color: var(--app-color);
    cursor: pointer;
    font-size: 20px;
    padding: 5px 10px;
    transition: 0.25s;
}
.detail-btn:hover {
    background-color: var(--app-color);
    color: var(--light-white);
}

.description { 
    display: none;
    width: 350px;
}
.description.show {
    display: block;
}
.description h3 { 
    color: var(--app-color);
    text-align: center; 
}
.description p { text-align: justify; }
</style>