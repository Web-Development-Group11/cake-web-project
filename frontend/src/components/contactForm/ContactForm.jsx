import { useState } from "react";
import Button from "../button/Button";
import styles from './ContactForm.module.css'

const ContactForm = () => {
	const [textArea, setTextArea] = useState();

	return (
		<>
			<div className={styles.content__contactInputs}>
				<input placeholder='Họ Và Tên' type="text" className={`${styles.content__contactInput} body--2`} />
				<input placeholder='Email' type="email" className={`${styles.content__contactInput} body--2`} />
			</div>
			<div className={styles.center}>
				<textarea rows={5} placeholder='Nội dung' className={`${styles.content__contactTextarea} body--2`} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
			</div>
		</>
	)
}

export default ContactForm;