import React from 'react'
import Card from './Card'


const CardList = ({cards}) => {

  return (
    <div className="cardlist">
        {
            cards.map(card => {
                return <Card card={card} key={card.id}/>
            })
        }
    </div>
  )
}

export default CardList