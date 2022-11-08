<template>
    <div>
        <h1 style="margin-top:-10vh;">Navegar a Internet</h1>

        <svg class="fundo" style="height: 364px;left: -5vh;bottom:-10vh;width: 65%" width="1020" height="376"
            viewBox="0 0 1020 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Ellipse 1" style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_15_80)">
                <circle cx="510" cy="506" r="482" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_15_80" x="0" y="0" width="1020" height="1020" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="14" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_80" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_80" result="shape" />
                </filter>
            </defs>
        </svg>
        <svg class="fundo" style="right: -10vh;top:-20vh;width: 40%" xmlns="http://www.w3.org/2000/svg" width="839"
            height="871" viewBox="0 0 839 871" fill="none">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_54_341)">
                <circle cx="575" cy="292" r="547" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_54_341" x="0" y="-279" width="1150" height="1150" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="14" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_341" result="shape" />
                </filter>
            </defs>
        </svg>
        <svg class="fundo" style="left: -10vh;top:0vh;width: 40%" xmlns="http://www.w3.org/2000/svg" width="762"
            height="376" viewBox="0 0 762 376" fill="none">
            <g style="mix-blend-mode:soft-light" opacity="0.5" filter="url(#filter0_d_54_337)">
                <circle cx="252" cy="-138" r="482" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_54_337" x="-258" y="-644" width="1020" height="1020" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="14" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_337" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_337" result="shape" />
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

        <div class="menu">
            <p id="marginLeft">&#8205;</p>
            <span>
                <router-link to='/internet/pesq_imagens' class="link"><img
                        src="@/assets/internet/pimagem.png" /><br />Pesquisar por imagem
                </router-link>
            </span>
            <span>
                <router-link :to="{ path: '/internet/pesq_palavras' }" class="link"><img
                        src="@/assets/internet/ppalavra.png" /><br />Pesquisar por palavras
                </router-link>
            </span>
            <span>
                <router-link :to="{ path: '/internet/sites' }" class="link"><img
                        src="@/assets/internet/acessar.png" /><br />Acessar sites
                </router-link>
            </span>
            <p id="marginRight">&#8205;</p>
        </div>


        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,0" />
        <router-link to="/home" class="quit" style="color: black;">
            <div class="material-symbols-outlined" style="font-size: 2em;">
                home
            </div>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'Int_Menu',
    data() {
        return {
        }
    },
    methods: {
        increase(event) {
            if (event) {
                if (document.getElementById("marginRight").style.margin === "50%") {
                    document.getElementById("marginRight").style.margin = "0px";
                } else {
                    document.getElementById("marginLeft").style.margin = "50%";
                }
            }
        },
        diminish(event) {
            if (event) {
                if (document.getElementById("marginLeft").style.margin === "50%") {
                    document.getElementById("marginLeft").style.margin = "0px";
                } else {
                    document.getElementById("marginRight").style.margin = "50%";
                }
            }
        }
    },
    created() {
        document.getElementById("meucss").href = "./bckg/internet.css"
    }
}

</script>

<style scoped lang="scss">
span {
    background-color: #d26600ba;
    padding: 6vh 3vh;

    img {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
}

.menu {
    span {
        &:hover {
            background-color: #ff9d00ba;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
        }
    }
}

.setasright {
    font-size: 5em !important;
    color: #d26600ba;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #ff9d00ba;
        top: 48vh;
    }
}

.setasleft {
    font-size: 5em !important;
    color: #d26600ba;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #ff9d00ba;
        top: 48vh;
    }
}
</style>