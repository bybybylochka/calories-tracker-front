import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({active, setActive, children, backgroundColor}) => {
    return (
        <div className={active? `${styles.modal} ${styles.active}`: `${styles.modal}`} onClick={()=>setActive(false)}>
            <div className={active?`${styles.modalContent} ${styles.active} ${backgroundColor}`: `${styles.modal}`} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;