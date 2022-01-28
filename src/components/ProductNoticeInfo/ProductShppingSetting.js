import styled from "styled-components";
import { Grid, Toggle } from "common";
import DateRangeInputPicker from "utils/pickers/DateRangePicker";
import DatePicker from "utils/pickers/DatePicker";

const PreOrderShipping = (props) => {
	return (
		<>
			<Grid isFlex column height="20rem" width="auto">
				<Grid isFlex height="10rem" width="auto" borderBottom>
					<Grid width="8rem" borderRight padding="0.5rem">
						<OptionTitle>사용자 배송일</OptionTitle>
						<OptionTitle>출발일 지정</OptionTitle>
					</Grid>
					<Toggle />
				</Grid>
				<Grid isFlex height="10rem" width="auto" borderBottom>
					<Grid width="8rem" borderRight padding="0.5rem">
						<OptionTitle>방문 수령</OptionTitle>
					</Grid>
					<Toggle />
				</Grid>
				<Grid isFlex height="25rem" width="auto">
					<Grid width="8rem" borderRight padding="0.5rem">
						<OptionTitle>선 주문</OptionTitle>
						<OptionTitle>예약 배송</OptionTitle>
					</Grid>
					<Grid width="40rem" isFlex column margin="1rem 1.5rem">
						<Options>
							<Toggle />
						</Options>
						<Grid isFlex margin="1rem 0">
							<Options>주문 시간</Options>
							<DateRangeInputPicker />
						</Grid>
						<Grid width="87%" isFlex>
							<Grid isFlex width="70%" margin="0 2rem 0 0">
								<Options>새벽 배송</Options>
								<DatePicker />
							</Grid>
							<Grid isFlex>
								<Options>일반 배송</Options>
								<DatePicker />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

const OptionTitle = styled.div`
	font-size: 0.9rem;
`;

const Options = styled.div`
	font-size: 0.9rem;
	margin-right: 1rem;
	line-height: 2.5rem;
	height: 1rem;
`;

export default PreOrderShipping;
