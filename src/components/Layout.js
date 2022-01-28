import React from "react";
import { Grid } from "common";
import { Header, SubHeader, Navbar } from "components";

const Layout = ({ children }) => {
	const ProductNoticeInfoSubmitHandler = () => {
		console.log("gg");
	};

	return (
		<Grid width="72rem" isFlex column margin="auto">
			<Header />
			<Grid isFlex>
				<Navbar />
				<Grid width="60rem" isFlex column>
					<SubHeader
						ProductNoticeInfoSubmitHandler={ProductNoticeInfoSubmitHandler}
					/>
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Layout;
