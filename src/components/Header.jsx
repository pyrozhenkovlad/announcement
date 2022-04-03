import "antd/dist/antd.css";
import { Layout, Row, Col, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const { Header } = Layout;
const { Search } = Input;

const HeaderContainer = (props) => {
	const { disabled, data, setViewData ,mode} = props;
	const [text, setText] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (!text && !mode) {
			setViewData(data);
			return;
		}
		if (!disabled) {
			compareTitle();
		}
	}, [text]);

	const compareTitle = () => {
		const newViewData = data.filter((el) => {
			if (!text) {
				return el;
			} else {
				return el.title.toLowerCase().includes(text.toLowerCase());
			}
		});
		
		setViewData(newViewData);
	};


	return (
		<Header>
			<Row>
				<Col span={6}>
					<h1 style={{ color: "white" }}>Announcement Website </h1>{" "}
				</Col>
				<Col span={9} style={{ color: "white" }}>
					<center>
						<Search
							disabled={disabled}
							style={{ marginTop: 15, width: "60%" }}
							placeholder='input search text'
							enterButton
							onChange={(event) => {
								setText(event.currentTarget.value);
							}}
						/>
					</center>
				</Col>
				<Col span={3}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: 15,
						}}
					>
						<Button
							type='link'
							onClick={() => {
								navigate("/");
							}}
						>
							<h3 style={{ color: "white" }}> Home</h3>
						</Button>
						<Button
							type='link'
							onClick={() => {
								navigate("/create");
							}}
						>
							<h3 style={{ color: "white" }}> Add Post</h3>
						</Button>
					</div>
				</Col>

				<Col span={6}>
					<center>
						<h4 style={{ color: "white" }}>Developer : Vladyslav Pyrozhenko</h4>
					</center>
				</Col>
			</Row>
		</Header>
	);
};
export default HeaderContainer;
