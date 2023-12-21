import React, { useState } from 'react';
import Modal from './Modal';
import styles from './modal.module.css';
import randomBoxStyles from './RandomBoxModal.module.css'
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../hook/useModal';
import { axiosClient } from '../../api/axios';

export default function RandomBoxModal() {
    const onClose = useModal((state) => state.onClose);
    const name = useModal((state) => state.name);
    const data = useModal((state) => state.data);
    const setData = useModal((state) => state.setData);

    if (name !== 'randomBox') return null;

    const onRandom = async () => {
        try {
            const response = await axiosClient.get('/products/random');

            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

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
                <h3 className={`title--3 ${randomBoxStyles.header}`}>
                    Random Box
                </h3>
                <p className={styles.modal__description}>
                    {data?.data?.product_description}
                </p>
                <div className={styles.modal__action}>
                    <button className={styles['modal__button-destroy']} onClick={onClose}>
                        Close
                    </button>
                    <button className={styles['modal__button-accept']} onClick={onRandom}>Random</button>
                </div>
            </div>
        </Modal>
    )
}