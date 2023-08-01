import React from 'react'
import { useState } from 'react'

function GifSearch({ onAddItem }) {
    const [input, setInput] = useState()

    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        onAddItem(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default GifSearch;