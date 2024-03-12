import './journal.css'

export default function journal(props) {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0/5
            }}
            className="hr"
        />
    );
    return (
        <div>
            <div className="journal">
                <img src={`./Images/${props.imageUrl}`}/>
                <div className="about-section">
                    <div className="location">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <h4>{props.location}</h4>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <h5>{props.startDate} - {props.endDate}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
            <ColoredLine color="gray" />
        </div>
    )
}