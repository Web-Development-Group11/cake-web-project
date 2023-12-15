import React from 'react'
import { useModal } from '../../hook/useModal'
import './modal.css'
import { useMountTransition } from '../../hook/useMountTransition';

export default function Modal({ children }) {
  const isOpen = useModal((state) => state.isOpen);
  const onClose = useModal((state) => state.onClose);

  const hasTransitionedIn = useMountTransition(isOpen, 200);

  if (!isOpen && !hasTransitionedIn) return null;

  return (
    <div 
      className={`modal ${hasTransitionedIn && 'in'} ${isOpen && 'visible'}`} onClick={onClose}
    >
      {children}
    </div>
  )
}
