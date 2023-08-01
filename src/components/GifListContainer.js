import React from 'react'
import { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer(searchQuery) {
    const [gifs, setGifs] = useState([])
    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=KoByBhBOKAE1yOZPZj5m6MaJg58jyIHI&rating=g")
            .then(res => res.json())
            .then((data) => {
                setGifs(data.data.slice(0, 3))
                console.log(data)
                const firstThreeGifs = data.data.slice(0, 3);
                setGifs(firstThreeGifs);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [])
    function handleSubmit(searchQuery) {
        setGifs(searchQuery);
    }

    return (
        <div>
            <GifSearch onAddItem={handleSubmit} />
            <GifList gifs={gifs} />

        </div>
    )
}

export default GifListContainer;