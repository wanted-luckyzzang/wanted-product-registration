import styled from 'styled-components';
import { text } from 'styles/palette';

export default function Text(props) {
  const { size, bold, color, children } = props;

  const styles = {
    size,
    bold,
    color,
  };

  return <ElText {...styles}>{children}</ElText>;
}

Text.defaultProps = {
  size: '14px',
  bold: false,
  color: text.default,
};

const ElText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  color: ${(props) => props.color};
`;
