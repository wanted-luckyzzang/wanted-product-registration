import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	TextField: {
		"& > div": {
			width: "120px",
			height: "40px",
		},
		"& > div > input": {
			textAlign: "center",
		},
	},
}));

export default function DatePicker() {
	const [value, setValue] = React.useState(new Date());
	const classes = useStyles();

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Stack spacing={3}>
				<MobileDatePicker
					value={value}
					inputFormat={"yyyy.MM.dd"}
					mask={"____-__-__"}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => (
						<TextField className={classes.TextField} {...params} />
					)}
				/>
			</Stack>
		</LocalizationProvider>
	);
}
