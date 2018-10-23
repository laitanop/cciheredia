import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContacForm from "./ContacForm";


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
	root2: {
		marginTop: "50px"
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		marginTop: "10px",
		marginRight: "20px",
		paddingBottom: "40px",
		color: theme.palette.text.secondary,
	  },
	
});

class Contacto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	  }

	render() {
		const { classes } = this.props;
	
	

		return (
		
			<div className={classes.root2}>
				<Grid container spacing={24}>
			
					<Grid item xs={6}>
						<div>	<div className={classes.root} /></div>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
		  <div>
         Contacto
							</div>
							<div>
ccigalaad@gmail.com				</div>
							<div>
Tel. 71-75-10-30			</div>
							<ContacForm />
						</Paper>
					</Grid>
      
				</Grid>
 
		
		
			</div>
		);
	}
}

Contacto.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacto);
