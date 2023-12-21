import { useState } from "react";
import Button from "../button/Button";
import styles from './ContactForm.module.css'

const ContactForm = ({ onSubmit }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [textArea, setTextArea] = useState('');

	return (
		<>
			<div className={styles.content__contactInputs}>
				<input placeholder='Họ Và Tên' type="text" className={`${styles.content__contactInput} body--2`} value={name} onChange={(ev) => setName(ev.target.value)} />
				<input placeholder='Email' type="email" className={`${styles.content__contactInput} body--2`} value={email} onChange={(ev) => setEmail(ev.target.value)} />
			</div>
			<div className={styles.center}>
				<textarea rows={5} placeholder='Nội dung' className={`${styles.content__contactTextarea} body--2`} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
			</div>
			<div className={styles.submitBtn}>
                <Button onSubmit={() => onSubmit(name, email, textArea)} type='btn1 primary'>
                    Gửi cho chúng tôi
                </Button>
            </div>
		</>
	)
}

export default ContactForm;