import React from 'react'

const Button = ({klassAdi,ichindekiYazi,playIsharesi  }) => {
  
  return (
    <button className={klassAdi}><img src={playIsharesi} className='play-icon' alt="" /> {ichindekiYazi}</button>
  )
}

export default Button