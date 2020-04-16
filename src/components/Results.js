import React from 'react'
import Result from './Result'



function Results({ busResults, search }) {
    return (
        <div>

            {busResults.map((bus, index) => (
                <Result key={index} bus={bus} />
            ))}
        </div>
        
    )
}

export default Results
