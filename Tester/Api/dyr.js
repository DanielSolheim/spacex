
var pageCounter = 1; // Brukt for å endre nettadresse for hvert klikk på knappen.
var animalContainer = document.getElementById('animal-info'); // henter div som skal vise paragrafene
var btn = document.getElementById('btn'); // henter knappen som vi skal bruke til å trykke på

// denne funksjonen trigger on click eventen
btn.addEventListener("click", function(){ //adder en klikk event for knappen, lager en function.
  var ourRequest = new XMLHttpRequest(); //forteller at denne funksjonen skal hente en fil
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); // linker/åpner selve filen

  ourRequest.onload = function(){ //lager ny funskjon inne i btn funksjonen, hva skjer on load
    var ourData = JSON.parse(ourRequest.responseText); //gjør tekst filen om til json objekter
    renderHTML(ourData); // lager en funksjon og setter ourdata inn i den
  };

  ourRequest.send(); //sender informasjonen og displayer den
  pageCounter++; //øker verdien på JSON url
  if (pageCounter > 3){ //  hvis den er mindre enn 3 skal knappen forsvinne, csss
    btn.classList.add("hide-me");
  }

}); // lukker funksjonen for on click



//denne funksjonen viser til hva tekst som skal vises
function renderHTML(data){ //Sikter til funksjon som tidelere er blitt tildelt ourdata, parameter kan være samme
  var htmlString = ""; // tom string som vi skal fylle

  for(i = 0; i < data.length; i++){ // kjører gjennom listen
    htmlString += "<p>" + data[i].name + " is a " + data[i].species +  " that likes to eat " // bruker dot notation for å få tilgang til elementer

    for (ii = 0; ii < data[i].foods.likes.length; ii++){ //sikter oss dypere inn i underliggende arrays, så for loops inne i en for loop
      if (ii <= 0){
        htmlString += data[i].foods.likes[ii];
      } else{
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";

    for(iii = 0; iii < data[i].foods.dislikes.length; iii++){
      if(iii <= 0){
        htmlString += data[i].foods.dislikes[iii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[iii];
      }
    }

htmlString += ". </p>"

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
