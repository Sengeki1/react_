import './Form.css'
import memesData from "../../memeData.js"

export default function Form () {

    function pickRandomProperty() {
        const meme = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * meme.length)
        const { url } = meme[randomNumber] // Object distructuring, gets the item property from the array
        console.log(url)
    }

    return (
        <main>
            <form className='form'>
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
            </form>
        </main>
    )
}