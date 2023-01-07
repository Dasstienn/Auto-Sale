import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { render } from 'react-dom';
import { categories } from './categories';

export default class SelectCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
      categories: [...categories]
    }
  }

  handleChange = (event) => {
    this.setState({ category: event.target.value });
    this.props.setCategory(event.target.value)
  };


  render() {
    const { category, categories } = this.state

    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={this.handleChange}
            label="Category"
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map(el => <MenuItem value={el}>{el[0].toUpperCase() + el.slice(1)}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
  }
}