import React from 'react'

const ScoreStats = ({ score }) => {

    const getYear = () => {
        let year = 0
        if (score) {
            year = score.year - 2500
        }
        return year
    }

    return (
        <div className="score-stats">
            <div>
                <h4>{score ? score.min : '-'}</h4>
                <p>คะแนนต่ำสุด {getYear() || ''}</p>
            </div>
            <div className="line"></div>
            <div>
                <h4>{score && score.avg !== 0 ? score.avg : '-'}</h4>
                <p>คะแนนเฉลี่ย {getYear() || ''}</p>
            </div>
            <div className="line"></div>
            <div>
                <h4>{score ? score.max : '-'}</h4>
                <p>คะแนนสูงสุด {getYear() || ''}</p>
            </div>
        </div>
    )
}

export default ScoreStats