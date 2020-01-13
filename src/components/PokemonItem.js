import React from 'react';

<<<<<<< HEAD:src/components/Pokemon.js
const Pokemon = props => {
    return (
        <div className="container">
            <img className = "container__img" src={props.imageUrl} alt= {props.pokemonTitle}/>
            <h2 className="container__pokemon">{props.pokemonTitle}</h2>
                <ul className ="container__typeList">
                    {props.types.map((types, index) => {
                        return (
                            <span className="pokelistTypeList__item" key={index}> 
                                {types} 
                            </span>)
                    })}
                </ul>
        </div>
    )
=======
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
>>>>>>> 894ff8ffb20afe5d3caa344623e438924f68af8e:src/components/PokemonItem.js
}

export default PokemonItem;



