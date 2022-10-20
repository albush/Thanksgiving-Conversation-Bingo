// list of possible spaces
// list of possible spaces
var spaces = [
    "\"Fake News\"",
    "Casual Racism",
    "Speculation of non-present relative's romantic life",
    "\"Antifa\"",
    "Tells Everyone They're A Vegan. Again.",
    "Not-So Humble Brag",
    "Humble Brag",
    "Sex Life TMI",
    "\"I'm so full- wait, is that pie?\"",
    "Adult Stuck At The Kids Table",
    "All Democrats ...",
    "\"All Lives Matter\"",
    "\"Oops, was I not supposed to tell everyone?\"",
    "Mom Shaming",
    "\"So... How about this weather?\"",
    "\"When Are You Going To Get Married?\"",
    "\"When Are You Going To Have Kids?\"",
    "All Democrats ...",
    "Multi-Level Marketing Pitch",
    "Ignores Spouse All Day",
    "\"I'm on the [Trendy Diet]\"",
    "Casual Sexism",
    "\"No disrespect but, [something disrespectufl]\"",
    "Too Much Wine",
    "\"Did You Mute Me On Facebook?\"",
    "Family Wishes Your Ex Was Here",
    "Couple in a Hushed Argument",
    "Medical TMI",
    "Hiding Outside to Avoid It All",
    "Have I ever told you about the time ... (yep, every year)",
    "Easily Debunked Consipiracy Theory",
    "Passive Aggressive Pre-Meal Prayer",
    "Won't Shut Up About CrossFit",
    "Unsolicited Advice",
    "Not a sports guy trying to talk football with the guys",
    "On mobile phone all day, doesn't talk to anyone"
];

// randomize the list of spaces
spaces = spaces.sort(() => Math.random() - 0.5);

// create div elements for the first 12 spaces
for (var i = 0; i < 12; ++i) { addDiv("bingo-card", i, "bingo-card__item", spaces[i]); }
// the 12th space is the TRUMP (FREE SPACE)
addDiv("bingo-card", i, "bingo-card__item active", "TRUMP (FREE SPACE)");
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