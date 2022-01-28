import styled from "styled-components";
import { bg, text, border } from "styles/palette";

export default function Button(props) {
	const {
		width,
		height,
		margin,
		bg,
		color,
		border,
		children,
		_onClick,
		fontWeight,
		bold,
	} = props;

	const styles = {
		width,
		height,
		margin,
		bg,
		color,
		border,
		fontWeight,
		bold,
	};

	return (
		<ElButton {...styles} onClick={_onClick}>
			{children}
		</ElButton>
	);
}

Button.defaultProps = {
	width: "100%",
	height: "40px",
	bg: bg.primary,
	color: "#fff",
	margin: "0",
	border: "",
	children: null,
	type: "button",
	_onClick: () => {},
};

const ElButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	border: ${(props) => props.border};
	background: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight};
	border-radius: 4px;
	font-weight: ${(props) => (props.bold ? "700" : "400")};
`;
