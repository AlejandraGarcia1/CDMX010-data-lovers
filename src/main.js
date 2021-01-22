//Ejecución general del programa.

import {filterAZ, filterZA, getpokemoncito, searchName} from './data.js';
import {pokeCard, pokeIndividualInfo} from './pokeCards.js'
import data from './data/pokemon/pokemon.js';

const poks = data;
const pokemons = poks.pokemon;


let typesToFilter = [];
let candyToFilter = [];

/* VISUALIZAR LAS TARJETAS DE LOS POKEMONES EN LA PANTALLA PRINCIPAL. */
document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('');

/*TARJETAS INFORMATIVAS DE CADA POKEMÓN AL DARLE CLICK. */
let pokeContainer = document.getElementById ("pokemonss");
pokeContainer.addEventListener ("click", getAPokemon);

function getAPokemon (e) {
	if (e.target !== e.currentTarget) {     
		let clickedItem = e.target.id;
		let getThisPokemon = pokemons.filter ((searchThisPokemon) => searchThisPokemon.num === clickedItem);
		
		document.getElementById("pokemonss").innerHTML = getThisPokemon.map(pokeIndividualInfo).join('');		
	}   
}

/*BUSCAR POR EL NOMBRE INDIVIDUAL DE POKEMÓN*/

let searchByName = document.getElementById ("searchName");
searchByName.onclick = function () {
	let nameToSearch = document.getElementById ("nameToSearch").value.toLowerCase(); 

    let filteredPokemon = searchName(pokemons, nameToSearch)
    document.getElementById("pokemonss").innerHTML = filteredPokemon.map(pokeIndividualInfo).join('');
}

/*BOTON PARA BUSCAR CON LOS FILTROS*/

let searchFilters = document.getElementById ("search");
searchFilters.onclick = function () {  

	typesToFilter.length = 0;
	candyToFilter.length = 0;
  
let arrangeAZ = document.getElementById("az").checked;
let arrangeZA = document.getElementById("za").checked;
   
    //Tipo de Pokemón.
	let typeCheckboxes = document.getElementsByName ("tFilter");

	for (let i=0; i<typeCheckboxes.length; i++) {
		if (typeCheckboxes[i].checked){
			typesToFilter.push(typeCheckboxes[i].id); 
		}
	}
	//Número de dulces.
	let candyCheckboxes = document.getElementsByName ("cFilter");

	for (let i=0; i<candyCheckboxes.length; i++) {
		if (candyCheckboxes[i].checked){
			candyToFilter.push(candyCheckboxes[i].id);
		}		
	}

	//Filtrar por orden alfabético.
	if (arrangeAZ == true){
		let sortedPokemons = filterAZ(pokemons)
		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('');		
	}
	
	if (arrangeZA == true){
		let sortedPokemons = filterZA(pokemons)
		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('');		
	}

	let uniqueTypeFilters = [...new Set(typesToFilter)]		//eslint-disable-line 
	let uniqueCandyFilters = [...new Set(candyToFilter)]	//eslint-disable-line 

	let filteredPokemons = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons)


	if(uniqueTypeFilters.length == 0 && uniqueCandyFilters.length == 0){
		return
	}else if(uniqueTypeFilters.length > 0 && uniqueCandyFilters.length > 0){
		document.getElementById("pokemonss").innerHTML = filteredPokemons.map((mapCandy) => mapCandy.map((poke) => poke.map(pokeCard).join('')).join(''))
	}else if (uniqueTypeFilters.length > 0 || uniqueCandyFilters.length > 0){
		document.getElementById("pokemonss").innerHTML = filteredPokemons.map ((poke) => poke.map (pokeCard).join('')).join('');

	}
}

let refrescar = document.getElementById("regresar");
   
refrescar.onclick = function () {   

    document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('')  
}

/* QUERY DEL NAVBAR */

let desplegar = document.getElementById("menu");

desplegar.onclick = function () {

      var navbar = document.getElementById("nav");      
      navbar.classList.toggle("show");
};