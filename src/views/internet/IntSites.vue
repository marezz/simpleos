<template>
    <div>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,0" />
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

        <dialog>
            <h2>Adicionar site</h2>
            <form @submit.prevent="newIcon($event)">
                <input type="url" v-model="form.url"/>
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
                <button type="submit" class="material-symbols-outlined" style="margin: 10px; font-size: 2em; font-weight: bold;">
                    done
                </button>
            </form>
        </dialog>

        <section class="menu">
            <br />
            <ul>
                <template v-for="block in blocks" :key="block">
                    <a v-bind:href="block.link" target="_blank" class="link">
                        <li>
                            <img v-bind:src="block.icon" style="width:64px"/>
                        </li>
                    </a>
                </template>
                <span id="add" class="material-symbols-rounded add">
                    add_box
                </span>
            </ul>
        </section>

        <router-link to="/internet" class="quit" style="color: black;">
            <div class="material-symbols-outlined" style="font-size: 2em;position: relative;top:0vh;">
                keyboard_double_arrow_left
            </div>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'IntSites',
    data(){
        return{
            blocks: [
                {link:"https://google.com",icon:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-70.png"},
                {link:"https://fb.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/facebook-icon_64x64.png"},
                {link:"https://instagram.com",icon:"https://cdn-icons-png.flaticon.com/64/2111/2111463.png"},
                {link:"https://twitter.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/twitter-icon_64x64.png"},
                {link:"https://web.whatsapp.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/whatsapp_64.png"},
                {link:"https://tiktok.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/TikTok_logo_64.png"},
                {link:"https://itau.com.br",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banco_Ita%C3%BA_logo.svg/1011px-Banco_Ita%C3%BA_logo.svg.png"},
                {link:"https://linkedin.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/linkedin-icon_64x64.png"},
                {link:"https://youtube.com",icon:"https://cdn.exclaimer.com/Handbook%20Images/youtube-icon_64x64.png"},
                {link:"https://open.spotify.com",icon:"https://cdn-icons-png.flaticon.com/64/6124/6124990.png"},
                {link:"https://acesso.gov.br",icon:"https://www.gov.br/pt-br/apps/app-gov.br/@@images/imagem/mini"}],
            form:{
                url:''
            }
        }
    },
    methods: {
        newIcon(e){
            e.preventDefault()
            var addIcon = "https://s2.googleusercontent.com/s2/favicons?domain="+this.form.url
            this.blocks.push({link:this.form.url,icon:addIcon})
            document.querySelector("dialog").close()
        }
    },
    mounted() {
        document.getElementById("add").onclick = function(){
            document.querySelector("dialog").showModal()
        }
    },
    created() {
        document.getElementById("geral").href = "../geral.css";
        document.getElementById("meucss").href = "../bckg/internet.css";
    }
}

</script>

<style scoped lang="scss">
.menu {
    background-color: #d26600ba;
    border-radius: 20px;
    min-width: 70vw;
    min-height: 80vh;
    display: block;
    margin-top: 0vh;
}

input {
    font-size: var(--tamanhofonte);
    text-align: center;
    position: relative;
    border: 0;
    outline: none;
    margin: 2vh;
    width: 80%;
}

ul {
    position: relative;
    margin: 5vh;
    margin-top: 3vh;
    left: -2vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 5%;
    row-gap: 5vh;
    min-width: 50vw;
}

li {
    list-style-type: none;
    min-height: 8vh;
    min-width: 12vh;
    padding: 5vh;
    background-color: white;
    border-radius: 20px;
}

li img {
    margin: 0 auto;
    border: 0;
}

li:hover {
    background-color: rgba(180, 180, 180, 0.812);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
}

.add {
    background: transparent;
    font-size: calc(var(--tamanhofonte)*4);
    margin-top: 4vh;
    margin-left: 8vh;
    width: 80px;
    height: 80px;
    padding: 0;
    cursor: pointer;
}

.add:hover {
    color: rgba(180, 180, 180, 0.812);
}

button {
    border: none;
    background: transparent;
    position: relative;
    bottom: -1vh;
    border-radius: 10px;
}

button:hover {
    background-color: rgba(180, 180, 180, 0.812);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
}

dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
}

dialog {
    border: none;
    border-radius: .5rem;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, rgba(215, 143, 4, 0.35) 0%, rgba(244, 192, 6, 0.48) 100%);
}

dialog div:hover {
    cursor: pointer;
}
</style>
