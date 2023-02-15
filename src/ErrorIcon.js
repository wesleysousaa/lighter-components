import React from 'react'

const ErrorIcon = ({ color }) => {
  return (
    <img
      src={
        color === 'white' ?
          'https://user-images.githubusercontent.com/47366440/219195587-61e47a98-cca9-47b4-abb1-c0fc187fd6a4.png'
          :
          'https://user-images.githubusercontent.com/47366440/219195574-97978e12-c3d7-44bf-b80f-2b0a56398f06.png'}
          alt={color ? 'ErrorIcon' + color : 'ErrorIconDark'}

      style={{ width: '2em' }}
    />
  )
}

export default ErrorIcon