import "antd/dist/antd.css";
import { Row, Col, Card } from "antd";
import { useState } from "react";
import moment from "moment";
import ChoosePhoto from "../components/ChoosePhoto";
import Progress from "../components/Progress";
import Header from "../components/Header";
import InfoStep from "../components/InfoStep";
import { v4 as uuidv4 } from "uuid";
import LastStep from "../components/LastStep";

const CreatePost = () => {
	const [step, setStep] = useState(0);
	const [newItem, setNewItem] = useState({
		src: "",
		alt: "",
		title: "",
		user: "",
		description: "",
		id: uuidv4(),
		time: moment().format("MMMM Do YYYY, h:mm a"),
		isEdit: false,
	});

	const switchStep = () => {
		switch (step) {
			case 0:
				return (
					<ChoosePhoto
						step={step}
						setStep={setStep}
						newItem={newItem}
						setNewItem={setNewItem}
					/>
				);
			case 1:
				return (
					<InfoStep
						step={step}
						setStep={setStep}
						newItem={newItem}
						setNewItem={setNewItem}
					/>
				);
			case 2:
				return <LastStep newItem={newItem} />;
		}
	};

	return (
		<>
			<Header disabled={true} data={null} setViewData={() => null} />
			<Row>
				<Col span={12}>
					<Card
						style={{
							height: 500,
							width: "80%",
							margin: "0 auto",
							marginTop: 50,
						}}
						cover={<>{switchStep()}</>}
					></Card>
				</Col>
				<Col span={12}>
					<Progress step={step} />
				</Col>
			</Row>
		</>
	);
};
export default CreatePost;
