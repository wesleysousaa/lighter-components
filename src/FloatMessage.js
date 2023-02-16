import React, { useEffect, useState } from 'react'
import styles from './FloatMessage.module.css'
import ErrorIcon from '../material-icons/ErrorIcon'
import WarningIcon from '../material-icons/WarningIcon'
import SuccessIcon from '../material-icons/SuccessIcon'
import InfoIcon from '../material-icons/InfoIcon'

const FloatMessage = ({ position, message, duration, variant }) => {

  const [show, setShow] = useState(true)

  const variants = [
    <ErrorIcon color='white' />,
    <SuccessIcon color='white' />,
    <WarningIcon color='white' />,
    <InfoIcon color='white' />
  ]

  useEffect(() => {
    async function hide() {
      setTimeout(() => {
        setShow(false)
        setTimeout(() => {
          document.getElementById('teste').style.display = 'none'
        }, 1000)
      }, duration ? duration : 1000);
    }
    hide()
  }, [])

  function verifyVariant() {
    const index = variant === 'error' ? 0 : variant === 'success' ? 1 : variant === 'warning' ? 2 : 3;
    return variants[index]
  }

  return (
    <div className={styles.floatMessageArea} position={position ? position : 'bottomLeft'}>
      <div className={styles.floatMessage} id={'teste'} show={show.toString()} >
        {verifyVariant()}
        <p>{message}</p>
      </div>
    </div>
  )
}

export default FloatMessage