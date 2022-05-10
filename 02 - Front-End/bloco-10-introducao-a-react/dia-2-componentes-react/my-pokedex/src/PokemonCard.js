import React from 'react';
//! colocar PropTypes
class PokemonCard extends React.Component{
    render (){ 
//* nome do pokemon; tipo do pokemon; peso médio do pokemon, acompanhado da unidade de medida usada;
//*  imagem do pokemon.
const {pokemon: { name, type, averageWeight, image}} = this.props; 
// o nome antes dos : tem que ser igual o que estará no hof
    return (
        <div className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`AverageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt=''/>
        </div>
    );
}
}

export default PokemonCard;
