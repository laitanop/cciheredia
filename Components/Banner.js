import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { inherits } from "util";

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 70,

   
		backgroundImage: "url(\"/static/Untitled (1).png\")",
    
		// width: '100%',
		// height: '100%',
		// backgroundRepeat:' no-repeat',
		// backgroundSize:'300px 300px 300px 300px',
	},

});

function Banner(props) {
	const { classes } = props;

	return (
		<div className={classes.root}> 
			<Paper elevation={1}>
				{/* <img src="../static/img2.jpg" alt="CCI" height="500" width="1400" />  */}
			</Paper>
		</div>
	);
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
