import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';


const Back = ({ history }) =>
  history.length > 1 && (
		<Box  position="fixed" top={80} left={10}>
			<IconButton  color="primary" aria-label="back" onClick={history.goBack}>
				<ArrowBackIcon/>
			</IconButton>
		</Box>
  );

export default withRouter(Back);
