import React from 'react'
import axios from 'axios'
import './pokemonList.css'
import { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';

function PokemonList() {

    const [PokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function downloadPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        const PokemonResults = response.data.results;
        const PokemonResultPromise = PokemonResults.map((Pokemon) => axios.get(Pokemon.url))
        const PokemonData = await axios.all(PokemonResultPromise)

        console.log(PokemonData);
        const result = PokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
                id: pokemon.id
            }
        })
        setPokemonList(result)
        setIsLoading(false)
    }

    useEffect(() => {
        downloadPokemons()
    }, [])

    return (
        <>
            <div className='pokemon-list-wrapper'>
                {(isLoading) ? ' Loading...' :
                    PokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)
                }
            </div>
        </>
    )
}

export default PokemonList
