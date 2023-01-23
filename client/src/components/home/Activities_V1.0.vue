<template>
    <h2>Activities</h2>
    <section class="grid">
        <div class="grid-element">
            <img src="../../assets/jpg/convention.jpg" alt="Convention image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Conventions</h3>
                <p>Our conventions gather contractors who represent the leaders of   
                    tomorrow's technology. Attend to those conventions by booking a 
                    reservation. Our team will receive you well!
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/race.jpg" alt="Race image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Races</h3>
                <p>See races that take place on the circuit next our stands.
                    The competitions between our drivers happen once a day.
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/autograph.jpg" alt="Autograph image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Autograph</h3>
                <p>You can meet the pilots to get an autograph and ask
                    them your question!
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/tuning.jpg" alt="Tuning image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Tuning</h3>
                <p>See professionals customize cars. Their skills can also
                    help customize your car.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ActivitiesComponent',
    methods: {
        toggleShow(e) {
            const description = e.target.nextElementSibling
            description.classList.toggle('show')
        }
    }
}
</script>

