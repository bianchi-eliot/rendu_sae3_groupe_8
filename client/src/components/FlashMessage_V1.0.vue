<template>
    <div class="flash-message primary">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'FlashMessageComponent',
    data() {
        return {}
    },
    props: { message: String, class: String }
}
</script>

<style scoped>
.flash-message {
    position: absolute;
        top: 10vh;
        right: 15vw;
        left: 15vw;
    display: flex;
        justify-content: center;
        align-items: center;
    height: 50px;
    z-index: 1;
}
.warning {
    background-color: rgb(255, 240, 70);
}
.danger {
    background-color: rgb(255, 100, 70);
}
.primary {
    background-color: rgb(80, 200, 255);
}
.success {
    background-color: rgb(80, 255, 80);
}
</style>