import styled from 'styled-components';
import { text } from 'styles/palette';

export default function Text(props) {
  const { size, bold, color, children, textAlign, textType, lineHeight, margin } = props;

  const styles = {
    size,
    bold,
    color,
    textAlign,
    lineHeight,
    margin,
  };

  return textType === 'span' ? <ElSpan {...styles}>{children}</ElSpan> : <ElText {...styles}>{children}</ElText>;
}

Text.defaultProps = {
  size: '14px',
  bold: false,
  color: text.default,
  textAlign: 'initial',
  margin: '',
};

const ElText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
`;

const ElSpan = styled.span`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  color: ${(props) => props.color};
  ${(props) => `text-align: ${props.textAlign}`};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
`;
