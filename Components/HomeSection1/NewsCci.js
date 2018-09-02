import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
	card: {
		maxWidth: 345,
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
					<Typography gutterBottom variant="headline" component="h2">
            Lizard
            
					</Typography>
					<Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        
					</Typography>
				</CardContent>
			</div>
			<CardActions>
				<Button size="small" color="primary">
          Share
				</Button>
				<Button size="small" color="primary">
          Learn More
				</Button>
			
			</CardActions>
		</div>
	);
}

NewsCci.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCci);