import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class SelectPrice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0
    }
  }

  handleChange = (event) => {
    this.setState({ price: event.target.value });
    this.props.setPrice(event.target.value)
  };


  render() {
    const { price } = this.state

    return (
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '13.8ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-number"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={this.handleChange}
            required
          />
        </Box>
      </>
    );
  }
}