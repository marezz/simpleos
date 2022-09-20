var canvas = document.getElementById('trencherCanvas');
var canvasContext = canvas.getContext('2d');

var teclado = {
    x: 0,
    y: 0,
    h: 349.772,
    w: 1052.532,
    img: document.getElementById("tec"),
    counter: 0,
}

var especial = {
    img: document.getElementById("especial"),
    x: 2,
    y: 211.47,
    w: 1052.532,
    h: 67.814,
    check: false,
    capsOn: false
}

var pals = ["Guia", "COMPUTADOR", "feijao"];

var palavras = [{
    _self: pals[Math.floor(Math.random() * pals.length)],
}];

var palavra_copia = ''

var letra;

var drawing = {
    rectWithColor: function (rectX, rectY, rectW, rectH, rectColor) {
        canvasContext.fillStyle = rectColor;
        canvasContext.fillRect(rectX, rectY, rectW, rectH);
    },
    strokeWithColor: function (x1, y1, x2, y2, color) { //or (x1,y1,x2,y2,width,color)
        canvasContext.strokeStyle = color;
        //canvasContext.lineWidth = width;
        canvasContext.moveTo(x1, y1);
        canvasContext.lineTo(x2, y2);
        canvasContext.stroke();
    },
    circleWithColor: function (centerX, centerY, radius, color) {
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        canvasContext.fill();
    },
    text: function (font, msg, x, y, color) {
        canvasContext.fillStyle = color;
        canvasContext.font = font;
        canvasContext.fillText(msg, x, y);
    }
};

window.onload = function () {
    var fps = 60;
    setInterval(function () {
        draw();
        especialControll();
    }, 1000 / fps);

    document.addEventListener('keyup', function (event) {
        especial.capsOn = event.getModifierState('CapsLock');
        console.log(especial.capsOn)
        letra = palavras[0]._self.charAt(teclado.counter);
        if (letra != letra.toUpperCase() && event.key == letra) {
            palavra_copia += letra;
            teclado.counter++;
        }
        else if (letra == letra.toUpperCase()) {
            if (event.key == letra) {
                palavra_copia += letra;
                teclado.counter++;
                especial.check = false;
            }
        }
        if (teclado.counter == palavras[0]._self.length) {
            teclado.counter = 0;
            palavra_copia = ''
            palavras.pop();
            insertNewWord();
            color_letter = []
            for (let i = 0; i < palavras[0]._self.length; i++) {
                color_letter.push("white")
            }
        }
    });
}

function especialControll() {
    if (palavras[0]._self.charAt(teclado.counter) == palavras[0]._self.charAt(teclado.counter).toUpperCase()) {
        especial.check = true;
        if (palavras[0]._self.toUpperCase() == palavras[0]._self) {
            especial.w = 112.428;
            especial.h = 67.814;
            especial.y = 140.98;
            especial.img.src = "assets/fixa.png";
            if (especial.capsOn) {
                especial.check = false;
            }
        } else {
            especial.y = 211.47;
            especial.w = 1052.532;
            especial.h = 67.814;
            especial.img.src = "assets/shift.png";
        }
    }
}

function insertNewWord() {
    var palavra = {
        _self: pals[Math.floor(Math.random() * pals.length)],
    };
    palavras.push(palavra);
}

function draw() {
    letra = palavras[0]._self.charAt(teclado.counter);
    drawing.rectWithColor(0, 0, canvas.width, canvas.height, "black");
    //canvasContext.clearRect(0,0,canvas.width,canvas.height);
    teclado.img.src = "assets/tec_" + letra.toLowerCase() + ".png";
    canvasContext.drawImage(teclado.img, teclado.x, teclado.y, teclado.w, teclado.h);
    if (especial.check) {
        canvasContext.drawImage(especial.img, especial.x, especial.y, especial.w, especial.h);
    }

    drawing.text("20px Arial", palavras[0]._self, 10, teclado.h + 100, "white");
    drawing.text("20px Arial", palavra_copia, 10, teclado.h + 100, "yellow");

};