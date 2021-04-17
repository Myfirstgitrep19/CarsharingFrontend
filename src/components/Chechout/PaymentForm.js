import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
  },
  textField: {
    width: '100%',
    padding: 15,
  },
}));

/**
 * 
 */
export default function PaymentForm(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue={new Date().toISOString()}
          name="startDate"
          className={classes.textField}
          onChange={props.onChange}
          InputLabelProps={{
            shrink: true,
            onChange: props.onChange
            // onChange={props.onChange}
          }}
        />
<TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          name="endDate"
          className={classes.textField}
          onChange={props.onChange}
          InputLabelProps={{
            shrink: true,
            onChange: props.onChange
            // onChange={props.onChange}
          }}
        />

      </form>
    </Container>
  );
}