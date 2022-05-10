import React from 'react';
import PokemonCard from './PokemonCard';

class Pokedex extends React.Component { //aqui é só para percorrer o array
    render() {
        const { pokemons } = this.props;
        return (
            <div className='pokedex'>
{pokemons.map((pokemon) => <PokemonCard key = {pokemon.id} pokemon={pokemon}/>)}
            </div>
        )
    }
}
export default Pokedex;