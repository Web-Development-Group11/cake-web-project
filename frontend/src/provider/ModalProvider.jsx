import { useEffect } from 'react';
import DeleteBlogModal from '../components/modal/DeleteBlogModal'
import { useModal } from '../hook/useModal';
import RandomBoxModal from '../components/modal/RandomBoxModal';

const ModalProvider = ({ addProduct }) => {
	const isOpen = useModal((state) => state.isOpen);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen])

	return (
		<>
			<DeleteBlogModal />
			<RandomBoxModal addProduct={addProduct} />
		</>
	)
}

export default ModalProvider;