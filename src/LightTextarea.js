import React from 'react'
import styles from './LightTextarea.module.css'

const LightTextarea = (props) => {
  const colors = [
    'lightblue',
    'lightgreen',
    'lightpurple',
    'lightyellow',
    'lightred',
    'dark'
  ]

  return (
    <textarea
      className={
        props.variant === 'outline' ?
          styles.textArea :
          styles.textAreaDefault
      }
      {...props}
      color={colors.includes(props.color) ? props.color : 'lightblue'}
      placeholder={props.label} />
  )
}


export default LightTextarea