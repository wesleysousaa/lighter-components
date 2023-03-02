import React from 'react'
import styles from './LightButton.module.css'

const LightButton = (props) => {

  const colors = [
    'lightblue',
    'lightgreen',
    'lightpurple',
    'lightyellow',
    'dark',
    'lightred'
  ]

  return (
    <button
      {...props}
      className={styles.button}
      color={colors.includes(props.color) ? props.color : 'lightblue'}
    >
      {props.label}
    </button>
  )
}

export default LightButton