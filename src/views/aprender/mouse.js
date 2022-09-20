var canvas = document.getElementById('trencherCanvas');
var canvasContext = canvas.getContext('2d');

var life = 10;
var tempo = 0;

var scalew = 100;
var scaleh = 100;

var pause = false;

var mousePos;

var imgs = [document.getElementById("tri"), document.getElementById("circ"), document.getElementById("quad"), document.getElementById("pent"), document.getElementById("estr")]

var formas = [{
    x: canvas.width / 2,
    y: canvas.height / 2,
    id: imgs[Math.floor(Math.random() * 5)],
    w: scalew,
    h: scaleh
}];

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

function calculateMousePosition(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return {
        x: mouseX,
        y: mouseY
    };
};

window.onload = function () {
    var fps = 60;
    setInterval(function () {
        if (!pause) {
            tempo += 1 / 60;
        }
        draw();
        if (life == 0) {
            pause = true;
        }
    }, 1000 / fps);

    canvas.addEventListener('mousemove',
        function (evt) {
            mousePos = calculateMousePosition(evt);
        });
    canvas.addEventListener('click',
        function (evt) {
            if (!pause) {
                if (mousePos.x > formas[0].x && mousePos.x < formas[0].x + formas[0].w && mousePos.y > formas[0].y && mousePos.y < formas[0].y + formas[0].h) {
                    life--;
                    formas.pop();
                    spawnImage();
                }
            } else {
                if (mousePos.x > canvas.width / 2 - 100 && mousePos.x < canvas.width / 2 + 100 && mousePos.y > canvas.height / 2 - 25 && mousePos.y < canvas.height / 2 + 25) {
                    reset();
                }
            }
        });
};

function reset() {
    life = 10
    tempo = 0
    pause = false;
}

function spawnImage() {
    var forma = {
        w: scalew,
        h: scaleh,
        x: Math.floor(Math.random() * (canvas.width - scaleh - 1)),
        y: Math.floor(Math.random() * (canvas.height - scaleh - 1)),
        id: imgs[Math.floor(Math.random() * 5)]
    };
    formas.push(forma);
}

function convertSecond(sec) {
    var minutes = Math.floor(sec / 60);
    var seconds = sec - minutes * 60;
    var milli = Math.floor((seconds - Math.floor(seconds)) * 100);

    if (Number(minutes) < 10) {
        minutes = "0" + minutes;
    }
    if (Number(Math.floor(seconds)) < 10) {
        seconds = "0" + Math.floor(seconds);
    } else {
        seconds = Math.floor(seconds);
    }
    if (Number(milli) < 10) {
        milli = "0" + milli;
    }
    return {
        s: seconds,
        m: minutes,
        ms: milli
    }

}

function draw() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    if (!pause) {
        canvasContext.drawImage(formas[0].id, formas[0].x, formas[0].y, formas[0].w, formas[0].h);
    } else {
        drawing.rectWithColor(canvas.width / 2, canvas.height / 2 - 25, 200, 50, "red");
        drawing.text("20px Arial", "Tente Novamente", canvas.width / 2 + 25, canvas.height / 2, "black");
        drawing.text("30px Arial", convertSecond(tempo).m + ":" + convertSecond(tempo).s + ":" + convertSecond(tempo).ms + "", 100, 100, "blue");
    }
};