import styled from 'styled-components';
import icon from 'assets/deleteIcon.png';

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
          onClick={_onClick}
        >
          <img src={icon} style={{ width: '1.1rem' }} alt="product" />
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
  border: '1px solid #e3e3e3',
  _onClick: () => {},
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
  ${(props) => props.border && `border: 1px solid ${props.border};`};
  border-radius: 4px;
  font-weight: ${(props) => (props.bold ? '700' : '400')};
`;
