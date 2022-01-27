import styled from 'styled-components';
import { border } from 'styles/palette';

export default function Button(props) {
  const { width, height, bg, color, margin, border, children, _onClick } = props;

  const styles = {
    width,
    height,
    bg,
    color,
    margin,
    border,
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {children}
    </ElButton>
  );
}

Button.defaultProps = {
  width: '100%',
  height: '54px',
  bg: border.primary,
  color: '#fff',
  disable: false,
  margin: '0',
  border: '',
  children: null,
  type: 'button',
  _onClick: () => {},
};

const ElButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: 1px solid ${(props) => props.border};
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 4px;
`;
