import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Navigation from '../Components/Navigation';
import Layout from '../Components/Layout';
import HomeSection1 from '../Components/HomeSection1';
import Banner from '../Components/Banner';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Layout>
        {/* <Navigation /> */}
        {/* 
         */}
              <HomeSection1 />
         <Banner />
    
    
      </Layout>
      // <div className={classes.root}>
      // <Navigation />
      //   <Dialog open={open} onClose={this.handleClose}>
      //     <DialogTitle>Super Secret Password</DialogTitle>
      //     <DialogContent>
      //       <DialogContentText>1-2-3-4-5</DialogContentText>
      //     </DialogContent>
      //     <DialogActions>
      //       <Button color="primary" onClick={this.handleClose}>
      //         OK
      //       </Button>
      //     </DialogActions>
      //   </Dialog>
      //   <Typography variant="display1" gutterBottom>
      //  material
      //   </Typography>
      //   <Typography variant="subheading" gutterBottom>
      //     example projectd
      //   </Typography>
      //   <Button variant="contained" color="secondary" onClick={this.handleClick}>
      //     Super Secret Password
      //   </Button>
      // </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
