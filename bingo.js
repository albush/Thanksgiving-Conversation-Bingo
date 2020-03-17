var spaces = [
    "\"Is everyone here?\"",
    "*sound of phone ringing in the background*",
    "The audio is cutting out.",
    "\"Who are we missing?\"",
    "*sneeze*",
    "Student helps teacher use the software",
    "Request for questions met with awkward silence",
    "*coughing*",
    "\"Can everyone see my screen?\"",
    "*sound of children or pets in the background*",
    "Someone is having connection issues",
    "\"Can you repeat that?\"",
    "\"Can we go back a slide?\"",
    "Teacher has email open while sharing screen",
    "\"Sorry, I was on mute.\"",
    "\"Could everyone please go on mute?\"",
    "Someone joins the class late.",
    "Teacher asks question and gets no response",
    "*sound of loud typing*",
    "\"Let's move on\"",
    "People talking at the same time",
    "\"Can everyone hear me?\"",
    "Teacher has technical difficulties",
    "\"Will this class be recorded?\"",
    "There is a lag",
    "Teacher makes a joke",
    "Unexpected disconnection",
    "Mention of Coronavirus"
];

spaces = spaces.sort(() => Math.random() - 0.5);

for (var i = 0; i < 25; ++i) {
    if (i != 12) addDiv("bingo-card", i, spaces[i]);
    else addDiv("bingo-card", i, "FREE SPACE");
}

function addDiv(parent, id, innerText) {
    // and give it some content 
    var newItem = document.createElement("div");
    newItem.classList = "bingo-card__item";
    if (id == 12) {
        newItem.classList += " active";
    }
    var newItemText = document.createTextNode(innerText);
    // add the text node to the newly created div
    newItem.appendChild(newItemText);
    // add checkbox
    var check = document.createElement("span");
    check.classList = "bingo-card__checkbox";
    newItem.appendChild(check);
    // clickable
    newItem.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    newItem.id = "item" + id;
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById(parent);
    currentDiv.appendChild(newItem, currentDiv);
}

var maxWidth = $('#outer').width();
var maxHeight = $('#outer').height();
var $window = $(window);
var width = $window.width();
var height = $window.height();
var scale;
if (width >= maxWidth && height >= maxHeight) {
    $('#outer').css({
        '-webkit-transform': ''
    });
    $('#wrap').css({
        width: '',
        height: ''
    });
} else {
    scale = Math.min(width / maxWidth, height / maxHeight);
    $('#outer').css({
        '-webkit-transform': 'scale(' + scale + ')'
    });
    $('#wrap').css({
        width: maxWidth * scale,
        height: maxHeight * scale
    });
}

if ($(".bingo-card__item").toArray().reduce((a, b) => b.clientWidth + a, 0) > 2900) {
    $(".bingo-card__item").toggleClass("shrink");
}

$(document).ready(function(e) {
    $(window).resize(function(evt) {
        var $window = $(window);
        var width = $window.width();
        var height = $window.height();
        var scale;
        if (width >= maxWidth && height >= maxHeight) {
            $('#outer').css({
                '-webkit-transform': ''
            });
            $('#wrap').css({
                width: '',
                height: ''
            });
            return;
        }
        scale = Math.min(width / maxWidth, height / maxHeight);
        $('#outer').css({
            '-webkit-transform': 'scale(' + scale + ')'
        });
        $('#wrap').css({
            width: maxWidth * scale,
            height: maxHeight * scale
        });
    });
});