import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
	root: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "center",
		backgroundImage: "url(../../../../static/Fotos/contactImg.svg)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center", 
		height: "500px",
	
		
	},
	
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	
});

function Contacto (props) {
	const { classes } = props;

	return (
		<div>
			<Grid container spacing={24}>
			
				<Grid item xs={6}>
					<div className={classes.paper}>	<div className={classes.root} /></div>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
		  <Typography variant="headline" component="h3">
         Contacto
						</Typography>
						<Typography component="p">
ccigalaad@gmail.com				</Typography>
						<Typography component="p">
Tel. 71-75-10-30			</Typography></Paper>
				</Grid>
      
			</Grid>
 
	
	
		
		</div>
	);
}

Contacto.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacto);
