import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import JssProvider from "react-jss/lib/JssProvider";
import flush from "styled-jsx/server";
import getPageContext from "../src/getPageContext";

class MyDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<title>CCI Gaalad- .</title>
					<meta name="description" content="Una Comunidad amigable y familiar donde aprenderás amar a Dios, creer en su palabra, hacer amigos y servir a los demás"></meta>
					<meta charSet="utf-8" />
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta
						name="viewport"
						content={
							"user-scalable=0, initial-scale=1, " +
              "minimum-scale=1, width=device-width, height=device-height"
						}
					/>
					{/* PWA primary color */}
					<meta name="theme-color" content={pageContext.theme.palette.primary.main} />
					<link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet" />
				
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
				

				</Head>
				<body style={{backgroundColor: "#fff", fontFamily: "Crimson Text, serif" }}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = ctx => {
	// Resolution order
	//
	// On the server:
	// 1. page.getInitialProps
	// 2. document.getInitialProps
	// 3. page.render
	// 4. document.render
	//
	// On the server with error:
	// 2. document.getInitialProps
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. page.getInitialProps
	// 3. page.render

	// Get the context of the page to collected side effects.
	const pageContext = getPageContext();
	const page = ctx.renderPage(Component => props => (
		<JssProvider
			registry={pageContext.sheetsRegistry}
			generateClassName={pageContext.generateClassName}
		>
			<Component pageContext={pageContext} {...props} />
		</JssProvider>
	));

	return {
		...page,
		pageContext,
		styles: (
			<React.Fragment>
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
				/>
				{flush() || null}
			</React.Fragment>
		),
	};
};

export default MyDocument;
