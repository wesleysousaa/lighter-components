import styles from './LightModal.module.css'

const LightModal = ({ open, children, onClose, bgColor }) => {

  function closeWithModalAreaClick(e) {
    if (e.className.includes('modalArea')) {
      onClose()
    }
  }

  return (
    <>
      {open && (
        <div className={styles.modalArea} value={open} onClick={(e) => closeWithModalAreaClick(e.target)}>
          <div className={styles.modal} style={{ backgroundColor: bgColor }}>
            {children && children}
            {!children && (
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