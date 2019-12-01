import React from "react"

const Gud = (props)=> {
    return (
        <div className ="guder">
            <h1> {props.name}</h1>
            <p> {props.beskrivelse}</p>
        </div>
    )
}

export default Gud