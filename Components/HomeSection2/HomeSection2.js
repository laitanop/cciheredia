import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import VideoCard from "./VideoCard";




const styles = theme => ({
	
	root: {
	
		flexGrow: 1,
	

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
			backgroundColor: "#fff",
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
		fontSize: "20px",
	

	
	},
	scroll: {
	
		overflow: "scroll",
		
		height: "600px",

	
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
			
			<Grid container spacing={24} >
				<Grid item xs={12}>
					<Paper className={classes.paper} elevation={24}>
						<Grid container spacing={24}>
							<Grid container spacing={24}>
								<Grid item sm={6} >
								
				
									<Grid item  sm={12}>
									
									
										<div className={classes.paper1}><img src="../static/join.png" alt="CCI" height="70" width="70" /></div>
										<div className={classes.paper1}>Creer</div>
									</Grid>
									<Grid item  sm={12}>
										<div className={classes.paper1}>	<img src="../static/grow.png" alt="CCI" height="70" width="70" /></div>
										<div className={classes.paper1}>	Crecer </div>
									</Grid>
									<Grid item sm={12}>
										<div className={classes.paper1}>	<img src="../static/serve.png" alt="CCI" height="70" width="70" /></div>
										<div className={classes.paper1}>Servir</div>
									</Grid>
								
       
								</Grid>
					
								<Grid item sm={6} >
									<Grid item xs={12} className={classes.title}>
										<div className={classes.paper1}>Sermones </div>
										<div className={classes.scroll}>
											<VideoCard />
										</div>
									
									</Grid>
				
									
       
								</Grid>
							</Grid>
       
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
