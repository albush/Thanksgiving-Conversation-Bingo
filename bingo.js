// list of possible spaces
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
    "Mention of Coronavirus",
    "*toilet flushes*",
    "Teacher toggles between screens unnecessarily",
    "Someone forgets they weren't on mute",
    "Teacher wonders if people are still there",
    "Awkward pause as 2 people wait for each other to speak"
];

// randomize the list of spaces
spaces = spaces.sort(() => Math.random() - 0.5);

// create div elements for the first 12 spaces
for (var i = 0; i < 12; ++i) { addDiv("bingo-card", i, "bingo-card__item", spaces[i]); }
// the 12th space is the free space
addDiv("bingo-card", i, "bingo-card__item active", "FREE SPACE");
// create div elements for the last 12 spaces
for (var i = 13; i < 25; ++i) { addDiv("bingo-card", i, "bingo-card__item", spaces[i]); }

// create bingo card item
function addDiv(parent, id, classList, innerText) {
    // and give it some content 
    var newItem = document.createElement("div");
    // set class
    newItem.classList = classList;
    // create text node for new item
    var newItemText = document.createTextNode(innerText);
    // add the text node to the newly created div
    newItem.appendChild(newItemText);
    // add check mark element to item
    var check = document.createElement("span");
    check.classList = "bingo-card__checkbox";
    newItem.appendChild(check);
    // make item toggle active class when clicked
    newItem.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    // set id
    newItem.id = "item" + id;
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById(parent);
    currentDiv.appendChild(newItem, currentDiv);
}

// make sure content fits on the screen
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

// if bingo card items are too wide, shrink the font size to 11
if ($(".bingo-card__item").toArray().reduce((a, b) => b.clientWidth + a, 0) > 2900) {
    $(".bingo-card__item").toggleClass("shrink");
}

$(document).ready(function(e) {
    // make sure content fits on the screen when window is resized
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