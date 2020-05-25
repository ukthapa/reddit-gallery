import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
// import { DataContextConsumer } from '../contexts/DataContext';

const useStyles = makeStyles((theme) => ({
	button: {
	  display: 'block',
	  marginTop: theme.spacing(2),
	},
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 120,
	},
  }));

class Filter extends Component {
	state = {
		sortOrder: '',
  		sortOrders: ['Assending', 'Descending']
	}
	render() {
		return (
			<Box component="div" m={12}>
				<FormControl
					onChange={() => setTimeout(() => this.props.updateFilter(this.state), 0)}
				>
				<InputLabel htmlFor="age-native-simple">
					Sort by Title:
				</InputLabel>
				<NativeSelect id="sortorder"
					className="form-select"
					value ={this.state.sortOrder}
					onChange={event => this.setState({ sortOrder: event.target.value })}
				>
					<option aria-label="None" value="">Choose...</option>
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

export default Filter
