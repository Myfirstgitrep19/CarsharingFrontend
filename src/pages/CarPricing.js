import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import api,{API_TYPES} from "../actions/api";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Klasa A - małolitrażowa ',
    price: '69 zł ',
    description: ['Hyundai i10', 
                  'Fiat Panda', 
  ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
  {
    title: 'Klasa B - miejska',
    subheader: 'Najbardziej popularny',
    price: ' 89 zł',
    description: ['Ranult Clio', 
                  'Peugeot 208', 
  ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
  {
    title: 'Klasa C - kompaktowa',
    price: ' 109 zł',
    description: ['Seat Leon', 
    'Volkswagen Golf',
    'Toyota Corolla',
    

  ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
 
  {
    title: 'Klasa D - średnia',
    price: ' 149 zł ',
    description: [
      'Toyota Avensis',
      'Skoda Octavia',
      
    ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
  {
    title: 'Klasa E ',
    price: ' 179 zł',
    description: ['Peugeot 508', 
  ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
  {
    title: 'Klasa F - SUV',
    price: ' 299 zł ',
    description: [
      'Hyundai ix35',
      
      
      
    ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
/**
 * 
 */
export default function Pricing(props) {
  const classes = useStyles();
  const [carDesc, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(props.match.params.id);
      const request = await api.request(API_TYPES.CAR).fetchAll();
      console.log(request.data);
      
      setData(request.data);
      console.log(request.data);
    };
  
    fetchData();
  }, []);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Cena wypożyczenia
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Zachęcamy do zapoznania się z naszym cennikiem. Przygotowaliśmy dla Państwa wspaniałą ofertę, która pozwala na komfortowe podróżowane przy zachowaniu bardzo niskich kosztów.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {carDesc.map((car) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={car.idCar} xs={12}  md={4}>
              <Card>
                <CardHeader
                  title={car.model}
                  subheader={car.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={car.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {car.priceDay}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /za dobę
                    </Typography>
                  </div>
                  <ul>
                    {car.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={car.buttonVariant} color="primary">
                    {car.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
      {/* End footer */}
    </React.Fragment>
  );
}