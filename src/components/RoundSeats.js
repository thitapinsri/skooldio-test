import React from 'react'

const RoundSeats = ({roundSeats}) => {
    let roundArray = []
    for (let i = 1; i <= roundSeats.length; i++) {
        if (roundSeats[i] > 0) {
            roundArray.push(
                <div className="round active" key={i}>
                    <p>{i}</p>
                </div>
            )
        } else {
            roundArray.push(
                <div className="round" key={i}>
                    <p>{i}</p>
                </div>
            )
        }
    }
    
    return (
        <div className="rounds">
            <h2>รอบที่เปิด</h2>
            <div className="round-container">
                {roundArray}
            </div>
        </div>
    )
}

export default RoundSeats