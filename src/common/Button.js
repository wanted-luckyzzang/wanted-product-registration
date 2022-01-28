import styled from 'styled-components';
import icon from 'Assets/deleteIcon.png';
import { bg, text, border } from 'styles/palette';

export default function Button(props) {
  const { width, height, margin, bg, color, border, children, _onClick, type, sx, onClick } = props;

  const styles = {
    width,
    height,
    margin,
    bg,
    color,
    border,
  };

  return (
    <>
      {type === 'button' ? (
        <ElButton {...styles} type={type} onClick={_onClick}>
          {children}
        </ElButton>
      ) : (
        <div
          style={{
            width: '1.3rem',
            height: '1.3rem',
            borderRadius: '50%',
            border: '1px solid #e3e3e3',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            ...sx,
          }}
          onClick={onClick}
        >
          <img src={icon} style={{ width: '1.1rem' }} />
        </div>
      )}
    </>
  );
}

Button.defaultProps = {
  width: '100%',
  height: '40px',
  children: null,
  bg: '#fff',
  color: '#000',
  type: 'button',
  border: 'red',
  _onClick: () => {},
};

const ElButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.color ? `color: ${props.color}` : '')}
  ${(props) => (props.bg ? `background: ${props.bg}` : '')};
  ${(props) => (props.border ? `border: 1px solid ${props.border}` : '')}
  border-radius: 4px;
`;
