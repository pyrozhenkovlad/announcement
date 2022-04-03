import "antd/dist/antd.css";
import { Carousel, Button } from "antd";
import ChooseTitle from "./InfoStep";
import { useState } from "react";

const ChoosePhoto = (props) => {
	const { step, setStep, newItem, setNewItem } = props;
	const carouselImg = [
		{ src: "https://picsum.photos/201/300?grayscale", alt: "1" },
		{ src: "https://picsum.photos/202/300?grayscale", alt: "2" },
		{ src: "https://picsum.photos/203/300?grayscale", alt: "3" },
		{ src: "https://picsum.photos/204/300?grayscale", alt: "4" },
	];

	const [imageInfo, setImageInfo] = useState({
		src: carouselImg[0].src,
		alt: carouselImg[0].alt,
	});
	const contentStyle = {
		margin: "0 auto",
		width: "99%",
		boxSizing: "border-box",
		height: "300px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "white",
	};

	const handleChangePhoto = (current) => {
		setImageInfo({
			src: carouselImg[current].src,
			alt: carouselImg[current].alt,
		});
	};

	return (
		<>
			<center>
				<h1> Step1 : Choose photo</h1>
			</center>
			<Carousel
				infinite={false}
				afterChange={(current) => {
					handleChangePhoto(current);
				}}
			>
				{carouselImg.map((el) => (
					<>
						<div>
							<img
								style={
									(contentStyle, { width: 500, height: 300, margin: "0 auto" })
								}
								src={el.src}
								alt={el.alt}
							/>
						</div>
					</>
				))}
			</Carousel>
			<Button
				onClick={() => {
					setNewItem({ ...newItem, ...imageInfo });
					setStep(step + 1);
				}}
				type='primary'
				style={{ width: 150, margin: "0 auto", marginTop: 20 }}
			>
				Done
			</Button>
		</>
	);
};
export default ChoosePhoto;
