import React from 'react'
import styles from './LightTextfield.module.css'

const LightTextfield = ({ label, variant, color, type }) => {

  const colors = [
    'lightblue',
    'lightgreen',
    'lightpurple',
    'lightyellow',
    'lightred',
    'dark'
  ]

  return (
    <input
      type={type === 'password' ? 'password' : 'text'}
      className={
        variant === 'outline' ? 
        styles.textField : 
        styles.textFieldDefault
      }
      color={colors.includes(color) ? color : 'lightblue'}
      placeholder={label} />

  )
}

export default LightTextfield