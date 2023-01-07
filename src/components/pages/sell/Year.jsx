import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { render } from 'react-dom';
import { years } from './years';

export default class SelectYear extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: "",
      years: [...years]
    }
  }

  handleChange = (event) => {
    this.setState({ year: event.target.value });
    this.props.setYear(event.target.value)
  };


  render() {
    const { year, years } = this.state

    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={year}
            onChange={this.handleChange}
            label="Year"
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {years.map(el => <MenuItem value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
  }
}