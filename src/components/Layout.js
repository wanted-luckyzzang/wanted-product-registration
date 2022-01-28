import React from "react";
import { Grid } from "common";
import { Header, SubHeader, Navbar } from "components";

const Layout = ({ children }) => {
	return (
		<Grid width="72rem" isFlex column margin="auto">
			<Header />
			<Grid isFlex>
				<Navbar />
				<Grid width="60rem" isFlex column>
					<SubHeader />
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Layout;
