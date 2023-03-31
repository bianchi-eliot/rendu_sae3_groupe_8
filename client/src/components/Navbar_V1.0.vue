<template>
    <nav class="navbar" :class="{ extend: extend }">
        <ul class="navbar-list">
            <!--<img v-if="$store.state.connected" class="account-svg" src="../assets/svg/user_account.svg" alt="account-image">-->
            <li class="navbar-list-element">
                <router-link :to="{ name: 'home' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <path style="stroke-width: 0" d="m 2.9104171,9.1590343 v 6.7159647 h 3.9511108 v -4.638862 h 3.0868053 v 4.638862 h 4.0745828 l 2e-6,-6.7159668 -5.5562491,-5.12352 z"/>
                        <path style="stroke-width: 0" d="M 1.9226394,9.1590343 8.4666667,2.9277262 15.010694,9.1590343 15.874999,7.7742991 8.9605554,1.0583338 H 7.9727778 L 1.058334,7.7742991 Z"/>
                        <path style="stroke-width: 0" d="M 11.676944,3.7585673 V 1.0583338 h 2.2225 v 4.8108468 z"/>
                    </svg> 
                    <span class="navbar-title">Home</span> 
                </router-link>
            </li>
            <li class="navbar-list-element">
                <router-link :to="{ name: 'map' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <ellipse style="fill: none; stroke-width: 1.56681" cx="8.4666662" cy="5.7741823" rx="4.0489793" ry="3.9324417"/>
                        <path style="stroke-width: 0" d="m 3.9076928,6.7289159 -0.071234,0.3874286 c 0,0 0.1111635,0.5409088 0.4131572,1.1899596 1.0931781,2.3494829 4.2170508,5.1472669 4.2170508,5.1472669 0,0 3.1220732,-2.798242 4.2170512,-5.1472669 0.302579,-0.6491128 0.413157,-1.1899596 0.413157,-1.1899596 L 13.025637,6.7289159 11.031086,9.0258144 8.4666625,9.8560187 5.9022397,9.0258144 Z"/>
                        <path style="stroke-width: 0" d="M 4.6200325,11.101325 H 2.7679493 L 1.058334,15.875 h 14.816665 l -1.709615,-4.773675 h -1.852083 l -3.8466342,3.735919 z"/>
                    </svg>       
                    <span class="navbar-title">Map</span> 
                </router-link>
            </li>
            <li class="navbar-list-element">
                <router-link :to="{ name: 'planning' }" class="planning" :data-day="day" :data-month="month"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <path style="stroke-width: 0" d="M 14.022917,1.0583333 H 2.9104167 c 0,0 -0.5331481,0.1033607 -0.79375,0.2645834 -0.2544597,0.1574202 -0.6308754,0.5523662 -0.79375,0.79375 -0.1753754,0.2599103 -0.2645834,0.79375 -0.2645834,0.79375 l 7e-7,11.1125003 c 0,0 0.1287256,0.584502 0.2645827,0.79375 0.1716951,0.264446 0.5333686,0.603061 0.79375,0.79375 0.2734399,0.200252 0.79375,0.264583 0.79375,0.264583 H 14.022917 c 0,0 0.48554,-0.02 0.79375,-0.264583 0.193903,-0.153872 0.673315,-0.584208 0.79375,-0.79375 0.13538,-0.235543 0.264582,-0.79375 0.264582,-0.79375 L 15.875,2.9104167 c 0,0 -0.10072,-0.5490662 -0.264583,-0.79375 -0.169065,-0.2523952 -0.531164,-0.6254437 -0.79375,-0.79375 -0.264544,-0.1695612 -0.79375,-0.2645834 -0.79375,-0.2645834 z"/>
                        <path style="fill: #FFF; stroke-width: 0.25" d="m 2.1166667,7.9375 v 5.291667 c 0,0 0.1159007,0.412212 0.2645833,0.661458 0.1142513,0.191527 0.4707795,0.545797 0.6614583,0.661458 0.260272,0.157875 0.6614584,0.264584 0.6614584,0.264584 h 9.5250003 c 0,0 0.415714,-0.09694 0.661458,-0.264584 0.2352,-0.160447 0.531915,-0.407921 0.661458,-0.661458 0.107631,-0.21065 0.264584,-0.661458 0.264584,-0.661458 V 7.9375 Z"/>
                    </svg>
                    <span class="navbar-title">Planning</span> 
                </router-link>
            </li>
            <li class="navbar-list-element">
                <router-link :to="{ name: 'chat' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <rect style="stroke-width:0" width="14.816667" height="10.583333" x="1.0583339" y="1.0583339" ry="1.5875" rx="1.5875" />
                        <path style="stroke-width:0" d="m 3.4395838,11.641667 v 4.233332 l 4.2333316,-4.233332 z" />
                        <circle style="fill:#ffffff; stroke-width:0" cx="4.7625003" cy="6.3499999" r="1.0583329" />
                        <circle style="fill:#ffffff; stroke-width:0" cx="8.4666662" cy="6.3499999" r="1.0583329" />
                        <circle style="fill:#ffffff;stroke-width:0" cx="12.170834" cy="6.3499999" r="1.0583329" />
                    </svg>       
                    <span class="navbar-title">Messages</span>  
                </router-link>  
            </li>
            <li v-if="!$store.state.connected" class="navbar-list-element">
                <router-link :to="{ name: 'log-sign' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <path style="stroke-width: 0" d="M 7.8739999,2.6867225 V 1.5399158 H 1.0583338 V 15.874999 H 15.874999 V 9.2808608 H 14.68967 V 14.728192 H 2.2436671 V 2.6867225 Z"/>
                        <path style="stroke-width: 0" d="M 7.2880941,8.1598033 9.5604403,10.090139 6.994939,10.748164 Z"/>
                        <rect style="stroke-width: 0" width="2.9815695" height="2.1628067" x="10.863997" y="-7.9616833" transform="matrix(0.76213115,0.64742267,-0.66086743,0.75050266,0,0)" />
                        <rect style="stroke-width: 0" width="2.9815695" height="6.4884219" x="10.863997" y="-5.3933496" transform="matrix(0.76213115,0.64742267,-0.66086743,0.75050266,0,0)" />
                    </svg>
                    <span class="navbar-title">Log/Sign</span> 
                </router-link>
            </li>
            <li v-if="$store.state.connected" class="navbar-list-element" @click="logOut">
                <router-link :to="{ name: 'log-out' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <path style="stroke-width: 0" d="M 14.684375,2.2489588 H 10.583333 V 1.0583338 H 15.875 V 15.875 h -5.291667 v -1.190625 h 4.101042 z"/>
                        <path style="stroke-width: 0" d="M 10.054167,7.8713547 7.4083343,5.0270838 8.3343753,4.2333338 12.303125,8.4666672 8.3343753,12.7 7.4083343,11.90625 10.054167,9.0619797 H 1.0583338 v -1.190625 z"/>
                    </svg> 
                    <span class="navbar-title">Log out</span> 
                </router-link>                   
            </li>
        </ul>

        <ul v-if="$store.state.userRole === 'contractor'" class="navbar-list">
            <li class="navbar-list-element">
                <router-link :to="{ name: 'account' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <ellipse style="fill: none; stroke-width: 2.5" cx="8.46667" cy="8.466671" rx="4.8201365" ry="4.820137"/>
                        <path style="stroke-width: 0" d="M 6.4948691,2.6921048 6.6920492,1.4248849 c 0,0 0.059032,-0.3307621 0.084507,-0.3520054 0.022203,-0.018515 0.2816857,-0.014081 0.2816857,-0.014081 h 2.8168573 c 0,0 0.2584578,-0.00229 0.2816858,0.014081 0.01527,0.010772 0.08451,0.3520054 0.08451,0.3520054 l 0.197183,1.267225 z"/>
                        <path style="stroke-width: 0" d="m 14.241236,6.4948675 1.267219,0.19718 c 0,0 0.330762,0.059032 0.352008,0.084506 0.01852,0.022203 0.01407,0.2816856 0.01407,0.2816856 v 2.8168581 c 0,0 0.0024,0.2584558 -0.01407,0.2816838 -0.01077,0.01527 -0.352008,0.08451 -0.352008,0.08451 l -1.267226,0.19718 z"/>
                        <path style="stroke-width: 0" d="M 2.6921001,10.438471 1.42488,10.241292 c 0,0 -0.3307622,-0.05902 -0.3520061,-0.0845 -0.018514,-0.02221 -0.014073,-0.2816872 -0.014073,-0.2816872 V 7.058248 c 0,0 -0.00233,-0.2584565 0.014073,-0.2816847 C 1.083649,6.7612863 1.42488,6.6920536 1.42488,6.6920536 L 2.6921054,6.4948675 Z"/>
                        <path style="stroke-width: 0" d="M 2.9196112,5.7222645 2.162991,4.6867782 c 0,0 -0.1921374,-0.2756275 -0.1891443,-0.308664 0.00261,-0.028795 0.1892269,-0.2091343 0.1892269,-0.2091343 L 4.1548569,2.1771647 c 0,0 0.1810973,-0.1844125 0.20913,-0.189229 0.018421,-0.00318 0.3086592,0.1891474 0.3086592,0.1891474 L 5.7081197,2.933719 Z"/>
                        <path style="stroke-width: 0" d="M 11.227193,2.9336953 12.26268,2.1770755 c 0,0 0.275627,-0.1921374 0.308663,-0.1891443 0.02881,0.00261 0.209134,0.189227 0.209134,0.189227 l 1.991818,1.9917821 c 0,0 0.184411,0.1810972 0.189229,0.2091301 0.0031,0.018421 -0.189148,0.3086588 -0.189148,0.3086588 l -0.756637,1.0354731 z"/>
                        <path style="stroke-width: 0" d="m 14.01373,11.21113 0.756621,1.035487 c 0,0 0.192137,0.275628 0.189143,0.308663 -0.0026,0.02881 -0.189227,0.209134 -0.189227,0.209134 l -1.991784,1.991816 c 0,0 -0.181097,0.184413 -0.20913,0.189229 -0.01841,0.0031 -0.30866,-0.189146 -0.30866,-0.189146 l -1.035472,-0.756637 z"/>
                        <path style="stroke-width: 0" d="m 5.7081824,13.999637 -1.0354873,0.75662 c 0,0 -0.2756276,0.192138 -0.3086634,0.189144 -0.028799,-0.0026 -0.2091345,-0.189227 -0.2091345,-0.189227 L 2.1630805,12.764391 c 0,0 -0.1844126,-0.181095 -0.1892292,-0.20913 -0.00319,-0.01841 0.1891471,-0.308656 0.1891471,-0.308656 L 2.9196355,11.21113 Z"/>
                        <path style="stroke-width: 0" d="m 10.438477,14.241228 -0.197179,1.26722 c 0,0 -0.05902,0.330762 -0.0845,0.352005 -0.0222,0.01853 -0.2816873,0.01408 -0.2816873,0.01408 H 7.058247 c 0,0 -0.2584583,0.0024 -0.2816864,-0.01408 -0.015277,-0.01077 -0.084511,-0.352005 -0.084511,-0.352005 L 6.4948701,14.241224 Z"/>
                    </svg>  
                    <span class="navbar-title">Account</span> 
                </router-link>
            </li>
        </ul>

        <ul v-if="$store.state.userRole === 'organiser'" class="navbar-list">
            <li class="navbar-list-element">
                <router-link :to="{ name: 'contractors-graph' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <rect style="fill:#000000;stroke:#ffffff;stroke-width:0;stroke-linecap:square;paint-order:fill markers stroke"
                        width="4.2333326"
                        height="11.641665"
                        x="11.641667"
                        y="4.2333341"
                        rx="1.3658662"
                        ry="0" />
                        <rect
                        style="fill:#000000;stroke:#ffffff;stroke-width:0;stroke-linecap:square;paint-order:fill markers stroke"
                        width="4.2333322"
                        height="14.816666"
                        x="6.3500004"
                        y="1.0583339"
                        rx="1.3658662"
                        ry="0" />
                        <rect
                        style="fill:#000000;stroke:#ffffff;stroke-width:0;stroke-linecap:square;paint-order:fill markers stroke"
                        id="rect111-6"
                        width="4.2333326"
                        height="7.4083323"
                        x="1.0583339"
                        y="8.4666672"
                        rx="1.3658662"
                        ry="0" />
                    </svg>

                    <span class="navbar-title">Graph</span> 
                </router-link>
            </li>
            <li class="navbar-list-element">
                <router-link :to="{ name: 'pending-contractors' }"> 
                    <svg width="64" height="64" viewBox="0 0 16.933333 16.933333">
                        <ellipse
                        style="fill:none;stroke:#000000;stroke-width:1.25543;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
                        cx="8.4666653"
                        cy="8.4666681"
                        rx="6.7806182"
                        ry="6.7806191" />
                        <rect
                        style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.321516;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
                        width="1.2319533"
                        height="6.2915621"
                        x="7.8093014"
                        y="3.3833561"
                        rx="0.47020963"
                        transform="matrix(0.99998463,-0.00554446,0.00635876,0.99997978,0,0)" />
                        <rect
                        style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.290044;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
                        width="1.2614243"
                        height="5.0004973"
                        x="-2.986757"
                        y="11.729722"
                        rx="0.48145804"
                        transform="matrix(0.59347849,-0.80484985,0.80715141,0.59034448,0,0)" />
                    </svg>

                    <span class="navbar-title">Pending</span> 
                </router-link>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    props: { extend: Boolean },
    data() {
        return {
            day: '',
            month: ''
        }
    },
    methods: {
      logOut() {
        this.$store.commit('logOut')
      }  
    },
    mounted() {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        this.day = new Date().getDate()
        this.month = monthNames[new Date().getMonth()]
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
        top: 0;
        left: 0;
        
    display: flex;
        flex-direction: column;
        justify-content: space-between;

    background-color: white;
    overflow-x: hidden;
    overflow-y: auto;

    padding-top: var(--header-height);

    width: var(--navbar-width);
    height: 100vh;
    transition: 0.75s;
    z-index: 4;
}
.navbar.extend {
    width: 225px;
} 

