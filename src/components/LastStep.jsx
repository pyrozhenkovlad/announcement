import "antd/dist/antd.css";
import { Spin, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LastStep = (props) => {
	const { newItem } = props;

	const navigate = useNavigate();
	useEffect(() => {
		const currentData = JSON.parse(localStorage.getItem("data"));
		const newData = currentData ? [newItem, ...currentData] : [newItem];
		localStorage.setItem("data", JSON.stringify(newData));

		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, []);

	return <Spin size='large' style={{ paddingTop: "40%" }} />;
};
export default LastStep;
