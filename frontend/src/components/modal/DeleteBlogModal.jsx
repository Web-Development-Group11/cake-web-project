import React, { useState } from 'react';
import Modal from './Modal';
import styles from './modal.module.css';
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../hook/useModal';

export default function DeleteBlogModal() {
  const onClose = useModal((state) => state.onClose);
  const name = useModal((state) => state.name);

  if (name !== 'deleteBlog') return null;

  return (
    <Modal>
      <div
        className={styles.modal__container}
        onClick={(ev) => ev.stopPropagation()}
      >
        <IoMdClose
          className={`${styles.modal__close}`}
          onClick={onClose}
        />
        <h3 className={styles.modal__header}>Xóa bài viết đã chọn</h3>
        <p className={styles.modal__description}>
          Bài viết đã xóa sẽ không thể phục hồi lại. Bạn có muốn tiếp tục?
        </p>
        <div className={styles.modal__action}>
          <button className={styles['modal__button-destroy']} onClick={onClose}>
            Cancel
          </button>
          <button className={styles['modal__button-accept']}>Save</button>
        </div>
      </div>
    </Modal>
  );
}
