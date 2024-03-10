import './Card.css'

export default function Card (props) {
    return (
        <div className='card'>
            <div className='profile'>
                <p>SOLD  OUT</p>
                <img src={`./Images/Card/${props.img}`} className="photo"/><br/>
            </div>
            <div className='details'>
                <img src='./Images/Card/Star 1.png'className="icon"/>
                <a>{props.rating}<span>{props.reviewCount} - {props.country}</span></a>
            </div>
            <p className='text-1'>{props.title}</p>
            <p className='text-2'><b>{props.price}</b> / person</p>
        </div>
    )
}