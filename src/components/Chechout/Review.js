import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
  },

  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

/**
 *
 */
export default function Review(props) {
  const classes = useStyles();

  const products = [
    {
      name: `${props.value.CarDesc.model} ${props.value.CarDesc.yofProd}`,
      desc: `${props.value.CarDesc.color}`,
      price: props.value.CarDesc.priceDay,
    },
  ];
  const addresses = [
    props.value.address1,
    props.value.address2,
    props.value.city,
    props.value.zip,
    props.value.country,
  ];

  let days = new Date(props.value.endDate) - new Date(props.value.startDate);
  days = days / (1000 * 3600 * 24);
  console.log(days);
  console.log(props.value);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              {props.value.CarDesc.priceDay * days}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>
              {props.value.firstName} {props.value.lastName}{" "}
            </Typography>
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </Container>
  );
}
