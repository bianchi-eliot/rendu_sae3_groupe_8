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