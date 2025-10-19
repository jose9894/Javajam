
//Tilføj en tekst nederst på music-siden, som viser hvornår siden sidst er opdater
let bottom = document.getElementsByTagName("footer")[0];
// var text = "<p> last modified: " + document.lastModified + "</p>";
var text = document.lastModified;
bottom.innerHTML += text; 


// Tilføj en mouse-rollover til den indledende tekst på music-siden således at der vises et popup vindue med
// teksten ”Concerts sell out quickly so act fast!”
let elementTop = document.getElementsByClassName("main-content")[0].firstElementChild;

elementTop.addEventListener("mouseover",mouseOver);

function mouseOver(){
alert("Concerts sell out quickly so act fast!");
}

// 
// Omkod music-siden således at ved klik på tumb-nails, så vises det store billede i et nyt vindue.
// For billedet af Greg tilføjes en timer, som automatisk lukker vinduet med det store billede efter 2 sekund
function thump(){
var newPage = window.open("../images/melanie.jpg");
}

function thump2(){
var newPage = window.open("../images/greg.jpg");
setTimeout(function(){newPage.close()}, 2000);
}