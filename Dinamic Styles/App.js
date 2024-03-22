import React from "react"
import boxes from "./boxes"
import Box from './Box'

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(squares.map(item => {
            if (id == item.id) {
                return {
                    ...item,
                    on: !item.on
                }
            } else {
                return {...item}
            }
        }))
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on}
            toggle={toggle}
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
