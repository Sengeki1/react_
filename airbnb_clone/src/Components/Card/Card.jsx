import './Card.css'

export default function Card () {
    return (
        <div className='card'>
            <div className='profile'>
                <p>SOLD  OUT</p>
                <img src='./Images/Card/image 12.png' className="photo"/><br/>
            </div>
            <div className='details'>
                <img src='./Images/Card/Star 1.png'className="icon"/>
                <a>5.0 <span>(6) - USA</span></a>
            </div>
            <p className='text-1'>Life lessons with Katie Zaferes</p>
            <p className='text-2'><b>From $136</b> / person</p>
        </div>
    )
}