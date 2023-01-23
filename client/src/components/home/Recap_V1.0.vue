<template>
    <section class="main-image">
        <h1>Franc-comtois Motor Show</h1> 
        <p>
            1 
            <sup>rst</sup>
            time 9 - 15 January 2023
        </p>
    </section>
    <section class="localisation">
        <h2>Located at Belchamp, in the Doubs</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.8779449629587!2d6.801652913725815!3d47.47280787917596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479210d7cd21dadb%3A0xfffd841e3cefbc5!2sBelchamp%20Circuit%20Automobile!5e0!3m2!1sfr!2sfr!4v1669908668923!5m2!1sfr!2sfr" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="550" height="300"></iframe>
    </section>
</template>

<script>
export default {
    name: 'RecapComponent'
}
</script>

<style>
.main-image {
    position: relative;
    background-image: url(../../assets/jpg/auto_home_black.jpg);
    background-size: cover;
    background-position: center;

    color: white;
    font-weight: bold;
    height: calc(100vh - var(--header-height));
    width: 100vw;
}
.main-image h1, .main-image p {
    position: absolute;
        left: 10%; 

    background: var(--app-color);
    border-radius: 5px;
    padding: 10px 25px;
}
.main-image h1 {
        top: 20%;
    font-size: 40px;
}
.main-image p {
        top: 60%;
    font-size: 25px;
}

.localisation {
    display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    margin-top: 15px;
}

@media screen and (min-width: 650px) {
    .localisation {
        flex-direction: row;
    }
}
</style>