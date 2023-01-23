<template>
    <h2>Services</h2>
    <section class="grid">
        <div class="grid-element">
            <img src="../../assets/jpg/guest_book.jpg" alt="Guest Book image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Guest's Book</h3>
                <p>You can sign the guest's book after visiting a stand to 
                    give your feedback about it.
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/e_shop.jpg" alt="E Shop image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>E-Shop</h3>
                <p>Our e-shop allows you to buy pieces from the contractors :
                    those pieces can help you customize your car for exemple!
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/review.jpg" alt="Review image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Review</h3>
                <p>You can leave a review (between 1 and 5 stars) after visiting a 
                    stand. 
                </p>
            </div>
        </div>

        <div class="grid-element">
            <img src="../../assets/jpg/ticket.jpg" alt="Ticket image">
            <button class="detail-btn" @click="toggleShow($event)">Details</button>
            <div class="description">
                <h3>Ticket</h3>
                <p>Get a ticket to attend to a convention at a certain
                    hour and a certain stand.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesComponent',
    methods: {
        toggleShow(e) {
            const description = e.target.nextElementSibling
            description.classList.toggle('show')
        }
    }
}
</script>