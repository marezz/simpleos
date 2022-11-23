<template>
    <div>
        <h1 style="margin-top:-10vh;">Escrever email</h1>

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

        <section class="menu">
            <div style="padding: 2vh;padding-left:3vh;text-align: left;">
                <form ref="form" @submit.prevent="EnviarEmail">
                    <h3>Para: <input type="email" name="to_email" id="email_id" placeholder="nome@email.com" required style="min-width: 64.5vw;" /></h3>
                    <h3>Título: <input type="text" name="subject" id="titulo_id" placeholder="Título" required/></h3>
                    <textarea id="mensagem_id" name="message" style="text-align: left;" required></textarea>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
                    <button class="button" type="submit" value="Enviar"><span class="material-symbols-outlined" style="background:none;margin:0;padding: 0;font-size: 4em;color: white;">
                            send
                    </span></button>
                </form>

            </div>
        </section>


        <router-link to="/email" class="quit" style="color: black;">
            <div class="material-symbols-outlined" style="font-size: 2em; font-weight: bold;">
                keyboard_double_arrow_left
            </div>
        </router-link>
    </div>

</template>

<script>
import emailjs from '@emailjs/browser';
//import * as email from './index.js';

export default {
    name: 'Email_Esc',
    methods: {
            EnviarEmail(){
                var templateParams = {
                    to_email: document.getElementById("email_id").value,
                    subject: document.getElementById("titulo_id").value,
                    message: document.getElementById("mensagem_id").value
                }

                emailjs.send('service_gmail', 'template_gmail', templateParams, 'SZ_HWbptxW2qQ7KVp')
                    .then((result) => {
                        alert("Seu e-mail foi enviado com sucesso!");
                        console.log('SUCCESS!', result.text);
                        window.location.reload();
                    }, (error) => {
                        alert("Ocorreu um erro, tente novamente.")
                        console.log('FAILED...', error.text);
                    });  
            },
            TesteMail(){
                email.authorize().then(email.listLabels()).catch(console.error);
            }
    },
    created() {
        document.getElementById("geral").href = "../geral.css";
        document.getElementById("meucss").href = "../bckg/email.css";
    }
}

</script>

<style scoped lang="scss">
.menu {
	background-color: #d53d3db4;
	border-radius: 20px;
	min-width: 70vw;
	min-height: 80vh;
	display: block;
	margin-top: -1vh;
}
input {
	font-size: calc(var(--tamanhofonte)*0.75);
	text-align: left;
	position: relative;
	padding-left: 1vw;
	border: 0;
	outline: none;
	margin: 0 auto;
	border-radius: 50px;
	min-width: 63.75vw;
	min-height: 4vh;
}
h3 {
	margin: 1vh;
	font-size: var(--tamanhofonte);
}
textarea {
	padding: 1%;
	font-size: var(--tamanhofonte);
	text-align: center;
	position: relative;
	border: 0;
	outline: none;
	margin: 0 auto;
	border-radius: 20px;
	min-width: 68vw;
	min-height: 60vh;
}
button {
	padding: 1%;
	position: absolute;
	z-index: 2;
	bottom: 1vh;
	right: 12vw;
	background-color: #d53d3d;
	border: none;
	border-radius: 100px;
	&:hover {
		background-color: #970d0d;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
	}
}

</style>