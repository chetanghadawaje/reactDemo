import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const handleChangeCompanyName = (event) => {
  console.log(event.target.value)
};

const handleSaveButton = () =>{
  console.log("Test")
};

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="id_company_name_lable">Company Name</InputLabel>
        <Select
          labelId="id_company_name_lable"
          id="id_company_name"
          onChange={handleChangeCompanyName}
        >
          <MenuItem value={'Apple'}>Apple</MenuItem>
          <MenuItem value={'Samsung'}>Samsung</MenuItem>
          <MenuItem value={'MI'}>MI</MenuItem>
        </Select>
      </FormControl>
      <TextField id="id_device_name" label="Device Name" variant="outlined" />
      <TextField id="id_device_modal" label="Device Modal" variant="outlined" />
      <Button id="id_save" variant="contained" color="primary" onClick={handleSaveButton}>
        Save
        </Button>
    </form>
  );
}
