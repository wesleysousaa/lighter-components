import React from 'react'

const WarningIcon = ({ color }) => {
  return (
    <img
      src={
        color === 'white' ?
          'https://user-images.githubusercontent.com/47366440/219195616-9493c30c-76ac-4884-b420-9b02f756bf9d.png'
          :
          'https://user-images.githubusercontent.com/47366440/219195609-668afc8a-063b-4f5d-95fc-ec7f2dd6d1e2.png'}
          alt={color ? 'WarningIcon' + color : 'WarningIconDark'}
      style={{ width: '2em' }}
    />
  )
}

export default WarningIcon