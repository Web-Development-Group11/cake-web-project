import React from 'react'
import { useModal } from '../../hook/useModal'
import styles from'./modal.module.css'
import { useMountTransition } from '../../hook/useMountTransition';

export default function Modal({ children }) {
  const isOpen = useModal((state) => state.isOpen);
  const onClose = useModal((state) => state.onClose);

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  if (!isOpen && !hasTransitionedIn) return null;

  return (
    <div 
      className= {`${styles.modal} ${hasTransitionedIn && styles.in} ${
        isOpen && styles.visible
      }`} onClick={onClose}
    >
      {children}
    </div>
  )
}
