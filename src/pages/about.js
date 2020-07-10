import React from "react";
import NavBar from "../components/header/navbar";
import Styles from "./styles.module.scss";
import lukespicture from "../images/index.png";

export default function about () {
	const listItems = [
		{ link: "../about", name: "About" },
		{ link: "../research", name: "Research" },
		{ link: "../projects", name: "Projects" },
		{ link: "../youtube", name: "Youtube" }
	];
	return (
		<div className = {Styles.about}>
			<NavBar headerProps={listItems}/>
			<p className={Styles.aboutp}> 
				<img src={lukespicture} alt="PortraitPicture" align="right"/>	
				<div className={Styles.abouttext}>
					Hi! Welcome to my personal website. I am currently a third-year accelerated masters student in the computer science department at Vanderbilt University. I additionally have majors in math and physics. In addition to school, I am an experimental chef and a big lacrosse fan. This website serves a place to explore my projects and research as well as contact me for anything - whether that's about any research I’ve or just a conversation on physics. I’m always open. My email is luke.bhan AT nospam Dot vanderbilt Dot edu. Remeber to remove the nospam and fill in the AT and DOt signs. 
				</div>
			</p>
		</div>
	);
}
