import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-animate-on-scroll";



const styles = theme => ({
	root: {
		// ...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		// paddingBottom: theme.spacing.unit *5,
		[theme.breakpoints.up("sm")]: {
			marginLeft: "250px",
			marginRight: "250px",
		},
		
    
	},
	paper: {
		padding: theme.spacing.unit * 10,
		textAlign: "center",
		color: theme.palette.text.secondary,
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing.unit * 6,
		},
  
	},
	icon: {
		color: "#3DE1AD",
	},
	
	Title: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		fontWeight: "600",
		lineHeight: "38.4px",
		color: " rgb(84, 84, 84)",
		fontSize: "32px",
		fontFamily: "Nunito, sans-serif",
		marginTop: "50px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "22px",
		},
    
	},
	paperTitle: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "26.66667px",
		fontWeight: "600",
		lineHeight: "32px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},

    
	},



	paperSubTitle: {
		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "24px",
		fontWeight: "600",
		lineHeight: "24px",	
		[theme.breakpoints.down("sm")]: {
			fontSize: "14px",
		},
		
	},
	paperParagraph: {

		color: "rgb(84, 84, 84)",
		fontFamily: "Nunito, sans-serif",
		fontSize: "22.2222px",
		fontWeight: "300",
		lineHeight: "26.6667px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "12px",
		},
	},
	img: {

		backgroundImage: "url(\"/../static/view.png\")",
		width: "115%",
		height: "500px",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
	
	}
});

function HomeSection1(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Typography className={classes.Title} variant="headline" component="h3">
				<ScrollAnimation animateIn="fadeInUp">
			Bienvenidos 	al Centro Cristiano Interancional Galaad
				</ScrollAnimation>
				 {/* <br /><ScrollAnimation animateIn="fadeInUp">
				al Centro Cristiano Interancional Heredia
				</ScrollAnimation> */}
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
         Sabados 3:00 PM
						</Typography>
						<Typography className={classes.paperParagraph}>
        Concepción de San Rafale de Heredia
						</Typography>
						
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className={classes.img}></div>
		 	{/* <img src="../static/Untitled (36).png" alt="CCI" height="370" width="500" /> */}

				</Grid>

			</Grid>

	
     
		</div>
	);
}

HomeSection1.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection1);
