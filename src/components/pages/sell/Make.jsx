import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { render } from 'react-dom';
import { cars } from './cars';

export default class SelectMake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      make: "",
      makes: [...cars.map(el => el.brand)]
    }
  }

  handleChange = (event) => {
    this.setState({ make: event.target.value });
    this.props.setMake(event.target.value)
  };


  render() {
    const { make, makes } = this.state
    console.log(this.state.makes)

    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Make</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={make}
            onChange={this.handleChange}
            label="Make"
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {makes.map(el => <MenuItem value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
  }
}