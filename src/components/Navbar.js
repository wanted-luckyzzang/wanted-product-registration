import { Grid, Button } from 'common';
import { useNavigate } from 'react-router';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        width="12rem"
        position="sticky"
        borderBottom="1px solid #E3E3E3"
        margin="0"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '60%',
          }}
        >
          <Button
            height="43.5px"
            _onClick={() => navigate(`/`)}
            border="none"
            borderBottom="1px solid #E3E3E3"
          >
            노출 및 판매기간 설정
          </Button>
          <Button border="none" borderBottom="1px solid #E3E3E3">
            상품 기본 정보
          </Button>
          <Button
            border="none"
            borderBottom="1px solid #E3E3E3"
            _onClick={() => navigate(`/productoption`)}
          >
            상품 옵션
          </Button>
          <Button
            border="none"
            borderBottom="1px solid #E3E3E3"
            _onClick={() => navigate(`/imageselect`)}
          >
            상품 등록
          </Button>
          <Button
            border="none"
            borderBottom="1px solid #E3E3E3"
            _onClick={() => navigate(`/noticeInfo`)}
          >
            상품 정보 고시
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default Navbar;
