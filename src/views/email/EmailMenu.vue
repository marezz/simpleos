<template>
    <div>
        <h1 style="margin-top:-10vh;">Acessar Email</h1>

        <svg class="fundo" style="bottom:10vh;left:5vh;height: 40%;" xmlns="http://www.w3.org/2000/svg" width="420"
            height="451" viewBox="0 0 420 451" fill="none">
            <g style="mix-blend-mode:hard-light" opacity="0.5">
                <path
                    d="M335.173 60.8719C371.172 98.5414 399.021 138.587 411.926 185.08C424.831 231.572 422.454 284.513 403.436 337.454C384.078 390.056 348.078 442.657 303.249 450.123C258.08 457.25 204.421 419.241 146.347 396.843C87.9334 374.106 25.4442 366.64 6.42578 334.4C-12.253 301.821 12.5388 243.79 45.4815 210.193C78.7638 176.935 120.197 167.433 149.064 128.406C177.931 89.3786 194.233 20.4875 224.459 4.19802C254.684 -12.4309 298.834 23.2024 335.173 60.8719Z"
                    fill="white" />
            </g>
        </svg>
        <svg class="fundo" style="bottom:-30vh; right: 10vh;" xmlns="http://www.w3.org/2000/svg" width="420"
            height="451" viewBox="0 0 420 451" fill="none">
            <g style="mix-blend-mode:hard-light" opacity="0.5">
                <path
                    d="M335.173 60.8719C371.172 98.5414 399.021 138.587 411.926 185.08C424.831 231.572 422.454 284.513 403.436 337.454C384.078 390.056 348.078 442.657 303.249 450.123C258.08 457.25 204.421 419.241 146.347 396.843C87.9334 374.106 25.4442 366.64 6.42578 334.4C-12.253 301.821 12.5388 243.79 45.4815 210.193C78.7638 176.935 120.197 167.433 149.064 128.406C177.931 89.3786 194.233 20.4875 224.459 4.19802C254.684 -12.4309 298.834 23.2024 335.173 60.8719Z"
                    fill="white" />
            </g>
        </svg>
        <svg class="fundo" style="top:-10vh;left:30vh;" xmlns="http://www.w3.org/2000/svg" width="450" height="364"
            viewBox="0 0 450 364" fill="none">
            <path opacity="0.5"
                d="M198.935 359.94C160.042 343.253 134.839 273.349 96.0443 207.23C57.1111 140.709 4.78044 77.4573 0.755829 18.2191C-3.0742 -41.5353 41.2636 -97.6775 92.6082 -143.211C143.62 -188.629 201.306 -223.324 263.148 -222.178C325.184 -221.548 391.515 -184.676 423.052 -127.732C454.589 -70.7879 451.138 6.74377 446.092 67.7599C441.047 128.776 434.546 173.678 416.654 210.379C398.957 246.565 370.007 274.952 329.406 307.353C289.139 339.639 237.358 376.341 198.935 359.94Z"
                fill="white" />
        </svg>
        <svg class="fundo" style="top:5vh;right:30vh; height: 80%;" xmlns="http://www.w3.org/2000/svg" width="718"
            height="713" viewBox="0 0 718 713" fill="none">
            <g style="mix-blend-mode:hard-light" opacity="0.5">
                <path
                    d="M15.0264 521.458C58.8641 450.445 201.616 409.175 267.897 348.722C333.835 288.676 322.616 210.261 363.132 135.752C403.712 61.9928 496.027 -7.86049 575.418 1.24689C655.56 10.2903 723.593 98.981 716.841 183.841C710.84 268.637 630.806 349.538 608.231 434.991C585.655 520.444 620.883 610.041 597.885 637.324C574.137 664.671 492.507 629.298 397.087 644.99C301.668 660.682 193.145 726.625 110.799 709.455C28.1094 692.691 -28.0608 592.407 15.0264 521.458Z"
                    fill="white" />
            </g>
        </svg>

        <div class="menu">
            <p id="marginLeft">&#8205;</p>
            <span>
                <router-link to='/email/escrever' class="link"><img src="@/assets/email/escrever.png" /><br />Escrever
                    email
                </router-link>
            </span>
            <span>
                <router-link :to="{ path: '/email/ler' }" class="link"><img src="@/assets/email/ler.png" /><br />Ler
                    emails
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
    name: 'Email_Menu',
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
        document.getElementById("meucss").href = "./bckg/email.css"
    }
}

</script>

<style scoped lang="scss">
span {
    background-color: #d53d3db4;
    padding: 8vh 4vh;

    img {
        height: 40%;
    }
}

.menu {
    span {
        &:hover {
            background-color: #de2222;
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
        }
    }
}

.setasright {
    font-size: 5em !important;
    color: #d53d3db4;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #de2222;
        top: 48vh;
    }
}

.setasleft {
    font-size: 5em !important;
    color: #d53d3db4;

    &:hover {
        font-size: 8em !important;
        color: white;
        background-color: #de2222;
        top: 48vh;
    }
}
</style>