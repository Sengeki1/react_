import './Card.css'

export default function Card (props) {
    return (
        <div className='card'>
            <div className='profile'>
                {props.openSpots === 0 && <p>SOLD  OUT</p>}
                <img src={`./Images/Card/${props.img}`} className="photo"/><br/>
            </div>
            <div className='details'>
                <img src='./Images/Card/Star 1.png'className="icon"/>
                <a>{props.rating}<span> ({props.reviewCount}) - {props.location}</span></a>
            </div>
            <p className='text-1'>{props.title}</p>
            <p className='text-2'><b>From ${props.price}</b> / person</p>
        </div>
    )
}