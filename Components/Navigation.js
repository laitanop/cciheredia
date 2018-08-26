import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Icon";

const styles = {
	root: {
		flexGrow: 1,
   
	},
	flex: {
		flex: 1,
   
	},
	menuButton: {
		marginLeft: 100,
		marginRight: 20,
	},
	colorBar: {
		// background: "#3DE1AD",
		background: "transparent",
	},
	logotext: {
		fontFamily: "Nunito Sans, sans-serif",
		fontSize: "20px",
		fontWeight: "600",
		lineHeigth: "30px",
		color:  "rgba(0, 0, 0, 0.9)",
		// color:  "#fff",
		paddingTop: "200px",

	},
	buttons: {
		fontFamily: "Nunito Sans, sans-serif",
		fontSize: "14px",
		fontWeight: "300",
		
		color:  "rgba(0, 0, 0, 0.75)",
	
		textTransform: "capitalize",
		"&:hover": {
			color: "#030266",
			fontWeight: "500",
		},
	},
	img: {
		backgroundImage: "url(\"/static/logogalaad.png\")",
		backgroundSize: "100%",
		width:"82px",
		height:"82px", 
		backgroundRepeat:" no-repeat",
		// "&:hover": {
		// 	backgroundImage: "url(\"/static/Webp.net-gifmaker2.gif\")",
		// },
	},
};

function Navigation(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div position="static" className={classes.colorBar}>
				<Toolbar>
       
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<div className={classes.img} />
					</IconButton>
        
					<Typography variant="title" color="inherit" className={classes.flex}>
    
						<span className={classes.logotext}> &nbsp;Centro Cristiano Internacional Galaad</span>
					</Typography>
         
					<Button color="inherit"  className={classes.buttons} >Identidad</Button>
					<Button color="inherit" className={classes.buttons}>Celebraciones</Button>
					<Button color="inherit" className={classes.buttons}>Grupos de Vida</Button>
					<Button color="inherit" className={classes.buttons}>Ministerios</Button>
					<Button color="inherit" className={classes.buttons}>Misiones</Button>
     
				</Toolbar>
			</div>
     
		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
