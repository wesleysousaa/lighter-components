import React from 'react'

const InfoIcon = ({ color }) => {
  return (
    <img
      src={
        color === 'white' ?
          'https://user-images.githubusercontent.com/47366440/219195597-0e9c27f2-e453-475d-ba32-2244f6609a21.png'
          :
          'https://user-images.githubusercontent.com/47366440/219195592-f29b4ce8-327b-45bf-9638-8ba51da48352.png'}
          alt={color ? 'InfoIcon' + color : 'InfoIconDark'}

      style={{ width: '2em' }}
    />
  )
}

export default InfoIcon