import React from 'react'

const SuccessIcon = ({ color }) => {
  return (
    <img
      src={
        color === 'white' ?
          'https://user-images.githubusercontent.com/47366440/219205645-bf4a3472-eabb-4e1e-8888-11352baaca51.png)'
          :
          'https://user-imag{es.githubusercontent.com/47366440/219195604-957054d8-4ffc-4e8e-8f28-0c13f08cf78d.png'}
      alt={color ? 'SuccessIcon' + color : 'SuccessIconDark'}
      style={{ width: '2em' }}
    />
  )
}

export default SuccessIcon