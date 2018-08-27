import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { inherits } from "util";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
	
	root: {
	
		flexGrow: 1,
		backgroundImage: "url(\"/static/Untitled (1).png\")",
		height: 600,

	},
	
	demo: {
		
		alignItems: "center",
		direction: "row",
		justify:  "center",
	},
	paper: {
		

		[theme.breakpoints.up("md")]: {
			padding: theme.spacing.unit * 12,
			marginLeft: "150px",
			marginRight: "150px",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "15px",
			marginRight: "15px",
		  },
			
	},
	text: {
		// fontFamily: "Nunito, sans-serif",
		fontSize: "16px",
		fontWeight: "300",
		lineHeight: "25.6px",
		color: "rgb(143, 143, 143)",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "15px",
			marginRight: "15px",
		},

	},
	title: {
		// fontFamily: "Nunito, sans-serif",
		fontSize: "26.6667px",
		fontWeight: "600",
		lineHeight: "32px",
		color: "rgb(84, 84, 84)",
		marginBottom: "15px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
			marginLeft: "15px",
			marginRight: "15px",
		},

	},
	
	img: {
		[theme.breakpoints.up("md")]: {
			marginLeft: "150px",
			marginTop: "-50px",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "60px",
			marginRight: "15px",
		
		},
		
	},
	imgGV: {
		[theme.breakpoints.up("md")]: {
			// marginLeft: "150px",
			marginTop: "-70px",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "60px",
			marginRight: "15px",
		
		},
		
	}

});

function HomeSection2(props) {
	const { classes } = props;

	return (
		<Grid container className={classes.root}>
			<Grid container spacing={24} className={classes.demo}>
				<Grid item xs={12} >
					<Paper className={classes.paper}>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={6}>
								<div className={classes.img}>	
									<img src="../static/Artboard1.png" alt="CCI" height="200" width="200" />
								</div>
							</Grid>
							<Grid item xs={12} sm={6}>
								<div className={classes.title}>
                                 ¿Quines Somos?								
								</div>
								<div className={classes.text}>
							Somos parte de la Red Global CCI, que aglutina a las iglesias conocidas como ‘Centro Cristiano Internacional’, con sus siglas ‘CCI’. Nuestra sede en Heredia, Costa Rica, fue establecida en el 2002.
								</div>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} >
					<Paper className={classes.paper}>
						<Grid container spacing={24}>
							<Grid item xs={12}>
								<Typography style={{ textAlign: "center", fontSize: "26px", fontWeight: "400", lineHeight: "32px", fontcolor: "rgb(84, 84, 84)"}}>
                             Se parte de un Grupo de Vida							
								</Typography>
							</Grid>
						
							<Grid item xs={12} sm={6}>
								<div className={classes.imgGV}>	
									<img src="../static/joinGV.png" alt="CCI" height="300" width="400" />
								</div>
							</Grid>
							<Grid item xs={12} sm={6}>
								
								<Typography className={classes.text}>
							Somos parte de la Red Global CCI, que aglutina a las iglesias conocidas como ‘Centro Cristiano Internacional’, con sus siglas ‘CCI’. Nuestra sede en Heredia, Costa Rica, fue establecida en el 2002.
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		
			
		</Grid>
	);
}

HomeSection2.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection2);
