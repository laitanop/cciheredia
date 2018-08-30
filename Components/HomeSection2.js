import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
		paddingTop: "100px",
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
		textAlign: "justify",
		fontSize: "18px",
		fontWeight: "300",
		lineHeight: "25.6px",
		color: "rgb(143, 143, 143)",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "15px",
			marginRight: "15px",
		},

	},
	title: {

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
		
			marginTop: "-70px",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "60px",
			marginRight: "15px",
		
		},
		
	},  paper1: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
	
	},
	button: {
		margin: theme.spacing.unit,
		BackgroundColor: "red",
	  },

});

function HomeSection2(props) {
	const { classes } = props;

	return (
		<div container className={classes.root}>
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
			
			</Grid>
			<Grid container spacing={24} >
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid container spacing={24}>
							<Grid item xs={12} className={classes.title}>
								<div className={classes.paper1}>Se parte de un grupo de vida </div>
							</Grid>
				
							<Grid item xs={12} sm={4}>
								<div className={classes.paper1}>	<img src="../static/join.png" alt="CCI" height="150" width="150" /></div>
								<div className={classes.paper1}>Unete</div>
							</Grid>
							<Grid item xs={12} sm={4}>
								<div className={classes.paper1}>	<img src="../static/grow.png" alt="CCI" height="150" width="150" /></div>
								<div className={classes.paper1}>	Crece </div>
							</Grid>
							<Grid item xs={12} sm={4}>
								<div className={classes.paper1}>	<img src="../static/serve.png" alt="CCI" height="150" width="150" /></div>
								<div className={classes.paper1}>Sirve</div>
							</Grid>
							<Grid item xs={12}>
								<div className={classes.text}>El sistema celular GRUPOS DE VIDA es nuestra actividad entre semana. Se trata de un movimiento de pequeños grupos que se reúnen de manera presencial o de manera virtual (por un servicio online por la Internet), una vez a la semana. Actualmente contamos con cerca de 50 Grupos de Vida o GV. </div>
							</Grid>
       
						</Grid>
						<Grid item xs={12} className={classes.title}>
							<div className={classes.paper1}><Button variant="contained"  style={{backgroundColor: "#96362C", color: "#fff"}}>
      Unirse a un Grupo
							</Button> </div>
						</Grid>
					
						
						
					</Paper>
				</Grid>
				
       
			</Grid>
			
		</div>
	);
}

HomeSection2.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSection2);
