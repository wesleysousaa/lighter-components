import React from 'react'
import styles from './LightTextfield.module.css'

const LightTextfield = (props) => {

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
      type={props.type === 'password' ? 'password' : 'text'}

      className={
        props.variant === 'outline' ?
          styles.textField :
          styles.textFieldDefault
      }
      {...props}
      color={colors.includes(props.color) ? props.color : 'lightblue'}
      placeholder={props.label} />

  )
}

export default LightTextfield