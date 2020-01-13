import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = props => {
    return(
        <ul className="pokemon__list">
            {props.items.map(item =>{
                return (
                    <li className='li' key={item}>
                        <Pokemon 
                        imageUrl = {item.url} 
                        pokemonTitle ={item.name}
                        types ={item.types}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default PokemonList;


        