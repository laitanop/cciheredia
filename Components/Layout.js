import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navigation from "./NavigationBar/Navigation";
import Footer from "../Components/Footer/Footer";


const styles = theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});


class Layout extends React.Component {
 

	render() {
		const { classes } = this.props;
  

		return (
			<div>
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
