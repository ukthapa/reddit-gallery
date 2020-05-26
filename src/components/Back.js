import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Back = ({ history }) =>
  history.length > 1 && (
		<IconButton color="primary" aria-label="back" onClick={history.goBack}><ArrowBackIcon/></IconButton>
  );

export default withRouter(Back);
