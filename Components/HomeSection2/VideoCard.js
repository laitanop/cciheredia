import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 1,
		paddingBottom: theme.spacing.unit * 1,
		"&:hover": {
			boxShadow: "5px 5px 5px 5px #BDBDBD"
		  }	
	
	  },
});



function VideoCard(props) {
	const { classes, theme } = props;
	const listVideo = [
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Crear una cultura de servico en casa."
		}, 
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Imparte fuerzas para vencer el miedo."	
		},
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Sé vivir."
		},
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Este es tu momento."	
		}, 
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Una mala racha."		
		},
		{
			src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
			name: "Donde esta Dios cuando tengo dificultades."				},
	
	


	];

	return (
		<div>
			{listVideo.map(video => {
				return (
					<div className={classes.root}>
					
						<div>
							<Paper className={classes.root} elevation={10}>
							
								<Grid container spacing={0}>
				
									<Grid item xs={8}>
										<iframe width="70%" height="150" scrolling="no" frameborder="no" allow="autoplay" src={video.src}></iframe>
									</Grid>
									<Grid item xs={4}>
										<div style={{fontSize: "16px", textAlign: "left", marginTop: "30px"}}>{video.name}</div>
										<div style={{color: "#BDBDBD",fontSize: "10px", textAlign: "right"}}>Pastor Rolando Soto</div>
									</Grid>
     
								</Grid>
 
							</Paper>
						</div>
					</div>
				);
			})}
							
				
		</div>
	);
}

VideoCard.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(VideoCard);

