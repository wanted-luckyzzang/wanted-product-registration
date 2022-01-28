import React, { useState } from "react";
import styled, { css } from "styled-components";
import { bg } from "styles/palette";

const Switch = () => {
	const [checked, setChecked] = useState(false);

	return (
		<ElSwitch>
			<ToggleInput
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<Slider toggled={checked} />
		</ElSwitch>
	);
};

const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
	border-radius: 2.2rem;
	background: ${(props) =>
		props.toggled ? bg.switchSlide : bg.switchBeforeSlide};

	&::before {
		position: absolute;
		content: "";
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		left: -0.4rem;
		bottom: -0.2rem;
		background: ${(props) =>
			props.toggled ? bg.switchBtn : bg.switchBeforeBtn};
		transition: 0.4s;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		${(props) =>
			props.toggled &&
			css`
				transform: translateX(26px);
			`}
	}
`;

const ElSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 2.4rem;
	height: 1rem;
	margin: 0 auto;
`;

const ToggleInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;

export default Switch;
