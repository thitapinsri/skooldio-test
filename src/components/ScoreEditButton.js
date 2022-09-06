import React from 'react'
import editIcon from '../assets/icons/group-3-copy-4.svg'


const ScoreEditButton = () => {
    return (
        <div className="score-edit-button">
            <p>แก้ไขคะแนน</p>
            <img src={editIcon} />
        </div>
    )
}

export default ScoreEditButton