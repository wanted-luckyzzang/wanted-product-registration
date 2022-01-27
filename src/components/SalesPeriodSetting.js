import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "common";
import DateRangeInputPicker from "utils/pickers/DateRangePicker";

export const SalesPeriodSetting = (props) => {
	const [radioBtnChecked, setRadioBtnChecked] = useState(false);
	const radioBtnClickedHandler = () => {
		setRadioBtnChecked(() => !radioBtnChecked);
	};

	return (
		<Grid width="60rem" margin="20px auto 20px" border isFlex column>
			<Grid height="48px" isFlex align="center" borderBottom>
				노출 및 판매기간 설정
			</Grid>
			<Grid isFlex height="13rem" borderBottom="1px solid black">
				<Grid width="10rem" borderRight>
					상품 노출 기한
				</Grid>
				<Grid width="50rem" borderRight isFlex column>
					<div>
						<input
							type="radio"
							value="radioBtnChecked"
							checked={radioBtnChecked}
							onClick={radioBtnClickedHandler}
							readOnly
						/>
						<span>제한 없음</span>
					</div>
					<div>
						<input type="radio" />
						<span>미노출</span>
					</div>
					<div>
						<input type="radio" />
						<span>노출 기간 설정</span>
					</div>
					<DateRangeInputPicker />
				</Grid>
			</Grid>
			<Grid isFlex height="13rem">
				<Grid width="10rem" borderRight>
					상품 판매 기한
				</Grid>
				<Grid width="50rem" borderRight isFlex column>
					<div>
						<input type="radio" />
						<span>제한 없음</span>
					</div>
					<div>
						<input type="radio" />
						<span>미판매</span>
					</div>
					<div>
						<input type="radio" />
						<span>판매 기간 설정</span>
					</div>
					<DateRangeInputPicker />
				</Grid>
			</Grid>
		</Grid>
	);
};
