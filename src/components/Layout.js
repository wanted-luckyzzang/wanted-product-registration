import React, { useState } from "react";
import { Grid } from "common";
import { Header, SubHeader, Navbar } from "components";

const Layout = ({ children, clickFlag, setClickFlag }) => {
	return (
		<Grid width="72rem" isFlex column margin="auto">
			<Header />
			<Grid isFlex>
				<Navbar />
				<Grid width="60rem" isFlex column>
					<SubHeader clickFlag={clickFlag} setClickFlag={setClickFlag} />
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Layout;
