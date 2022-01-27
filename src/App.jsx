import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Category } from "components/Category";
import "styles/App.css";
import FilterTag from "components/Filtertag";
import { SalesPeriodSetting } from "components/SalesPeriodSetting";

function App() {
	return (
		<>
			<GlobalStyle />
			<SalesPeriodSetting />
		</>
	);
}

export default App;
