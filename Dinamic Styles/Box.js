export default function Box (props) {

    const styles = {
        backgroundColor: on ? "#222222" : "#cccccc"
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    // created a inner function to run the function in the parent class instead of modifying it in the child component
    return (
        <div 
            style={styles} 
            className="box" 
            onClick={() => props.toggle(props.id)}> 
        </div>
    )
}