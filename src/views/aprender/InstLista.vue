<template>
    <div>
        <h1 style="margin-top:-10vh;">Diversão e Aprendizado</h1>

        <svg class="fundo" style="bottom:-5vh;left:0vh" xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_126_34)">
                <path
                    d="M-63.5 516.5C133.333 506.833 527 377.8 527 -61M1421 -96.5C1347.33 96 1291.9 481 1659.5 481C2027.1 481 1812.67 950.667 1659.5 1185.5M257.5 1114C421.5 965.833 838.4 758.4 1194 1114"
                    stroke="white" stroke-width="40" />
            </g>
            <path d="M2130.97 -29.4999C1966.97 118.667 1550.07 326.1 1194.47 -29.5" stroke="white" />
            <path d="M-92 256.414C170 288.019 694 249.583 694 -157" stroke="white" />
            <path d="M893 1143C994.833 1028.5 1357.2 799.5 1992 799.5" stroke="white" />
            <defs>
                <filter id="filter0_d_126_34" x="-68.481" y="-103.648" width="1954.95" height="1308.07"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_34" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_34" result="shape" />
                </filter>
            </defs>
        </svg>

        <div class="menu">
            <span>
                <router-link to='/aprender/digitar' class="link"><img
                        src="@/assets/aprender/teclado.png" /><br />Digitar<br />confiante
                </router-link>
            </span>
            <span style="max-width: 29vh;">
                <router-link :to="{ path: '/aprender/mouse' }" class="link"><img
                        src="@/assets/aprender/mouse.png" /><br />Agilidade com o mouse
                </router-link>
            </span>
            <span>
                <router-link :to="{ path: '/aprender/lista' }" class="link"><img
                        src="@/assets/aprender/instrucoes.png" /><br /> Instruções<br />Básicas
                </router-link>
            </span>
        </div>


        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
        <router-link to="/aprender" class="quit" style="color: black;">
            <div class="material-symbols-outlined" style="font-size: 2em;">
                keyboard_double_arrow_left
            </div>
        </router-link>

        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,0" />
        <div class="material-symbols-rounded setas">
            keyboard_double_arrow_right
        </div>
    </div>

</template>

<script>
export default {
    name: 'Apr_Menu',
    methods: {},
    created() {        
        document.getElementById("geral").href = "../geral.css";
        document.getElementById("meucss").href = "../bckg/aprender.css"
    }
}

</script>

<style scoped>
.menu {
    margin: 0 auto;
    margin-top: 5%;
}

span {
    background-color: #002a9680;
    padding: 6vh 3vh;
}

span img {
    margin-top: 3vh;
    margin-bottom: 3vh;
}

.menu span:hover {
    background-color: #0041e4de;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
}

.setas {
    font-size: 5em !important;
    color: #002a9680;
}

.setas:hover {
    font-size: 8em !important;
    color: white;
    background-color: #0041e4de;
    top: 48vh;
}
</style>