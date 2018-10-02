import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
	root: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "center",
		backgroundImage: "url(../../static/contact.svg)",
		backgroundSize: "70%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center", 
		height: "700px",
	
		
	},
	
});

function Contacto (props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
	contacto
		
		</div>
	);
}

Contacto.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacto);
