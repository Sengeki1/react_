import './Form.css'

export default function Form () {
    function handleClick() {
        console.log("I was clicked!")
    }

    function handleMouseOver () {
        console.log("Mouse Over")
    }

    return (
        <main>
            <form className='form'>
                <input className="form-input" placeholder='Top text' type="text" onMouseOver={handleMouseOver}/>
                <input className="form-input" placeholder='Bottom text' type="text"/>
                <button className='form-button' onClick={handleClick}>Get a new meme image</button>
            </form>
        </main>
    )
}