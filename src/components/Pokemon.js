import React from 'react';

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
}

export default Pokemon;



