import React, { useState } from 'react';
import Modal from './Modal';
import './modal.css';
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../hook/useModal';

export default function DeleteBlogModal() {
  const onClose = useModal((state) => state.onClose);
  const [closeButtonActive, setCloseButtonActive] = useState(false);

  const handleMouseEnter = () => {
    setCloseButtonActive(true);
  };

  const handleMouseLeave = () => {
    setCloseButtonActive(false);
  };

  return (
    <Modal>
      <div
        className="modal__container"
        onClick={(ev) => ev.stopPropagation()}
      >
        <IoMdClose
          className={`modal__close ${closeButtonActive ? 'active' : ''}`}
          onClick={onClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <h3 className="modal__header">Xóa bài viết đã chọn</h3>
        <p className="modal__description">
          Bài viết đã xóa sẽ không thể phục hồi lại. Bạn có muốn tiếp tục?
        </p>
        <div className="modal__action">
          <button className="modal__button-destroy" onClick={onClose}>
            Cancel
          </button>
          <button className="modal__button-accept">Save</button>
        </div>
      </div>
    </Modal>
  );
}
