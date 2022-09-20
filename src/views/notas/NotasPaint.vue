<script>
import VueDrawingCanvas from "vue-drawing-canvas";

export default {
  name: "ServeDev",
  components: {
    VueDrawingCanvas,
  },
  data() {
    return {
      initialImage: [
        {
          type: "dash",
          from: {
            x: 10000000000,
            y: 154,
          },
          coordinates: [],
          color: "#000000",
          width: 5,
          fill: false,
        },
      ],
      x: 0,
      y: 0,
      image: "",
      eraser: false,
      disabled: false,
      fillShape: false,
      line: 5,
      color: "#000000",
      strokeType: "dash",
      lineCap: "round",
      lineJoin: "round",
      backgroundColor: "#FFFFFF",
      backgroundImage: null,
      watermark: null,
      additionalImages: [],
    };
  },
  mounted() {
    if ("vue-drawing-canvas" in window.localStorage) {
      this.initialImage = JSON.parse(
        window.localStorage.getItem("vue-drawing-canvas")
      );
    }
  },
  methods: {
    async setImage(event) {
      let URL = window.URL;
      this.backgroundImage = URL.createObjectURL(event.target.files[0]);
      await this.$refs.VueCanvasDrawing.redraw();
    },
    async setWatermarkImage(event) {
      let URL = window.URL;
      this.watermark = {
        type: "Image",
        source: URL.createObjectURL(event.target.files[0]),
        x: 0,
        y: 0,
        imageStyle: {
          width: 600,
          height: 400,
        },
      };
      await this.$refs.VueCanvasDrawing.redraw();
    },
    getCoordinate(event) {
      let coordinates = this.$refs.VueCanvasDrawing.getCoordinates(event);
      this.x = coordinates.x;
      this.y = coordinates.y;
    },
    getStrokes() {
      window.localStorage.setItem(
        "vue-drawing-canvas",
        JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
      );
      alert(
        "Strokes saved, reload your browser to see the canvas with previously saved image"
      );
    },
    removeSavedStrokes() {
      window.localStorage.removeItem("vue-drawing-canvas");
      alert("Strokes cleared from local storage");
    },
  },
  created() {
    document.getElementById("geral").href = "../geral.css";
    document.getElementById("meucss").href = "../bckg/notas.css";
  },
};
</script>

