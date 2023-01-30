console.log('Hello from the console!');

function alertmsg(message) {
    alert(message)
}

function thisEl(element){
    console.log(element.innerText);
}

function turnOff(element) {
    element.innerText = "Off";
}


function changeImg(element){
    element.src= 'https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png'
}