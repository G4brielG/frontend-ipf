import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <div className="card-header">
        <h5 className='card-title'>Card title</h5>
      </div>
      <div className='card-body'>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer">
        FOOTER CARD
      </div>
    </div>
  )
}

export default Card