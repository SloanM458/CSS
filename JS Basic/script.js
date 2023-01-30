

var pokePic= document.querySelector('#pokemon');
var pokeName = document.querySelector('#pokemonName');
var pokeTeam = document.querySelector('#pokeTeam');

function evolvePokemon(){
    document.querySelector('#pokemon').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwq4UOLnEqEVDPhzLZ6seR9_KHoec9V3tiwA&usqp=CAU'
    // Here, we put the id or class in (' '), same selectors from css apply to query
    //the .src allows us to go past the this element to change the image element

    pokeName.innerText = 'Carracosta'
}




// function alertmsg(message) {
//     alert(message)
// }

// function thisEl(element){
//     console.log(element.innerText);
// }

// function turnOff(element) {
//     element.innerText = "Off";
// }


// function changeImg(element){
//     element.src= 'https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png'
// }