import "antd/dist/antd.css";
import { Input, Button } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const InfoStep = (props) => {
	const { step, setStep, newItem, setNewItem } = props;
	const [userInfo, setUserInfo] = useState({
		title: "",
		user: "",
		description: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setNewItem({ ...newItem, ...userInfo });
		setStep(step + 1);
	};

	return (
		<>
			<center>
				<h1> Step2 : Info </h1>

				<form onSubmit={handleSubmit}>
					<Input
						style={{ width: "55%", margin: 10 }}
						placeholder='Title'
						required
						maxLength={20}
						onChange={(event) => {
							setUserInfo({ ...userInfo, title: event.currentTarget.value });
						}}
					/>
					<Input
						maxLength={20}
						style={{ width: "55%", margin: 10 }}
						placeholder='User'
						required
						onChange={(event) => {
							setUserInfo({ ...userInfo, user: event.currentTarget.value });
						}}
					/>
					<TextArea
						required
						placeholder='Description'
						autoSize={{ minRows: 2, maxRows: 6 }}
						style={{ width: "55%", margin: 10 }}
						maxLength={256}
						onChange={(event) => {
							setUserInfo({
								...userInfo,
								description: event.currentTarget.value,
							});
						}}
					></TextArea>
					<br />
					<Button
						type='primary'
						danger
						style={{ width: 150, margin: "0 auto", marginTop: 20 }}
						onClick={() => {
							setStep(step - 1);
						}}
					>
						Previous
					</Button>
					<Button
						htmlType='submit'
						type='primary'
						style={{
							width: 150,
							margin: "0 auto",
							marginTop: 20,
							marginLeft: 20,
						}}
					>
						Done
					</Button>
				</form>
			</center>
		</>
	);
};
export default InfoStep;
