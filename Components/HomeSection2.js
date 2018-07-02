import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit *5,
		marginLeft: "250px",
		marginRight: "250px",
    
	},
	paper: {
		padding: theme.spacing.unit * 12,
		textAlign: "center",
		color: theme.palette.text.secondary,
		backgroundColor: "#EEEEEE"
  
	},
	icon: {
		color: "#039BE5",
	},
	// paperLeft: {
	// 	padding: theme.spacing.unit * 2,
	// 	marginLeft: "-50px",
	// 	paddingBottom: "300px",
	// 	color: "#fff",
	// 	// backgroundColor: '#0657A5',
	// 	background: "linear-gradient(45deg, #0277BD 1%, #039BE5 30%, #fff 90%)",

    
	// },
	Title: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		fontWeight: "600",
		lineHeight: "38.4px",
		color: " rgb(84, 84, 84)",
		fontSize: "32px",
		fontFamily: "Nunito, sans-serif",
		marginTop: "50px",
    
	},
	paperTitle: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "26.66667px",
		fontWeight: "600",
		lineHeight: "32px",
    
	},



	paperSubTitle: {
		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "24px",
		fontWeight: "600",
		lineHeight: "24px",	
		
	},
	paperParagraph: {

		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "22.2222px",
		fontWeight: "300",
		lineHeight: "26.6667px",
	},
});

function HomeSection2(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Typography className={classes.Title} variant="headline" component="h3">
         Bienvenidos <br /> al Centro Cristiano Interancional Heredia
			</Typography>
			
		
			
			<Grid container spacing={24}>
				<Grid item xs={12}>
         
				</Grid>
				<Grid item xs={12} sm={6} >
					<Paper  className={classes.paper} elevation={24}>
						<span className={classes.icon}><i className="fas fa-home fa-3x" /></span>
				
						<Typography className={classes.paperTitle}>
         Horario de Reuniones
						</Typography>
						<Typography className={classes.paperSubTitle}>
         Domingos 10:00 AM
						</Typography>
						<Typography className={classes.paperParagraph}>
        Centro de Eventos La Finca 
						</Typography>
						
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
						
				</Grid>
      
			</Grid>

	
     
		</div>
	);
}

HomeSection2.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection2);
