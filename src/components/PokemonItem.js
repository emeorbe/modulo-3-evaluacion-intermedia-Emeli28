import React from 'react';

const PokemonItem = props => {
    return <div className='container'>
        <img className = 'imagePokemon' src={props.imageUrl} alt = ''>
        </img>
        <h2 className='titlePokemon'>{props.pokemonTitle}</h2>
        <ul className ='pokeList'>
        {props.types.map((types, id) =>{
                return <span 
                    key = {id}>
                    {types}
                </span>
            })}
        </ul>
    </div>
}

export default PokemonItem;



