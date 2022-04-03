import { Steps } from "antd";
import { useState } from "react";

const { Step } = Steps;

const Progress = (props) => {
	const { step } = props;

	return (
		<Steps
			direction='vertical'
			current={step}
			style={{ marginTop: 50, height: "80%" }}
		>
			<Step title='Step 1' description='Choose photo' />
			<Step title='Step 2' description='Info' />
			<Step title='Step 3' description='Finish.' />
		</Steps>
	);
};

export default Progress;
