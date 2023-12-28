import React, { useState } from 'react';
import Modal from './Modal';
import styles from './modal.module.css';
import randomBoxStyles from './RandomBoxModal.module.css'
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../hook/useModal';
import { axiosClient } from '../../api/axios';
import Card from '../card/Card';
import Button from '../button/Button';

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
                <div className={`center ${randomBoxStyles.card}`}>
                    {data && <Card product={{
                        title: data?.data.title,
                        image_urls: {
                            image_url_0: data?.data.image_urls.image_url_0,
                        },
                        pRate: 5,
                        price: data?.data.price,
                        specific_type: data?.data.specific_type
                    }} />}
                </div>
                <div className={styles.modal__action}>
                    <Button type="btn2 secondary--2" onClick={onClose}>
                        Đóng
                    </Button>
                    <Button type="btn2 primary" onClick={onRandom}>Random</Button>
                </div>
            </div>
        </Modal>
    )
}