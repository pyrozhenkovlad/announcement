import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import { Row, Col } from "antd";

const Home = (props) => {
	const { data, setData } = props;
	const [viewData, setViewData] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("data"));
		if (data) {
			setViewData([...data]);
			setData([...data]);
		}
	}, []);

	return (
		<>
			<Header disabled={false} data={data} setViewData={setViewData} />
			<Row>
				{viewData.map((el) => (
					<Col span={5} offset={1}>
						<Announcement
							data={el}
							list={viewData}
							setList={setViewData}
							mode={"homePage"}
						/>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Home;
