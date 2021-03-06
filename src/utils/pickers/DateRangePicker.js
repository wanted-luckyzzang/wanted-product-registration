import * as React from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

function DateRangeInputPicker({ setPeriod }) {
	const [value, setValue] = React.useState([null, null]);

	const styled = {
		inputSytle: {
			width: "13rem",
			height: "3rem",
			textAlign: "center",
			fontWeight: "600",
			textTransform: "uppercase",
			border: "1px solid rgb(215, 215, 215)",
		},
	};

	React.useEffect(() => {
		setPeriod && setPeriod(value);
	}, [value, setPeriod]);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateRangePicker
				value={value}
				inputFormat={"yyyy.MM.dd yy:mm"}
				mask={"____.__.__ __:__"}
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

export default React.memo(DateRangeInputPicker);
