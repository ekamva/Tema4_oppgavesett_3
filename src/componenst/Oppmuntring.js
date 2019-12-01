import React from "react"

const birds = ["seagull", "hummingbird", "blackbird", "parakeet"]



const Oppmuntring = (props) =>{
    return(
        //oppgave_1
        <div className="oppmuntring">
            <h1>Kom igjen {props.navn}!</h1>
            <p>{props.emne} er ikke så vanskelig som du tror.</p>
            <p>Du må bare øve.</p>
        </div>
       
        
    )
}

export default Oppmuntring