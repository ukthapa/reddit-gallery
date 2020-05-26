import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
// import { DataContextConsumer } from '../contexts/DataContext';

const useStyles = theme => ({
	root: {
		textAlign: 'right'
	},
	button: {
	  display: 'block',
	  marginTop: theme.spacing(2),
	},
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 150,
	},
	formselect: {
		paddingRight: '56px',
	}
  });

class Filter extends Component {
	state = {
		sortOrder: '',
  		sortOrders: ['Assending', 'Descending']
	}
	render() {
		const { classes } = this.props;
		return (
			<Box component="div" className={classes.root}>
				<FormControl variant="outlined"
					className={classes.formControl}
					onChange={() => setTimeout(() => this.props.updateFilter(this.state), 0)}
				>
				<InputLabel htmlFor="sortorder">
					Sort by Title:
				</InputLabel>
				<NativeSelect id="sortorder"
					className="formselect"
					value ={this.state.sortOrder}
					onChange={event => this.setState({ sortOrder: event.target.value })}
				>
					<option aria-label="None" value="" />
					{this.state.sortOrders.map(order => (
						<option key={order} value={order.replace(' ', '').toLowerCase()}>
						{order}
						</option>
					))}
				</NativeSelect>
				</FormControl>
			</Box>
		)
	}
}

export default withStyles(useStyles) (Filter)
