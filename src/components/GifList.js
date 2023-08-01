import React from 'react'

function GifList({ gifs }) {

    return (
        <div>
            <ul>
                {gifs.map((gif) => {
                    return (
                        <li><img src={gif.images.original.url} alt='animal1' /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GifList
