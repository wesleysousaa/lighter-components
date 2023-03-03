import styles from './LightModal.module.css'

const LightModal = (props) => {

  function closeWithModalAreaClick(e) {
    if (e.className.includes('modalArea')) {
      props.onClose()
    }
  }

  return (
    <>
      {props.open && (
        <div className={styles.modalArea} value={props.open} onClick={(e) => closeWithModalAreaClick(e.target)}>
          <div className={styles.modal} style={{ backgroundColor: props.bgColor }} {...props}>
            {props.children && props.children}
            {!props.children && (
              <>
                <p className={styles.aviso}>*Atenção, seu modal está sem corpo</p>
                <h2>Titulo do Modal</h2>
                <p>Descrição do modal</p>
                <h3>Corpo</h3>

              </>
            )}
          </div>
        </div>

      )}
    </>
  )
}

export default LightModal