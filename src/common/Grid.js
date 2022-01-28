import React from 'react';
import styled from 'styled-components';
import { border } from 'styles/palette';
const Grid = (props) => {
  const {
    width,
    height,
    padding,
    margin,
    position,
    top,
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
    _ref,
    _onSubmit,
    gridType,
    marginBottom,
    cursor,
    _onClick,
  } = props;
  const styles = {
    width,
    height,
    padding,
    margin,
    position,
    top,
    isFlex,
    isWrap,
    column,
    justify,
    align,
    bg,
    radius,
    border,
    _ref,
    borderBottom,
    borderRight,
    scrollY,
    children,
    marginBottom,
    cursor,
  };
  return gridType === 'form' ? (
    <ElForm {...styles} onSubmit={_onSubmit}>
      {children}
    </ElForm>
  ) : (
    <ElGrid {...styles} onClick={_onClick} ref={_ref}>
      {children}
    </ElGrid>
  );
};
Grid.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '',
  margin: '',
  isFlex: false,
  isWrap: '',
  column: false,
  justify: '',
  align: '',
  bg: '#fff',
  radius: '',
  _ref: null,
  border: false,
  borderBottom: false,
  borderRight: false,
  scrollY: false,
  cursor: '',
  _onClick: () => {},
};
const ElGrid = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.isFlex ? 'display: flex;' : '')}
  ${(props) => (props.isWrap ? 'flex-wrap: wrap;' : '')}
  ${(props) => (props.column ? 'flex-direction: column;' : '')}
  ${(props) => `justify-content: ${props.justify};`};
  ${(props) => `align-items: ${props.align};`};
  background: ${(props) => props.bg};
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')}
  ${(props) => (props.border ? `border: 1px solid ${border.primary};` : '')};
  ${(props) =>
    props.borderBottom ? `border-bottom: 1px solid ${border.primary};` : ''};
  ${(props) =>
    props.borderRight ? `border-right: 1px solid ${border.primary};` : ''};
  ${(props) =>
    props.scrollY
      ? `overflow: scroll;
      &::-webkit-scrollbar{width:8px; height:0px; background: rgba(255,255,255,0.4)};
      &::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.4); border-radius:6px;};`
      : ''};
  margin-bottom: ${(props) => props.marginBottom};
  cursor: ${(props) => props.cursor};
`;
const ElForm = styled.form`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.isFlex ? 'display: flex;' : '')}
  ${(props) => (props.column ? 'flex-direction: column;' : '')}
  ${(props) => `justify-content: ${props.justify};`};
  ${(props) => `align-items: ${props.align};`};
  background: ${(props) => props.bg};
  ${(props) => (props.border ? `border: 2px solid ${border.primary};` : '')};
`;
export default Grid;
