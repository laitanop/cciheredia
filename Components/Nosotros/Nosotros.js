import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GalleryImages from './GalleryImages'

const styles = theme => ({
	root: {
    flexGrow: 1,
    marginTop: "100px",
    margin: "50px"
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		marginTop: "100px",
   
	},
	Text: {
		textAlign: 'center',
		fontSize: "60px",
		fontWeight: "700px",
		lineHeight: "78px", 
		color: "#96ad32"
  }, 
  description: {
		textAlign: 'center',
		fontSize: "30px",
		fontWeight: "500px",
		lineHeight: "78px", 
		color: "#9E9E9E"
	}
});

function Nosotros(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
			
				<Grid item xs={12} sm={6}>
					<div className={classes.Text}>Somos CCI Gaalad</div>
          <Grid item xs={12}>
          <div className={classes.description}>Esta organización ministerial está siempre sujeta al llamamiento ministerial y disponibilidad de servidores.</div>
				</Grid>
				</Grid>
				<Grid item xs={12} sm={6}>
					<GalleryImages/>
				</Grid>
			
			</Grid>
		</div>
	);
}

Nosotros.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nosotros);
