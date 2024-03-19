export default function Box (props) {
    
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "#cccccc"
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}