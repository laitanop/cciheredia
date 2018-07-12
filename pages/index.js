import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';

import Layout from '../Components/Layout';
import HomeSection1 from '../Components/HomeSection1';
import HomeSection3 from '../Components/HomeSection3';
import Banner from '../Components/Banner';
import HomeSection2 from '../Components/HomeSection2';

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
          <HomeSection1 />
          <HomeSection2 />
         <HomeSection3 />
            

         <Banner />
    
    
      </Layout>
      
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
