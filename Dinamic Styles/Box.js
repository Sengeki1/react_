export default function Box (props) {
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    return (
        <div style={styles} className="box"></div>
    )
}