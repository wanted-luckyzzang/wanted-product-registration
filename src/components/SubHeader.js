import { Grid, Text } from 'common';

const SubHeader = () => {
  return (
    <Grid padding="0 1rem" justify="space-between" isFlex>
      <Text size="1.1rem" bold lineHeight="2rem">
        상품 등록
      </Text>
      <Button width="6rem" height="2rem" bg="#352f6e">
        <Text color="#FFFFFF" size="0.9rem">
          저장하기
        </Text>
      </Button>
    </Grid>
  );
};

export default SubHeader;
