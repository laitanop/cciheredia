import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		
		marginTop: "100px",
    
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit *5,
		marginLeft: "150px",
		marginRight: "150px",
    
    
	},
	root1: {
	
		flexGrow: 1,
		backgroundImage: "url(\"/static/Untitled (1).png\")",
		height: 600,

	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		// color: theme.palette.text.secondary,
  
	},
	
	paperLeftTitle: {
		padding: theme.spacing.unit * 2,
		fontSize: "26px",
		fontWeight: 600,
		lineHeigth: "32px",
		fontFamily: "Nunito, sans-serif",
		textAlign: "center",
		color: "rgb(84, 84, 84)",
 
    
	},
	
	

    
});

function HomeSection3(props) {
	const { classes } = props;

	return (
		<div className={classes.root1}>
			<Paper className={classes.root} elevation={24}>

				<Typography className={classes.paperLeftTitle} variant="headline" component="h3">
     Se parte de un Grupo de Vida en CCI 
				</Typography>
				<img src="../static/joinGV.png" alt="CCI" height="240" width="330" />
				

			</Paper>
     
		</div>
	);
}

HomeSection3.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection3);
