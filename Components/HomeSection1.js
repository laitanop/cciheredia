import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: '100px',
    
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit *5,
    marginLeft: '250px',
    marginRight: '250px',
    
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
  paperLeft: {
    padding: theme.spacing.unit * 2,
    marginLeft: '-50px',
    paddingBottom: '300px',
    color: '#fff',
    backgroundColor: '#0657A5',
    
  },
  paperLeftTitle: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#FF5722',
 
    
  },
  paperLeftParagraph: {
    color: '#fff',
    
  },
});

function HomeSection1(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
      <Typography className={classes.paperLeftTitle} variant="headline" component="h3">
         Bienvenidos a CCI Heredia
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperLeft}>  
          <Typography className={classes.paperLeftTitle} variant="headline" component="h3">
         Bienvenidos a CCI Heredia
        </Typography>
        <Typography className={classes.paperLeftParagraph} variant="body1" component="h3">
        Somos parte de la Red Global CCI,
         que aglutina a las iglesias conocidas como
          ‘Centro Cristiano Internacional’, 
          con sus siglas ‘CCI’. Nuestra sede en Heredia, 
          Costa Rica, fue establecida en el 2002.
        </Typography>
      
         
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}> <img src="../static/copa.png" alt="CCI" height="40" width="30" />
          <img src="../static/panes.png" alt="CCI" height="50" width="50" />
          <img src="../static/uvas.png" alt="CCI" height="45" width="40" />
          <img src="../static/paloma.png" alt="CCI" height="50" width="50" />
          <img src="../static/pez.png" alt="CCI" height="40" width="50" />
          <img src="../static/biblia.png" alt="CCI" height="50" width="50" />
           </Paper>
        </Grid>
      
      </Grid>

      </Paper>
     
    </div>
  );
}

HomeSection1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection1);
