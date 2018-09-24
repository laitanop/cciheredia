import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 1,
        textAlign: "center",
        borderRadius: "5px",
       
        "&:hover": {
			boxShadow: "5px 5px 5px 5px #BDBDBD"
			
		}	
   
	},

});

function GalleryImages(props) {
	const { classes } = props;
	const images = [
		{
			src: "../../static/Fotos/camphoto_684387517.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_1344-photo-full.jpg"
		},
		{
			src: "../../static/Fotos/EB56A42F-AF4F-4371-A484-F6AE69D1BC63.JPG"
		}, 
		{
			src: "../../static/Fotos/IMG_1348.JPG"
		}, 
		{
			src: "../../static/Fotos/IMG_2824.jpg"
		},
		{
			src: "../../static/Fotos/Segundo ArcoIris-2018.jpg"
		}, 
		{
			src: "../../static/Fotos/Segunda Celebración-02.jpg"
		}, {
			src: "../../static/Fotos/IMG_2908.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2831.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2829.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2832.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2833.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2838.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2848.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2858.jpg"
		}, 
		{
			src: "../../static/Fotos/IMG_2862.jpg"
		}, 
       
        
	];
	return (
		<div className={classes.root}>
        	<Grid container spacing={24}>
				{images.map(img => {
					return (
						<Grid item  xs={12} sm={4}>
							<Paper className={classes.paper}><img  src={img.src} alt="Italian Trulli" width="150" height="130" /></Paper>
						</Grid>
					);
           
				})}
	
      
				
   
			</Grid>
		</div>
	);
}

GalleryImages.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryImages);
