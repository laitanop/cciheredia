import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  list: {
    width: 250,
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
	  color: "#96ad32",
  }
});

class ResponsiveNavigation extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
     
    
		<List component="nav">
        <ListItem button>
		<span className={classes.icon} ><i className="material-icons">
home
</i></span>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button>
        <span className={classes.icon} ><i className="material-icons">
language
</i></span>
          <ListItemText primary="Nosotros" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Ministerios" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Eventos" />
        </ListItem>
      </List>
	  <Divider />
	  <List component="nav">
        <ListItem button>
		<span className={classes.icon} ><i className="material-icons">
people
</i></span>
          <ListItemText primary="Grupos de vida" />
        </ListItem>
		 
        <ListItem button>
        
          <ListItemText primary="Misiones" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
		<span className={classes.icon}><i className="material-icons">
place
</i></span>
          <ListItemText primary="contacto" />
        </ListItem>
      
      </List>
      </div>
    );

   

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><i className="material-icons"> menu
</i></Button>
  
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      
      </div>
    );
  }
}

ResponsiveNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveNavigation);