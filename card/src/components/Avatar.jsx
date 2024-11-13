import React from 'react'
import image from './assets/image.png'

function Avatar() {
  return (
    <div>
        <img className='avatar' src={image} alt="collins" />
    </div>
  )
}

export default Avatar