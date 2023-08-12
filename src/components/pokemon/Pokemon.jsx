import React from 'react'
import './pokemon.css'

function Pokemon({ name, image, key }) {
    return (
        <div className='pokemon'>
            <div className='name'>{name}</div>
            <div className='img-wrapper'>
                <img src={image} alt={key} />
            </div>
        </div>
    )
}

export default Pokemon
