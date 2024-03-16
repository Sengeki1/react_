import './Form.css'
import memesData from "../../memeData.js"
import React from "react"

export default function Form () {

    // const [memeImage, setMemeImage] = React.useState(" ")
    // useState is a method which allows to change the value of a property it receives a value and a function
    
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memeArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const { url } = memeArray[randomNumber] // Object distructuring, gets the item property from the array
        
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage.randomImage} className='meme-image'/>
        </main>
    )
}