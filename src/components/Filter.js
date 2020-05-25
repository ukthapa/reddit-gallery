import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Filter extends Component {
	render() {
		return (
			<Box component="div" m={1}>
				<FormControl variant="filled" className={classes.formControl}>
					<InputLabel id="sortby-label">Sort by Title</InputLabel>
					<Select
					labelId="sortby-label"
					id="sortby"
					value={}
					onChange={handleChange}
					>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={ace}>Ten</MenuItem>
					<MenuItem value={dce}>Twenty</MenuItem>
					</Select>
				</FormControl>
			</Box>
		)
	}
}

export default Filter
