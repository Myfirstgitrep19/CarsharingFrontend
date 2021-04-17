import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LogoutButton = () => {
  // const { logout } = useAuth0();
  const classes = useStyles();
  let history = useHistory();
  function LogoutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    history.push('/');
    // logout({ returnTo: window.location.origin })
  }


  return (
    <div className={classes.root}>
      <Button variant="outlined" size="small" onClick={LogoutUser}>Wyloguj</Button></div>
  );
};

export default LogoutButton;