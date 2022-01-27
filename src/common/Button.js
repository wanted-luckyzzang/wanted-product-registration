import styled from 'styled-components';
import { bg, text, border } from 'styles/palette';

export default function Button(props) {
  const { width, height, margin, bg, color, border, children, _onClick } = props;

  const styles = {
    width,
    height,
    margin,
    bg,
    color,
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
  height: '40px',
  bg: bg.primary,
  color: text.default,
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
  border: 1px solid ${border.button};
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 4px;
`;
