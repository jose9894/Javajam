let navElement = document.getElementsByClassName("content-area")[0].firstElementChild; //henter nav

navElement.addEventListener("mouseover", mouseOver);
navElement.addEventListener("mouseout", mouseOut);

function mouseOver() {
  navElement.id = "nav-selected"; //fremhæver anchor (a) ved at gøre dem størrer skrift
}

function mouseOut() { //fjerner id samt css
  navElement.id = ""; 
}
