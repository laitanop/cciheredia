import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Icon";
import ResponsiveNavigation from "./ResponsiveNavigation";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			marginLeft: 100,
			marginRight: 20
		}
	},
	colorBar: {
		background: "transparent"
	},
	logotext: {
		fontSize: "20px",
		fontWeight: "600",
		lineHeigth: "30px",
		color: "rgb(84, 84, 84)",

		paddingTop: "200px",
		[theme.breakpoints.down("md")]: {
			fontSize: "14px"
		}
	},
	buttons: {
		fontSize: "18px",
		fontWeight: "300",

		color: "rgba(0, 0, 0, 0.75)",

		textTransform: "capitalize",
		"&:hover": {
			color: "#96ad32",
			fontWeight: "600"
		},
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
	img: {
		backgroundImage: "url(\"/static/Artboard1.png\")",
		backgroundSize: "150%",
		width: "182px",
		height: "62px",
		backgroundRepeat: " no-repeat"
	},
	responsive: {
		[theme.breakpoints.down("md")]: {
			visibility: "visible"
		},
		[theme.breakpoints.up("md")]: {
			visibility: "hidden"
		}
	}
});

function Navigation (props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div position='static' className={classes.colorBar}>
				<Toolbar>

					<IconButton
						href='/index'
						className={classes.menuButton}
						color='inherit'
						aria-label='Menu'
					>
						{/* <div className={classes.img} /> */}
						<img
							src='static/Artboard1.png'
							alt='Smiley face'
							height='60'
							width='70'
						/>

					</IconButton>

					<Button color='inherit' className={classes.buttons} href='/index'>
            Inicio
					</Button>
					<Button color='inherit' className={classes.buttons} href='/nosotros'>
            Nosotros
					</Button>

					<Button color='inherit' className={classes.buttons} href='/contacto'>
            Contacto
					</Button>
					<div className={classes.responsive}><ResponsiveNavigation /></div>

				</Toolbar>
			</div>

		</div>
	);
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);

// https://churchthemes.com/church-website-content/
