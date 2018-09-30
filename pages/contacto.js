import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../src/withRoot";

import Layout from "../Components/Layout";

import Contacto from "../Components/Contacto/Contacto";


const styles = theme => ({
	root: {
		textAlign: "center",
		paddingTop: theme.spacing.unit * 20,
	},
});

class Contact extends React.Component {
  

	render() {
   

		return (
			<Layout>
			<Contacto />
    
    
			</Layout>
      
		);
	}
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Contact));
