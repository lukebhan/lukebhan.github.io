import React from "react";
import NavBar from "../components/header/navbar";
import Styles from "./styles.module.scss";
import Youtube from "react-youtube";

export default function about () {
	const listItems = [
		{ link: "../about", name: "About" },
		{ link: "../research", name: "Research" },
		{ link: "../projects", name: "Projects" },
		{ link: "../youtube", name: "Youtube" }
	];

	const opts = {
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div className = {Styles.youtube}>
			<NavBar headerProps={listItems}/>
			<h1 className = {Styles.projectsheader}> Youtube </h1> <br/>
			<p className = {Styles.center}>
				I have recently created a YouTube channel with educational tutorials on programming. Check out my first video below and my channel <a href="https://www.youtube.com/channel/UCsLxY8yFeQ8MZi5ZWonMjzg?view_as=subscriber"> here</a>.</p>
			<br/><br/>
			<div className={Styles.center}>
				<Youtube videoId="63u8y9ta_Ig" opts={opts} className={Styles.youtube}/>
			</div>
	
		</div>
	);
}
