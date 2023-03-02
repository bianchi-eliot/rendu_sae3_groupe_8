<template>
    <header class="header">     
        <button class="open-navbar" data-open-navbar 
            @click="$emit('toggleExtend')">
            <svg class="open-navbar-svg" :class="{ rotate: extend }" width="48" height="48" viewBox="0 0 16.933333 16.933333">
                <path style="paint-order: markers fill stroke"
                        d="m 2.4175066,1.0588217 12.0850594,1.5e-6 c 0,0 0.581861,-0.029532 0.960482,0.3702961 0.400746,0.4231904 0.413222,0.8479664 0.411105,1.4067102 -0.0018,0.4596458 0.0486,1.0410315 -0.41147,1.4075511 -0.463625,0.3693476 -0.960117,0.370296 -0.960117,0.370296 H 2.4063619 c 0,0 -0.5963246,0.033071 -0.9501058,-0.3702974 C 1.0055533,3.7295023 1.0657336,3.5248474 1.0609472,2.8362506 1.0582004,2.4410686 1.0119596,1.9082066 1.4562561,1.4291193 1.7547109,1.1072935 2.4175066,1.0588217 2.4175066,1.0588217 Z">
                </path>
                <path style="paint-order: markers fill stroke"
                        d="m 2.417507,6.6891557 12.085059,1.1e-6 c 0,0 0.581861,-0.029535 0.960482,0.3702956 0.400746,0.4231908 0.413222,0.8479665 0.411105,1.4067111 -0.0018,0.4596458 0.0486,1.0410311 -0.41147,1.4075511 C 14.999058,10.243061 14.502566,10.24401 14.502566,10.24401 H 2.4063619 c 0,0 -0.5963249,0.03307 -0.9501058,-0.3702966 C 1.0055533,9.3598361 1.0657336,9.1551808 1.0609472,8.4665846 1.0582004,8.0714026 1.0119596,7.5385402 1.4562561,7.0594524 1.7547109,6.7376271 2.417507,6.6891557 2.417507,6.6891557 Z">
                </path>
                <path style="paint-order: markers fill stroke"
                        d="m 2.417507,12.319487 12.085059,2e-6 c 0,0 0.581859,-0.02954 0.960481,0.370296 0.400746,0.423191 0.413222,0.847966 0.411105,1.406709 -0.0018,0.459648 0.0486,1.041034 -0.41147,1.407553 -0.463624,0.369349 -0.960116,0.370296 -0.960116,0.370296 H 2.4063623 c 0,0 -0.5963246,0.03308 -0.9501058,-0.370298 C 1.0055537,14.99017 1.065734,14.785513 1.0609476,14.096915 1.0581995,13.701734 1.01196,13.168873 1.4562565,12.689785 1.7547113,12.36796 2.417507,12.319487 2.417507,12.319487 Z">
                </path>
            </svg>
        </button> 
        <h1 class="website-name">Expocar</h1>

        <div class="languages-container" data-languages-container>
            <img v-if="language === 'EN'" src="../assets/svg/english_flag.svg" alt="English flag" ref="image"/>
            <img v-else src="../assets/svg/french_flag.svg" alt="French flag" ref="image"/>
            <select name="languages" data-languages v-model="language">
                <option class="language" value="EN">EN</option>
                <option class="language" value="FR">FR</option>
            </select>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: { extend: Boolean },
    data() {
        return {
            ls: localStorage.getItem('json') ,
            language: 'EN',
            controlPressed: false
        }
    },
    mounted() {
        window.addEventListener('keydown', e => {
            if (e.key === 'Control') {
                this.controlPressed = true
            }
        })
        window.addEventListener('keyup', e => {
            if (e.key === 'e' && this.controlPressed) {
                this.$emit('toggleExtend')
            }
            this.controlPressed = false
        })
    }
}
</script>

<style scoped>
.header {
    display: flex;
        align-items: center;

    background-color: white;
    height: var(--header-height);
    position: fixed;
        top: 0;
        right: 0;
        left: 0;
    z-index: 5;
}

.website-name {
    margin: 5px auto 5px 25%;
    font-size: 45px;
    text-shadow: 5px 5px 6px lightgray;
}

/* Button open navbar */
button.open-navbar {
    cursor: pointer;
    margin-left: 20px;
}
.open-navbar-svg { 
    fill: rgb(0, 0, 0); 
    transition: 0.75s;
}
button.open-navbar:hover > .open-navbar-svg { fill: var(--dark-grey); }
.open-navbar-svg.rotate { transform: rotate(90deg); }

/* Select languages */
.languages-container {
    display: flex;
        gap: 10px;

    margin-right: 10px
}

select[name="languages"] {
    background-color: #FFF;
    border-radius: 5px;
    cursor: pointer;
    height: 50px;
    padding: 0 10px;
    width: 60px;
}
</style>