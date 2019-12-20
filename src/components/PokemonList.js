import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = props => {
    return <div className = 'mainWrapper' ><ul className='pokemonList'>
        {props.items.map((item,id) => {
            return <li  className = 'pokemonsList'key = {id}>
                <Pokemon 
                imageUrl = {item.url} 
                pokemonTitle ={item.name}
                types ={item.types}
                />
            </li>
        })}
    </ul>
    </div> 
}


export default PokemonList;