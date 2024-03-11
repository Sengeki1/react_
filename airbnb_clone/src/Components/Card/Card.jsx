import './Card.css'

export default function Card (props) {
    let badgeTest
    if (props.openSpots === 0) {
        badgeTest = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeTest = "ONLINE"
    } 
    return (
        <div className='card'>
            <div className='profile'>
                {badgeTest && <p>{badgeTest}</p>}
                <img src={`./Images/Card/${props.coverImg}`} className="photo"/><br/>
            </div>
            <div className='details'>
                <img src='./Images/Card/Star 1.png'className="icon"/>
                <a>{props.stats.rating}<span> ({props.stats.reviewCount}) - {props.location}</span></a>
            </div>
            <p className='text-1'>{props.title}</p>
            <p className='text-2'><b>From ${props.price}</b> / person</p>
        </div>
    )
}