import React from 'react'
import styles from './LightTextarea.module.css'
import PropTypes from 'prop-types';

const colors = [
  'lightblue',
  'lightgreen',
  'lightpurple',
  'lightyellow',
  'lightred',
  'dark'
]

const LightTextarea = (props) => {

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

LightTextarea.propTypes = {
  variant: PropTypes.oneOf(['outline', 'default']),
  color: PropTypes.oneOf(colors),
  label: PropTypes.string
}


export default LightTextarea