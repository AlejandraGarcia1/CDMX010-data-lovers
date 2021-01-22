import {filterAZ, filterZA, getpokemoncito, searchName} from '../src/data.js';
import {mock, mockOrdenByAZ, mockOrdenByZA} from './helpers.js'

describe('esta prueba es para checar el funcionamiento de los filtros por tipo y dulces', () => {
  it('con el tipo y dulce definido el pokemon debe ser un objeto conteniendo a remoraid', () => {
    expect(getpokemoncito(['water'], ['50'], mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            "name" : "remoraid"
          })
        ])
      ])
    ]))
  });

  it('con el tipo definido el pokemon debe ser un objeto conteniendo a haunter', () => {
    expect(getpokemoncito(['ghost'], [], mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
          expect.objectContaining({
            "name" : "haunter"
          })
        ])
    ]))
  });
});

  it('con el numero de dulces definidos el pokemon debe ser un objeto conteniendo a bulbasaur con 25 dulces', () => {
    expect(getpokemoncito([], ['25'], mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
        expect.objectContaining({
          "name" : "bulbasaur"
        })
      ])
    ]))
  });

describe('esta prueba checa el buscador por nombre del pokemons', () =>{
  it('busca y devuelve el pokemon con nombre Haunter', () =>{
    expect(searchName(mock, 'haunter')).toEqual(expect.arrayContaining([expect.objectContaining({"name" : "haunter"})]))
  })
});


describe('esta prueba checa el funcionamiento de la funcion sort', () =>{
  it('se organizan alfabeticamente de A-Z', () =>{
    expect(filterAZ(mock)).toStrictEqual(mockOrdenByAZ)
  })

  it('se organizan alfabeticamente de Z-A', () =>{
    expect(filterZA(mock)).toStrictEqual(mockOrdenByZA)
  })

});