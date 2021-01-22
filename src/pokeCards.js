//Colores de las tarjetas según el tipo de pokemón.
const colors = {
	fire: '#FDDFDF',
	grass: '#b4ecb4',
	electric: '#fcfc5c',
	water: '#BED2F8',
	ground: '#CEB493',
	rock: '#d5d5d4',
	fairy: '#F6D7DE',
	poison: '#98d7a5',
	bug: ' #98E690',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
   normal: '#F5F5F5',
   ice: '#B6EECF',
   steel: '#EDEAE4',
   dark: '#8A8985',
   ghost: '#E0BBE4'
};

//Estilo de las tarjetas principales de los pokemones.
export let pokeCard = (pokemones) => {
    return `
    <div class="pokemonCard" id= "${pokemones.num}" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer">
    <div class="imgContainer">
    <img src="${pokemones.img}"/> </div>
    <div class="info">
    <span class= "number"> # ${pokemones.num} </span>
    <h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
    <small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
    </div>
    </div>`
};

//Estilo de las tarjetas informativas individuales de cada pokemón.
export let pokeIndividualInfo = (pokemones) => {
	return `
	<div class="individualPokeCard">
	<div class="imgContainter">
	<img class="pokemon" src="${pokemones.img}"/>
	</div> 
	<div class="cardText"> 
	   <p class="pokename" style="background-color:${colors[pokemones.type[0]]}"> ${[pokemones.name[0].toUpperCase()+pokemones.name.slice(1)]} </p>
	   <p class="information"> Tipo: ${pokemones.type[0]} <br>
	   Lugar de aparición: ${pokemones.generation['name']} <br>
	   <p class = "about">${pokemones.about}</p>
	</div>
	<div class="extra">
	<div class="info" style="background-color:${colors[pokemones.type[0]]}">
	 <div class="stats">         
	  <h5 class = "height"> Altura: <br> ${pokemones.size['height']} </h5> 
	  <span class="linee"></span>      
	  <h5 class = "weight"> Peso: <br> ${pokemones.size['weight']} </h5>     
	  <span class="linee"></span> 
	  <h5 class = "attack"> Estadísticas <br> de ataque: <br> ${pokemones.stats['base-attack']} </h5>  
	  <span class="linee"></span>       
	  <h5 class = "defense"> Estadísticas <br> de defensa: <br> ${pokemones.stats['base-defense']} </h5>  
	  <span class="linee></span>     
	</div>   
	</div>   
	`
};    