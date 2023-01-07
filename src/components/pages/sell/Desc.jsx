import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class SelectDesc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      desc: ""
    }
  }

  handleChange = (event) => {
    this.setState({ desc: event.target.value });
    this.props.setDesc(event.target.value)
  };


  render() {
    const { desc } = this.state

    return (
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-multiline-static"
            label="Description (50 to 70 characters)"
            multiline
            rows={3}
            defaultValue=""
            placeholder='Add your description'
            variant="standard"
            minlength="50"
            maxlength="70"
            onChange={this.handleChange}
          />
        </Box>
      </>
    );
  }
}