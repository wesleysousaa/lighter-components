import React from 'react'
import styles from './LightButton.module.css'

const LightButton = ({ label, color }) => {

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
    className={styles.button}
    color={colors.includes(color) ? color : 'lightblue'}
    >
      {label}
    </button>
  )
}

export default LightButton