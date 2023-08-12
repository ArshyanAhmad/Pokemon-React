import React from 'react'
import './search.css'
import { useEffect, useState } from 'react'

function Search() {
    return (
        <div className='search-wrapper'>
            <input
                id='pokemon-name-search'
                type="text"
                placeholder='Pokename..'
            />
        </div>
    )
}

export default Search
