import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { render } from 'react-dom';
import { colors } from './colors';

export default class SelectColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "",
      colors: [...colors]
    }
  }

  handleChange = (event) => {
    this.setState({ color: event.target.value });
    this.props.setColor(event.target.value)
  };


  render() {
    const { color, colors } = this.state

    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={color}
            onChange={this.handleChange}
            label="Color"
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {colors.map(el => <MenuItem value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
  }
}