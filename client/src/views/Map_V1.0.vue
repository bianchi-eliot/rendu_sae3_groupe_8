<template>
    <main class="map">
        <div class="map-container">
            <img class="map-svg" src="../assets/svg/map_background.svg" alt="Map background image">
            <img class="map-svg" src="../assets/svg/map_stands.svg" alt="Map stands image">
            <svg class="map-svg stands-svg" viewBox="0 0 211.66666 211.66667">
                <path class="stand stand-blue-svg" data-id="1" @click="showActivity($event)"
                      d="m 39.051691,7.3120771 6.755444,16.6551679 8.203287,-1.978546 1.013123,1.391037 19.102544,-5.41769 -0.437961,-1.289616 7.734628,-2.234951 -8.016204,-14.0913048 z"></path>
                <path class="stand stand-yellow-svg" data-id="2" @click="showActivity($event)"
                      d="M 14.49951,53.726417 29.268049,89.742901 45.588696,84.962236 29.522905,49.36966 Z"></path>
                <path class="stand stand-purple-svg" data-id="3" @click="showActivity($event)"
                      d="m 70.295604,41.100955 11.64807,27.064044 3.886841,-0.559663 1.971133,4.222295 3.930828,-0.94265 8.923464,4.295909 2.54868,-5.366924 -5.364207,-2.760231 -5.336921,-8.875513 -1.46154,-4.044806 19.314758,-5.893508 -8.8072,-15.888733 z"></path>
                <path class="stand stand-yellow-svg" data-id="4" @click="showActivity($event)"
                      d="m 116.83998,81.968916 29.63805,10.540527 -13.96117,27.610147 9.75002,3.39604 0.4144,-1.13622 6.0492,1.10034 5.90916,2.90339 0.11496,1.83119 19.89259,7.71825 15.3255,-33.87797 -21.56978,-7.534059 -1.19075,2.642359 -49.27332,-17.573314 1.95159,-4.056583 -4.80845,-1.756497 -7.50362,12.35992 5.60565,2.329477 z"></path>
                <path class="stand stand-green-svg" data-id="5" @click="showActivity($event)"
                      d="m 68.079135,104.79907 2.802974,1.13277 -4.327116,8.07333 11.31078,3.76589 14.032862,-25.637747 -14.327512,-3.954555 z"></path>
                <path class="stand stand-green-svg" data-id="6" @click="showActivity($event)"
                      d="m 136.84992,191.87448 3.85815,-0.68633 9.52443,4.06719 2.15199,-4.044 -11.06823,-4.34371 -4.44839,1.73139 z"></path>
                <path class="stand stand-green-svg" data-id="7" @click="showActivity($event)"
                      d="m 172.66613,168.48646 3.85815,-0.68633 9.52443,4.06719 2.15199,-4.044 -11.06823,-4.34371 -4.44839,1.73139 z"></path>
                <path class="stand stand-red-svg" data-id="8" @click="showActivity($event)"
                      d="m 107.26846,195.46368 13.48104,4.59468 22.22646,-41.23908 -12.93584,-4.0892 z"></path>
                <path class="stand stand-yellow-svg" data-id="9" @click="showActivity($event)"
                      d="m 167.79868,193.23175 20.51968,4.22338 3.31646,-12.63205 -18.77913,-3.80712 z"></path>
                <path class="stand stand-yellow-svg" data-id="10" @click="showActivity($event)"
                      d="m 16.070649,185.23552 20.51968,4.22338 3.31646,-12.63205 -18.77913,-3.80712 z"></path>
                <path class="stand stand-blue-svg" data-id="11" @click="showActivity($event)"
                      d="m 31.949344,146.24014 35.73121,7.80612 3.535134,-12.67917 -36.099026,-7.27145 z"></path>
            </svg>
        </div>
        <StandInformations :timeSlot="timeSlot" :receptionMessage="receptionMessage"/>
    </main>
</template>

<script>
import StandInformations from '../components/map/StandInformations_V1.0.vue'

export default {
    name: 'MapView',
    data() {
        return {
            url: 'http://localhost:3000/map',
            timeSlots: null,
            timeSlot: null,
            receptionMessage: true
        }
    },
    components: { StandInformations },
    methods: {
        showActivity(e) {
            if (this.receptionMessage == true) this.receptionMessage = false

            if (this.timeSlots == null) return
            const standId = parseInt(e.target.dataset.id)
            const stand = this.timeSlots.find(timeSlot => timeSlot.id_stand === standId)

            if(stand == undefined) return this.timeSlot = null

            this.timeSlot = {}
            this.timeSlot.hourStart = stand.hour
            this.timeSlot.hourEnd = parseInt(stand.hour) + 2
            this.timeSlot.services = stand.libelle_service
            this.timeSlot.contractorName = `${stand.prenom} ${stand.nom}`
            this.timeSlot.activityName = stand.nom_activite
            this.timeSlot.societyName = stand.nom_societe
            this.timeSlot.image = stand.photo_marque     
            this.timeSlot.idContractor = stand.id_personne
        }     
    },
    async mounted() {
        const responce = await fetch(this.url)
        this.timeSlots = await responce.json()
    }
}
</script>

<style>
:root {
    --map-color-yellow-hue: 50;
    --map-color-blue-hue: 200;
    --map-color-green-hue: 150;
    --map-color-purple-hue: 320;
    --map-color-red-hue: 0;

    --map-color-saturation: 100%;
    --map-color-lightness: 50%;
}

/* Map svg */
main.map {
    display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 30px;
}
@media screen and (min-width: 900px) {
    main.map {
        flex-direction: row;
    }
}

.map-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 80vh;
}

.map-svg {
    position: absolute;
    min-width: 300px;
    min-height: 300px;
    width: 85%;
    height: 85%;
}

.stands-svg {
    z-index: 1;
}

.stand {
    cursor: pointer;
    transition: 0.75s;
    stroke: #000000;
    stroke-width: 0.25px;
}

.stand-yellow-svg { fill: hsl(var(--map-color-yellow-hue), var(--map-color-saturation), var(--map-color-lightness)); }

.stand-blue-svg { fill: hsl(var(--map-color-blue-hue), var(--map-color-saturation), var(--map-color-lightness)); }

.stand-green-svg { fill: hsl(var(--map-color-green-hue), var(--map-color-saturation), var(--map-color-lightness)); }

.stand-purple-svg { fill: hsl(var(--map-color-purple-hue), var(--map-color-saturation), var(--map-color-lightness)); }

.stand-red-svg { fill: hsl(var(--map-color-red-hue), var(--map-color-saturation), var(--map-color-lightness)); }

.stands-svg > path:hover {
    --map-color-saturation: 80%;
    --map-color-lightness: 40%;
}
</style>