<template>
  <h1 style="margin: -10vh auto 2vh auto">Faça um desenho</h1>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />

  <svg class="fundo" style="top: 5vh; left: 5vh" xmlns="http://www.w3.org/2000/svg" width="214" height="222"
    viewBox="0 0 214 222" fill="none">
    <g style="mix-blend-mode: soft-light" opacity="0.5" filter="url(#filter0_d_51_198)">
      <path
        d="M115.191 4.28972C123.527 -3.62666 137.305 0.391986 140.077 11.5488L153.386 65.0992L201.888 91.4117C211.993 96.8936 212.429 111.238 202.675 117.323L155.858 146.529L145.821 200.788C143.73 212.092 130.222 216.939 121.421 209.543L79.1778 174.043L24.4728 181.264C13.0755 182.769 4.29166 171.419 8.60619 160.764L29.3151 109.617L5.54227 59.8216C0.589399 49.447 8.66873 37.586 20.1363 38.3965L75.1786 42.2868L115.191 4.28972Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_51_198" x="0.0561523" y="0.15625" width="213.68" height="220.917"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_198" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_198" result="shape" />
      </filter>
    </defs>
  </svg>

  <svg class="fundo" style="bottom: 5vh; left: 10vh" xmlns="http://www.w3.org/2000/svg" width="141" height="142"
    viewBox="0 0 141 142" fill="none">
    <g style="mix-blend-mode: soft-light" opacity="0.5" filter="url(#filter0_d_51_200)">
      <path
        d="M37.6555 13.5205C39.0132 2.1047 52.1805 -3.60325 61.4402 3.20992L84.3923 20.0976L112.343 14.554C123.62 12.3176 133.117 23.0766 129.499 33.9885L120.531 61.0358L134.44 85.9057C140.052 95.9392 132.754 108.297 121.258 108.227L92.7634 108.056L73.4089 128.97C65.6006 137.407 51.5929 134.286 48.1063 123.331L39.464 96.1778L13.5928 84.2334C3.15525 79.4146 1.79558 65.1278 11.1367 58.4266L34.2904 41.8165L37.6555 13.5205Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_51_200" x="0.878906" y="0.27417" width="139.492" height="141.514"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_200" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_200" result="shape" />
      </filter>
    </defs>
  </svg>

  <svg class="fundo" style="top: 20vh; right: 25vh" xmlns="http://www.w3.org/2000/svg" width="112" height="116"
    viewBox="0 0 112 116" fill="none">
    <g style="mix-blend-mode: soft-light" opacity="0.5" filter="url(#filter0_d_51_201)">
      <path
        d="M91.1615 15.6292C102.607 14.5463 110.966 26.2119 106.261 36.7013L98.3089 54.4295L106.027 72.2606C110.594 82.8109 102.082 94.3657 90.652 93.1324L71.3343 91.0482L56.7609 103.899C48.1381 111.502 34.5187 106.977 32.1595 95.7259L28.1723 76.7096L11.4474 66.8204C1.55161 60.9692 1.64595 46.6182 11.6178 40.8976L28.4712 31.2292L32.7081 12.2669C35.215 1.04739 48.8928 -3.29759 57.4148 4.41842L71.8181 17.4593L91.1615 15.6292Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_51_201" x="0.0820312" y="0.526123" width="111.515" height="115.134"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_201" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_201" result="shape" />
      </filter>
    </defs>
  </svg>

  <svg class="fundo" style="top: 8vh; right: 35vh" xmlns="http://www.w3.org/2000/svg" width="159" height="163"
    viewBox="0 0 159 163" fill="none">
    <g style="mix-blend-mode: soft-light" opacity="0.5" filter="url(#filter0_d_51_202)">
      <path
        d="M87.8513 3.75597C96.7666 -3.49461 110.189 1.56153 112.106 12.8921L118 47.7494L147.697 66.9238C157.358 73.1618 156.695 87.504 146.5 92.8239L115.183 109.164L106.127 143.309C103.18 154.42 89.3445 158.223 81.1324 150.18L55.8657 125.433L20.5514 127.36C9.07369 127.987 1.18566 116.001 6.3014 105.707L22.023 74.0729L9.26962 41.132C5.11759 30.4076 14.0815 19.1922 25.4573 20.8784L60.4244 26.0616L87.8513 3.75597Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_51_202" x="0.711426" y="0.378418" width="157.85" height="162.095"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_202" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_202" result="shape" />
      </filter>
    </defs>
  </svg>

  <svg class="fundo" style="bottom: -2vh; right: -2vh" xmlns="http://www.w3.org/2000/svg" width="665" height="370"
    viewBox="0 0 665 370" fill="none">
    <g style="mix-blend-mode: soft-light" opacity="0.5" filter="url(#filter0_d_51_203)">
      <path
        d="M527.212 15.9972C539.169 -4.53473 568.831 -4.53471 580.788 15.9972L745.374 298.603L1091.83 373.635C1103.07 376.068 1107.5 389.716 1099.84 398.289L863.65 662.656L899.359 1015.38C900.517 1026.81 888.906 1035.25 878.386 1030.61L554 887.653L229.614 1030.61C219.094 1035.25 207.483 1026.81 208.641 1015.38L244.35 662.656L8.15686 398.289C0.497802 389.716 4.93254 376.068 16.1678 373.635L362.626 298.603L527.212 15.9972Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_51_203" x="0.330566" y="0.598145" width="1107.34" height="1039.31"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_203" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_203" result="shape" />
      </filter>
    </defs>
  </svg>

  <div id="app" style="padding: 0%;">
    <div class="flex-row" style="padding: 0%;">
      <div class="source" style="padding: 0%;">
        <vue-drawing-canvas class="canvas" ref="VueCanvasDrawing" v-model:image="image" :width="1200" :height="600"
          :stroke-type="strokeType" :line-cap="lineCap" :line-join="lineJoin" :fill-shape="fillShape" :eraser="eraser"
          :lineWidth="line" :color="color" :background-color="backgroundColor" :background-image="backgroundImage"
          :watermark="watermark" :initial-image="initialImage" saveAs="png" :styles="{
            'border': 'solid 0px #000',
            'border-radius': '50px',
            'box-shadow': '0px 0px 25px rgba(0, 0, 0, 0.25)',
          }" :lock="disabled" @mousemove="getCoordinate($event)" :additional-images="additionalImages" />
        <br />
        <div class="button-container">
          <input type="color" v-model="color" />
          <button type="button" @click.prevent="$refs.VueCanvasDrawing.undo()">
            Desfazer
          </button>
          <button type="button" @click.prevent="$refs.VueCanvasDrawing.redo()">
            Refazer
          </button>
          <button type="button" @click.prevent="$refs.VueCanvasDrawing.reset()">
            Resetar
          </button>
        </div>
      </div>
    </div>
    <router-link to="/notas" class="quit" style="color: black">
      <div class="material-symbols-outlined" style="font-size: 2em; font-weight: bold">
        keyboard_double_arrow_left
      </div>
    </router-link>
  </div>
</template>

<style scoped lang='scss'>
.flex-row {
  display: flex;
  flex-direction: row;
}

.button-container {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.button-container>* {
  margin: 1%;
  font-size: calc(var(--tamanhofonte)*0.75);
  z-index: 2;
  background-color: #08352880;
  border: none;
  border-radius: 10px;
  color: white;
  height: 4vh;

  &:hover {
    background-color: #4dbb4d;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
  }
}

input[type=color]::-webkit-color-swatch {
  border-radius: 10px;
}

.source {
  margin: 0 auto !important;
}

.canvas {
  cursor: url('brush.png'), auto;
}
</style>