import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ScrollAnimation from "react-animate-on-scroll";



const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
		flexGrow: 1,
		marginTop: "-10px",
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
		color: "#2CA17C",
	},
	
	Title: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		fontWeight: "500",
		lineHeight: "38.4px",
		color: " rgb(84, 84, 84)",
		fontSize: "32px",
	
		marginTop: "50px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "22px",
		},
    
	},
	paperTitle: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
	
		fontSize: "26.66667px",
		fontWeight: "600",
		lineHeight: "32px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "18px",
		},

    
	},



	paperSubTitle: {
		color: "rgb(84, 84, 84)",
	
		fontSize: "24px",
		fontWeight: "600",
		lineHeight: "24px",	
		[theme.breakpoints.down("sm")]: {
			fontSize: "18px",
		},
		
	},
	paperParagraph: {

		color: "rgb(84, 84, 84)",

		fontSize: "22.2222px",
		fontWeight: "300",
		lineHeight: "26.6667px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
	},
	img: {

		backgroundImage: "url(\"/../static/Desktop2.png\")",
		width: "115%",
		height: "500px",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		[theme.breakpoints.down("sm")]: {
			width: "95%",
			height: "400px",
			padding: theme.spacing.unit * 4,
		},
	
	}
});

function HomeSection1(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
		
			<div className={classes.Title} >
				<ScrollAnimation animateIn="fadeInUp">
		Porque yo tu señor y Dios estare contigo donde quieras que vayas. Josue 1:9
				</ScrollAnimation>
			
			</div>
			
		
			
			<Grid container spacing={24}>
				
				<Grid item xs={12} sm={6} >
					<Paper  className={classes.paper} elevation={24}>
						<span className={classes.icon}><i className="fas fa-home fa-3x" /></span>
				
						<div className={classes.paperTitle}>
         Horario de Reuniones
						</div>
						<div className={classes.paperSubTitle}>
         Sabados 3:00 PM
						</div>
						<div className={classes.paperParagraph}>
        Concepción de San Rafale de Heredia
						</div>
						
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
