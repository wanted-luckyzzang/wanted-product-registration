import React from "react";
import styled from "styled-components";

const Input = (props) => {
	const {
		width,
		padding,
		margin,
		type,
		radio,
		checked,
		placeholder,
		onChange,
		height,
	} = props;

	const styles = {
		width,
		padding,
		margin,
		height,
	};

	return (
		<ElInput
			{...styles}
			radio={radio}
			type={type}
			checked={checked}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

Input.defaultProps = {
	width: "100%",
	height: "40px",
	padding: "",
	margin: "0",
	checked: false,
	radio: false,
	placeholder: "",
	_onChange: () => {},
};

const ElInput = styled.input`
	width: ${(props) => props.width};
	${(props) => (props.height ? `height: ${props.height};` : "40px")}
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	border: 1px solid #ebebeb;
	border-radius: 4px;
`;

export default Input;