.navbar-list {
    display: flex;
        flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-list-element {
    position: relative;
    
    transition: 0.75s;
}
.navbar-list-element a {
    display: flex;
        align-items: center;
        gap: 10px;

    color: #000;
    cursor: pointer;
    padding: 12px 0;
    text-decoration: none;
}

.navbar-list-element a > svg {
    flex-shrink: 0;
    margin-left: 20px;
    transition: 0.75s;
    fill: black;
    stroke: black;
}




.navbar-list-element:hover a > svg {
    fill: var(--dark-grey);
    stroke: var(--dark-grey);
}


.navbar-list-element:hover a.planning::after {
    color: var(--dark-grey);
}

.navbar-list-element:hover a .navbar-title {
    color: var(--dark-grey);
}
.navbar-list-element a.router-link-exact-active {
    background: var(--app-color);
}
.navbar-title {
    font-size: 20px;
    margin-left: 15px;
    width: max-content;
    white-space: nowrap;
    transition: 0.75s;
}

.account-svg {
    cursor: pointer;
    padding: 15px;
}

a.planning::before {
    content: attr(data-month);
    color: white;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
        top: 20px;
    text-align: center;
    width: 103px;
}

a.planning::after {
    content: attr(data-day);
    position: absolute;
        top: 43px;
    text-align: center;
    color: black;
    font-size: 22px;
    font-weight: bold;
    width: 103px;
    transition: 0.75s;
}
</style>