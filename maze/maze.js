var didTouch = false;

$( document ).ready(function() {
    console.log( "ready!" );
    $( "#start" ).click(onStart);
    $( ".boundary" ).mouseover(onMouseOver);
    $( "#end" ).mouseover(onFinish);
   
    $( ".boundary example youlose" ).mouseover(onMouseOver);
    $( "p" ).mouseover(onMouseOver);
    $( "h1" ).mouseover(onMouseOver);
    $( "h2" ).mouseover(onMouseOver);
})

function onStart() {
    $( "#status" ).text("Click the \"S\" to begin.");
    var allBoundaries = document.querySelectorAll(".boundary");
    for (boundary of allBoundaries) {
        boundary.classList.remove("youlose");
    }
    didTouch = false;
}

function onMouseOver() {
    var allBoundaries = document.querySelectorAll(".boundary");
    for (boundary of allBoundaries) {
        boundary.classList.add("youlose");
    }
    didTouch = true;
}

function onFinish() {
    if (didTouch) {
        $( "#status" ).text("Sorry, you lose. :[");
    } else {
        $( "#status" ).text("You win! :]");
    }
}