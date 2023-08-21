let circle;
let start;
let width;
let growthAmount;
let growRate;
let numberCircles;
let timeInterval;
let currentCircle = 1;

$(document).ready(function() {
    console.log("Ready!");
    circle = document.getElementById('circle');
    circle.remove();
    clearInterval(timeInterval);
    document.body.appendChild(circle);
    circle.addEventListener("click", function() {
        circle.remove();
        clearInterval(timeInterval);
    });
    start = document.getElementById('start');
    width = document.getElementById('width');
    growthAmount = document.getElementById('growthAmount');
    growRate = document.getElementById('growRate');
    numberCircles = document.getElementById('numberCircles');
})

function onStart() {
    console.log("Start!");
    circle.remove();
    clearInterval(timeInterval);
    onRestart();

    timeInterval = setInterval(() => {
        newFrame(circle);
    }, parseInt(growRate.value));

    newCircle();
}

function onRestart() {
    document.body.appendChild(circle);
    circle.style.width = `${width.value}px`;
    circle.style.height = `${width.value}px`;
}

function newFrame(ofCircle) {
    var circleFrame = ofCircle.clientWidth;
    ofCircle.style.width = `${(parseInt(circleFrame) + parseInt(growthAmount.value))}px`;
    ofCircle.style.height = `${(parseInt(circleFrame) + parseInt(growthAmount.value))}px`;
}

function newCircle() {
    for (let i = 1; i < parseInt(numberCircles.value); i++) {
        if (currentCircle != parseInt(numberCircles.value)) {
            const newCircle = circle.cloneNode(true);
            newCircle.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
            newCircle.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

            document.body.appendChild(newCircle);
            currentCircle++;

            const newTimeInterval = setInterval(() => {
                newFrame(newCircle);
            }, parseInt(growRate.value));

            setTimeout(() => {
                clearInterval(newTimeInterval);
                newCircle.remove();
            }, 5000);

            newCircle.addEventListener("click", function() {
                currentCircle--;
                newCircle.remove();
                clearInterval(newTimeInterval);
            });
        }

    }
}