import './Form.css'
import memesData from "../../memeData.js"
import React from "react"

export default function Form () {

    const [memeImage, setMemeImage] = React.useState(" ")
    // useState is a method which allows to change the value of a property it receives a value and a function
    function pickRandomProperty() {
        const meme = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * meme.length)
        const { url } = meme[randomNumber] // Object distructuring, gets the item property from the array
        
        setMemeImage(url)
    }

    return (
        <main>
            <div className='form'>
                <input 
                    className="form-input" 
                    placeholder='Top text' 
                    type="text"
                />
                <input 
                    className="form-input" 
                    placeholder='Bottom text' 
                    type="text"
                />
                <button className='form-button' onClick={pickRandomProperty}>Get a new meme image</button>
            </div>
            <img src={memeImage} className='meme-image'/>
        </main>
    )
}