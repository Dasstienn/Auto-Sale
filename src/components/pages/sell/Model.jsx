import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { render } from 'react-dom';
import { cars } from './cars';

export default class SelectModel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      model: "",
      models: []
    }
  }

  componentDidMount() {
    this.setState({ models: [...cars.filter(el => el.brand === this.props.make)[0].models] })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.make !== this.props.make) {
      this.setState({ models: [...cars.filter(el => el.brand === this.props.make)[0].models] })
    }
  }

  handleChange = (event) => {
    this.setState({ model: event.target.value });
    this.props.setModel(event.target.value)
  };



  render() {
    const { model, models } = this.state

    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={model}
            onChange={this.handleChange}
            label="Model"
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {models.map(el => <MenuItem value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
  }
}