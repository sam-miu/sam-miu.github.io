var startBtn;
var stopBtn;
var animations;
var fontSize;
var turbo;
var textArea;
var frame = [];
var frameIndex = 0;
var timeInterval;

window.onload = function () {
    startBtn = document.getElementById('start');
    stopBtn = document.getElementById('stop');
    animations = document.getElementById('animation');
    fontSize = document.getElementById('fontsize');
    turbo = document.getElementById('turbo');
    textArea = document.getElementById('text-area');    
};

function startLaunchingAnimation() {
    startSets();

    timeInterval = setInterval(() => {
      frameIndex = (frameIndex + 1) % frame.length;
      textArea.value = frame[frameIndex];
    }, turbo.checked ? 50 : 250);

    updateTextArea();
}

function resetAnimationAndTextArea() {
    stopSets();
    clearInterval(timeInterval);
    textArea.value = frame[0];
}

function updateTextArea() {
  const animate = animations.value;
  frame = ANIMATIONS[animate].split('=====\n');
  frameIndex = 0;
  textArea.value = frame[frameIndex];
}

function startSets() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animations.disabled = true;
    fontSize.disabled = true;
    turbo.disabled = true;
    textArea.disabled = true;
}

function stopSets() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animations.disabled = false;
    fontSize.disabled = false;
    turbo.disabled = false;
    textArea.disabled = false;
}

function onSelectAnimation() {
    updateTextArea()
}

function onSelectFont() {
    var size = '0pt';
    if (fontSize.value == 'Tiny') {
        size = '7pt';
    } else if (fontSize.value == 'Small') {
        size = '10pt';
    } else if (fontSize.value == 'Medium') {
        size = '12pt';
    } else if (fontSize.value == 'Large') {
        size = '16pt';
    } else if (fontSize.value == 'Extra Large') {
        size = '24pt';
    } else if (fontSize.value == 'XXL') {
        size = '32pt';
    } else {
        size = '12pt'
    }
    textArea.style.fontSize = size;
}