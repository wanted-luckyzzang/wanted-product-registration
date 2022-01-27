import React from "react";
import styled from "styled-components";
import { border } from "styles/palette";

const Grid = (props) => {
	const {
		width,
		height,
		padding,
		margin,
		isFlex,
		isWrap,
		column,
		justify,
		align,
		bg,
		radius,
		border,
		borderBottom,
		borderRight,
		scrollY,
		children,
		_onSubmit,
		checkGrid,
	} = props;

	const styles = {
		width,
		height,
		padding,
		margin,
		isFlex,
		isWrap,
		column,
		justify,
		align,
		bg,
		radius,
		border,
		borderBottom,
		borderRight,
		scrollY,
		children,
	};

	return checkGrid === "form" ? (
		<ElForm {...styles} onSubmit={_onSubmit}>
			{children}
		</ElForm>
	) : (
		<ElGrid {...styles}>{children}</ElGrid>
	);
};

Grid.defaultProps = {
	width: "100%",
	height: "auto",
	padding: "",
	margin: "",
	isFlex: false,
	isWrap: "",
	column: false,
	justify: "",
	align: "",
	bg: "#fff",
	border: false,
	borderBottom: false,
	borderRight: false,
	scrollY: "",
};

const ElGrid = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) => (props.padding ? `padding: ${props.padding};` : "")}
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.isFlex ? "display: flex;" : "")}
  ${(props) => (props.isWrap ? "flex-wrap: wrap;" : "")}
  ${(props) => (props.column ? "flex-direction: column;" : "")}
	${(props) => `justify-content: ${props.justify};`};
	${(props) => `align-items: ${props.align};`};
	background: ${(props) => props.bg};
	${(props) => (props.border ? `border: 2px solid ${border.primary};` : "")};
	${(props) =>
		props.borderBottom ? `border-bottom: 1px solid ${border.primary};` : ""};
	${(props) =>
		props.borderRight ? `border-right: 1px solid ${border.primary};` : ""};
	${(props) =>
		props.scrollY
			? `overflow: scroll;
      &::-webkit-scrollbar{width:8px; height:0px; background: rgba(255,255,255,0.4)};
      &::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.4); border-radius:6px;};`
			: ""};
`;

const ElForm = styled.form`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) => (props.padding ? `padding: ${props.padding};` : "")}
	${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.isFlex ? "display: flex;" : "")}
  ${(props) => (props.isWrap ? "flex-wrap: wrap;" : "")}
  ${(props) => (props.column ? "flex-direction: column;" : "")}
	${(props) => `justify-content: ${props.justify};`};
	${(props) => `align-items: ${props.align};`};
	background: ${(props) => props.bg};
	${(props) => (props.border ? `border: 2px solid ${border.primary};` : "")};
	${(props) =>
		props.borderBottom ? `border-bottom: 1px solid ${border.primary};` : ""};
	${(props) =>
		props.borderRight ? `border-right: 1px solid ${border.primary};` : ""};
	${(props) =>
		props.scrollY
			? `overflow: scroll;
      &::-webkit-scrollbar{width:8px; height:0px; background: rgba(255,255,255,0.4)};
      &::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.4); border-radius:6px;};`
			: ""};
`;

export default Grid;
