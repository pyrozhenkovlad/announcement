import "antd/dist/antd.css";
import { useState } from "react";
import { Card, Comment, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "./Modal";

import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Announcement = (props) => {
	const { data, list, setList, mode } = props;
	const navigate = useNavigate();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [id, setId] = useState("");
	const [form, setForm] = useState({
		title: "",
		user: "",
		description: "",
	});



	const handleDelete = (event) => {
		const id = event.currentTarget.id;
		setId(id);
		const newData = list.filter((el) => id != el.id);
		localStorage.setItem("data", JSON.stringify(newData));
		setList(newData);
	};

	const handleEdit = (event) => {
		setIsModalVisible(true);
		const id = event.currentTarget.id;
		setId(id);
		const post = list.filter((el) => id == el.id)[0];
		setForm({
			title: post.title,
			user: post.user,
			description: post.description,
		});
	};

	return (
		<>
			<Card
				key={Date.now()}
				hoverable
				cover={
					<img 
					    id={`${data.id}`}
						alt={data.alt}
						src={data.src}
						style={{ height: 300, width: "100%" }}
						onClick={(event) => {
					
							if( mode==='homePage' ){
								navigate(`/post/${event.currentTarget.id}`);
							}
							
						}}
					/>
				}
				style={{ marginTop: 20, width: 300 }}
				actions={
					mode === "homePage"
						? [
								<DeleteOutlined
									key='delete'
									id={`${data.id}`}
									onClick={handleDelete}
								/>,
								<EditOutlined
									key='edit'
									id={`${data.id}`}
									onClick={handleEdit}
								/>,
						  ]
						: null
				}
			>
				<Meta
					style={{ wordWrap: "break-word" }}
					title={data.title}
					description={data.description}
				/>

				<Comment
					author={<h3>{data.user}</h3>}
					avatar={
						<Avatar
							src='https://joeschmoe.io/api/v1/random'
							alt='User avatar'
						/>
					}
					content={<h5> {data.time} </h5>}
				/>
			</Card>
			<Modal
				id={id}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				list={list}
				setList={setList}
				form={form}
				setForm={setForm}
			/>
		</>
	);
};

export default Announcement;
