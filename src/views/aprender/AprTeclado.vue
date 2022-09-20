<template>
    <div>
        <h1 style="margin-top:-10vh;">Digitar Confiante</h1>

        <svg class="fundo" style="top:0vh; right: 2vw" width="544" height="1080" viewBox="0 0 544 1080" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_329_3)">
                <path d="M78.0002 -96.5C4.33351 96 -51.0998 481 316.5 481C684.1 481 469.667 950.667 316.5 1185.5"
                    stroke="white" stroke-width="40" />
            </g>
            <defs>
                <filter id="filter0_d_329_3" x="0.124512" y="-103.648" width="543.345" height="1308.07"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_329_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_329_3" result="shape" />
                </filter>
            </defs>
        </svg>

        <svg class="fundo" style="top:-3vh; left:-3vw" width="551" height="545" viewBox="0 0 551 545" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_54_316)">
                <path d="M-63.5 516.5C133.333 506.833 527 377.8 527 -61" stroke="white" stroke-width="40" />
            </g>
            <defs>
                <filter id="filter0_d_54_316" x="-68.481" y="-61" width="619.481" height="605.476"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_316" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_316" result="shape" />
                </filter>
            </defs>
        </svg>

        <svg class="fundo" style="top:-3vh;right:-3vw" width="726" height="168" viewBox="0 0 726 168" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M936.971 -29.4999C772.971 118.667 356.071 326.1 0.47072 -29.5" stroke="white" />
        </svg>

        <svg class="fundo" style="top:-3vh;left:-3vw" width="695" height="266" viewBox="0 0 695 266" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M-92 256.414C170 288.019 694 249.583 694 -157" stroke="white" />
        </svg>

        <svg class="fundo" style="bottom:-3vh;right:0vw" width="1028" height="281" viewBox="0 0 1028 281" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 344C102.833 229.5 465.2 0.5 1100 0.5" stroke="white" />
        </svg>

        <svg class="fundo" style="bottom:-3vh;left:5vw" width="973" height="183" viewBox="0 0 973 183" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_329_4)">
                <path d="M17.5 217C181.5 68.8334 598.4 -138.6 954 217" stroke="white" stroke-width="40" />
            </g>
            <defs>
                <filter id="filter0_d_329_4" x="0.0922852" y="0.65918" width="972.05" height="239.181"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_329_4" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_329_4" result="shape" />
                </filter>
            </defs>
        </svg>


        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,0" />
        <div @click="diminish($event)" class="material-symbols-rounded setasright">
            keyboard_double_arrow_right
        </div>
        <div @click="increase($event)" class="material-symbols-rounded setasleft">
            keyboard_double_arrow_left
        </div>

        <img id="especial" src="assets/shift.png" style="display: none;">
        <img id="tec" src="assets/tec.png" style="display: none;">


        <canvas height="500" id="trencherCanvas" width="1200"></canvas>


        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
        <router-link to="/aprender" class="quit" style="color: black;">
            <div class="material-symbols-outlined" style="font-size: 2em;">
                keyboard_double_arrow_left
            </div>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'Apr_Teclado',
    data() {
        return {
        }
    },
    mounted() {
        let script = document.createElement('script')
        script.setAttribute('src', 'teclado.js')
        document.head.appendChild(script)
    },
    created() {
        document.getElementById("geral").href = "../geral.css";
        document.getElementById("meucss").href = "../bckg/aprender.css";
    }
}

</script>

<style scoped lang="scss">
.menu {
    margin: 0 auto;
    margin-top: 5%;

    span {
        &:hover {
            background-color: #0041e4de;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
        }
    }
}

span {
    all: initial;
    color: white;
    font-family: 'Advent Pro', sans-serif;

    * {
        all: unset;
    }
}

.setasright {
    font-size: 5em !important;
    color: #002a9680;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #0041e4de;
        top: 48vh;
    }
}

.setasleft {
    font-size: 5em !important;
    color: #002a9680;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #0041e4de;
        top: 48vh;
    }
}

/******************************************************/

.keyboard {
    text-align: center;
    font-size: 14px;
    font-family: sans-serif;
    display: block;
}

.keyboard__row {
    display: inline-block;
    height: 3em;
    margin: 0.2em;
}

.keyboard__row--h1 {
    height: 1.7em;
    line-height: 1.4em;
}

.keyboard__row--h3 {
    height: 3.3em;
}

.keyboard__row>* {
    position: relative;
    background: #333;
    text-align: center;
    color: #eee;
    float: left;
    border-radius: 0.3em;
    margin: 0.2em;
    padding: 0.2em;
    width: 3.3em;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    border: 1px solid #444;
    box-shadow: 0 0.2em 0 0.05em #222;
    border-bottom-color: #555;
}

.keyboard__row--h1>div {
    width: 3.5em;
}

.keyboard__row>div[data-pressed],
.keyboard__row>div:active {
    background: #2a2a2a;
    color: #aaa;
    position: relative;
    top: 0.2em;
    box-shadow: 0 0 0 0.05em black;
}

.key--w3 {
    width: 4.6em;
}

.key--w4 {
    width: 6em;
}

.key--w5 {
    width: 6.5em;
}

.key--w6 {
    width: 8.3em;
}

.key--space {
    width: 18em;
}

.key--double>* {
    padding-top: 0.1em;
}

.key--letter {
    line-height: 2.8em;
}

.key--bottom-left>* {
    position: absolute;
    text-align: left;
    bottom: 0.4em;
    left: 0.4em;
}

.key--bottom-right>* {
    position: absolute;
    text-align: right;
    bottom: 0.4em;
    right: 0.4em;
}

.key--fn>* {
    font-size: 0.6em;
    line-height: 1em;
    padding-top: 1.2em;
    padding-right: 0.2em;
    text-align: right;
    float: right;
}

.key--word>* {
    font-size: 0.8em;
}

.key--arrow--tall>*,
.key--arrow>* {
    font-size: 0.5em;
    line-height: 3em;
}

.key--arrow {
    height: 1.8em;
    margin-top: 1.7em;
    line-height: 0.5em;
}

.key--arrow--tall>* {
    padding-top: 0.2em;
}

.keyboard>.keyboard__row {
    text-align: center;
}
</style>