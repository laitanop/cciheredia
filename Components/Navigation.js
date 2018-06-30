import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Icon';

const styles = {
  root: {
    flexGrow: 1,
   
  },
  flex: {
    flex: 1,
   
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  colorBar: {
    background: 'linear-gradient(45deg, #0277BD 1%, #039BE5 30%, #fff 90%)',
  },
  logotext: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '20px',
    fontWeight: '300',
    lineHeigth: '30px',
    // color:  'rgba(0, 0, 0, 0.9)',
    color:  '#fff',

  },
  buttons: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    lineHeigth: '21.8182px',
    color:  '#01579B',
    // color:  'rgba(0, 0, 0, 0.75)',
    textTransform:'lowercase',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#030266',
      fontWeight: '500',
    },
  }
};

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorBar}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
       

          <Typography variant="title" color="inherit" className={classes.flex}>
          {/* <img src="../static/ccilogo.png" alt="CCI" height="52" width="152" />  */}
          <img src="../static/ccilogo7.png" alt="CCI" height="42" width="42" /> 
          <span className={classes.logotext}> &nbsp;Centro Cristiano Internacional</span>
          </Typography>
         
          <Button color="inherit"  className={classes.buttons} >Identidad</Button>
          <Button color="inherit" className={classes.buttons}>Celebraciones</Button>
          <Button color="inherit" className={classes.buttons}>Grupos de Vida</Button>
          <Button color="inherit" className={classes.buttons}>Ministerios</Button>
          <Button color="inherit" className={classes.buttons}>Misiones</Button>
     
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
