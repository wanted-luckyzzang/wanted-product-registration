import { Grid, ImageUpload, Text } from 'common';
import { FooterBtn } from 'components';

const ImageSelect = () => {
  return (
    <>
      <Grid column width="100%" padding="1rem">
        <Grid
          border="#e3e3e3"
          padding="0 0 0 0.5rem"
          height="2.5rem"
          isFlex
          align="center"
        >
          <Text size="1.3rem">상품 소개 이미지</Text>
        </Grid>
        <Grid
          border="#e3e3e3"
          width="auto"
          margin="0 0 1.2rem 0"
          padding="1rem"
        >
          <ImageUpload />
        </Grid>
      </Grid>

      <Grid column width="100%" padding="1rem">
        <Grid
          border="#e3e3e3"
          padding="0 0 0 0.5rem"
          height="2.5rem"
          isFlex
          align="center"
        >
          <Text size="1.3rem">구매자 추천 이미지</Text>
        </Grid>
        <Grid
          border="#e3e3e3"
          width="auto"
          margin="0 0 1.2rem 0"
          padding="1rem"
        >
          <ImageUpload />
        </Grid>
      </Grid>

      <FooterBtn params="noticeinfo" />
    </>
  );
};

export default ImageSelect;
