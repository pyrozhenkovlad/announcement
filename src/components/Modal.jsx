import "antd/dist/antd.css";
import { Modal as ModalWindow, Input } from "antd";

const { TextArea } = Input;

const Modal = (props) => {
	const {
		id,
		isModalVisible,
		setIsModalVisible,
		list,
		setList,
		form,
		setForm,
	} = props;

	const handleOk = () => {
		const newData = list.map((el) => {
			if (id == el.id) {
				return {
					alt: el.alt,
					description: form.description,
					id,
					src: el.src,
					title: form.title,
					user: form.user,
					isEdit: true,
					time: `${el.time} ${el.isEdit ? "" : "(edit)"} `,
				};
			}
			return el;
		});

		localStorage.setItem("data", JSON.stringify(newData));
		setList(newData);
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<ModalWindow
			title='Edit'
			visible={isModalVisible}
			onOk={handleOk}
			onCancel={handleCancel}
		>
			<center>
				<form>
					<Input
						value={form.title}
						style={{ width: "55%", margin: 10 }}
						placeholder='Title'
						required
						maxLength={20}
						onChange={(event) => {
							setForm({ ...form, title: event.currentTarget.value });
						}}
					/>
					<Input
						value={form.user}
						maxLength={20}
						style={{ width: "55%", margin: 10 }}
						placeholder='User'
						required
						onChange={(event) => {
							setForm({ ...form, user: event.currentTarget.value });
						}}
					/>
					<TextArea
						value={form.description}
						required
						placeholder='Description'
						autoSize={{ minRows: 2, maxRows: 6 }}
						style={{ width: "55%", margin: 10 }}
						maxLength={256}
						onChange={(event) => {
							setForm({
								...form,
								description: event.currentTarget.value,
							});
						}}
					></TextArea>
				</form>
			</center>
		</ModalWindow>
	);
};

export default Modal;
