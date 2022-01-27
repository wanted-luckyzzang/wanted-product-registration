import React from "react";
import { Grid, Checkbox, Text, Button } from "common";
import { bg } from "styles/palette";

export const Category = (props) => {
	return (
		<Grid width="40rem" margin="1rem auto 1rem" border isFlex column>
			<Grid height="3rem" isFlex align="center" borderBottom>
				<Text bold>상품 기본 정보</Text>
			</Grid>
			<Grid isFlex height="20rem">
				<Grid width="10rem" borderRight bg={bg.category}>
					카테고리 *
				</Grid>
				<Grid isFlex padding="0.8rem">
					<Grid
						width="18rem"
						height="18rem"
						border
						padding="0.8rem 1.2rem"
						margin="0 1rem 0 0"
						radius
						auto
					>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
						<Grid isFlex align="center" margin="0 0 0.6rem">
							<Checkbox />
							<Text>카테고리명</Text>
						</Grid>
					</Grid>

					<Grid width="14rem" border padding="0.8rem 1.2rem" radius auto>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
						<Button>선택한 카테고리명</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
