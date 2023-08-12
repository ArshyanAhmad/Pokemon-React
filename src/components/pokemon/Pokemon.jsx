import React from 'react'
import './pokemon.css'

function Pokemon({ name, image }) {
    return (
        <div className='pokemon'>
            <div className='name'>{name}</div>
            <div className='img-wrapper'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Pokemon
