import * as React from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

export default function DateRangeInputPicker() {
	const [value, setValue] = React.useState([null, null]);
	const styled = {
		inputSytle: {
			width: "160px",
			height: "25px",
			textAlign: "center",
			fontWeight: "600",
			textTransform: "uppercase",
		},
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateRangePicker
				value={value}
				inputFormat={"yyyy.MM.dd yy:mm"}
				mask={"____-__-__"}
				onChange={(newValue) => setValue(newValue)}
				renderInput={(startProps, endProps) => (
					<React.Fragment>
						<input
							style={styled.inputSytle}
							ref={startProps.inputRef}
							{...startProps.inputProps}
						/>
						<Box sx={{ mx: 1 }}> ~ </Box>
						<input
							style={styled.inputSytle}
							ref={endProps.inputRef}
							{...endProps.inputProps}
						/>
					</React.Fragment>
				)}
			/>
		</LocalizationProvider>
	);
}
