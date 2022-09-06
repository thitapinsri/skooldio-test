import React from 'react'

const RoundSelected = ({ score }) => {
    const capitalizeFirstLetter = (string) => {
        return string[0] + string.slice(1).toLowerCase();
    }

    return (
        <h4> รอบที่ {score && score.scoreType == 'ADMISSION' ? '4' : '-'}: {score ? capitalizeFirstLetter(score.scoreType) : '-'}</h4>
    )
}

export default RoundSelected