import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = props => {
    return <div className = 'mainWrapper' ><ul className='pokemonList'>
        {props.items.map((item,id) => {
            return <li  className = 'pokemonsList'key = {id}>
                <PokemonItem 
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