import React from 'react'
import RoundSeats from './RoundSeats'
import RoundSelected from './RoundSelected'
import ScoreEditButton from './ScoreEditButton'
import ScoreStats from './ScoreStats'
import likeButton from '../assets/icons/page-1.svg'
import starIcon from '../assets/icons/page-1-copy-2.svg'

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="head">
                <div className="sub-head">
                    <img src={card.logo} alt="logo" />
                    <div className="text">
                        <h1>{card.faculty.name}</h1>
                        <h2>{card.name}</h2>
                        <h3>{card.faculty.university.name}</h3>
                    </div>
                </div>
                <img src={likeButton} alt="like-button" />
            </div>
            <div className="body">
                <RoundSeats roundSeats={card.roundSeats}/>
                <div className="title">
                    <RoundSelected score={card.score} />
                    <ScoreEditButton />
                </div>
                <div className="user-score">
                    <img src={starIcon} />
                    <div>
                        <p>คะแนนของคุณคือ</p>
                        <h2>{'22222'}</h2>
                    </div>
                </div>
                <ScoreStats score={card.score} />

            </div>
        </div>
    )
}

export default Card