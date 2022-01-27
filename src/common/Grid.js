import React from 'react';
import styled from 'styled-components';
import { border } from 'styles/palette';

const Grid = (props) => {
  const { width, height, padding, margin, isFlex, column, justify, align, bg, border, borderBottom, borderRight, children } = props;

  const styles = {
    width,
    height,
    padding,
    margin,
    isFlex,
    column,
    justify,
    align,
    bg,
    border,
    borderBottom,
    borderRight,
  };

  return <ElGrid {...styles}>{children}</ElGrid>;
};

Grid.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '',
  margin: '',
  isFlex: false,
  column: false,
  justify: '',
  align: '',
  bg: '#fff',
  border: false,
  borderBottom: false,
  borderRight: false,
};

const ElGrid = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.isFlex ? 'display: flex;' : '')}
  ${(props) => (props.column ? 'flex-direction: column;' : '')}
	${(props) => `justify-content: ${props.justify};`};
  ${(props) => `align-items: ${props.align};`};
  background: ${(props) => props.bg};
  ${(props) => (props.border ? `border: 2px solid ${border.primary};` : '')};
  ${(props) => (props.borderBottom ? `border-bottom: 1px solid ${border.primary};` : '')};
  ${(props) => (props.borderRight ? `border-right: 1px solid ${border.primary};` : '')};
`;

export default Grid;
