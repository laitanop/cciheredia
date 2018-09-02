import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";



const styles = theme => ({
	card: {
		maxWidth: 445,
		[theme.breakpoints.up("xl")]: {
			maxWidth: 745,
     
		},
  
	},
	media: {
		// ⚠️ object-fit is not supported by IE11.
		objectFit: "cover",
		[theme.breakpoints.up("xl")]: {
			height: 287,
     
		},
   
	},
	title: {
		fontSize: "18px",
		color: "#596327",
		fontWeight: "bold"
     
	},
	text: {
		fontSize: "14px",
		textAlign: "justify",
		marginTop: "7px",

	
         
	},
	icon: {
		color: "#96ad32",
    
	},

   

});

function NewsCci(props) {
	const { classes } = props;
	return (
		<div className={classes.card}>
		
			<div>
     
				<CardMedia
					component="img"
					className={classes.media}
					height="140"
					image="/static/Slice 1.png\"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<div className={classes.title}>
           Mesa del señor 
            
					</div>
					<div className={classes.text}>
          Cada primer domingo de mes, en el Centro Cristiano Internacional de Galaad
          participamos de la Mesa del Señor. 
          
					</div>
         
				</CardContent>
			</div>
			<CardActions>
			
				<div className={classes.icon}>
				
					<i className="material-icons">
calendar_today
					</i>&nbsp; &nbsp; 
			
     Sabado 1 de septiembre 2018
          
				</div>
			</CardActions>
		</div>
	);
}

NewsCci.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCci);