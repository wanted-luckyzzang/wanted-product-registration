import styled from "styled-components";
import icon from "assets/deleteIcon.png";
import { border } from "styles/palette";
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
		type,
		sx,
		borderBottom,
		borderTop,
		position,
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
		borderBottom,
		borderTop,
		position,
	};

	return (
		<>
			{type === "delete" && (
				<div
					style={{
						width: "1.3rem",
						height: "1.3rem",
						borderRadius: "50%",
						border: "1px solid #e3e3e3",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
						...sx,
					}}
					onClick={_onClick}
				>
					<img src={icon} style={{ width: "1.1rem" }} alt="product" />
				</div>
			)}
			{type === "nav" ? (
				<ElNavBtn {...styles} onClick={_onClick}>
					{children}
				</ElNavBtn>
			) : (
				<ElButton {...styles} type={type} onClick={_onClick}>
					{children}
				</ElButton>
			)}
		</>
	);
}

Button.defaultProps = {
	width: "100%",
	height: "40px",
	children: null,
	bg: "#fff",
	color: "#000",
	type: "button",
	border: "1px solid #e3e3e3",
	_onClick: () => {},
	borderBottom: "1px solid #e3e3e3",
};

const ElButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) => props.margin && `margin: ${props.margin};`};
	${(props) => props.color && `color: ${props.color};`};
	${(props) => props.bg && `background: ${props.bg};`};
	${(props) => (props.border ? `border: 1px solid ${border.primary};` : "")};
	border-radius: 4px;
	font-weight: ${(props) => (props.bold ? "700" : "400")};
	${(props) =>
		props.borderBottom ? `border-bottom: 1px solid ${border.primary};` : ""};
`;

const ElNavBtn = styled.button`
	display: flex;
	justify-content: space-between;
	height: 2.05rem;
	width: 100%;
	border-bottom: 1px solid #e3e3e3;
	line-height: 2rem;
	text-indent: 1.2rem;
	position: relative;
`;
