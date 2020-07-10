import React from 'react';
import NavBar from "../components/header/navbar";
import Styles from "./styles.module.scss";
import UDLogo from "../images/udlogo.png";
import UDVideo from "../videos/10cars1080p_mini.mp4"
import isisvideo from "../videos/HardwareBrakingOnCar.mp4"
import VandyLogo from "../images/vandylogo.png"

export default function research () {
	const listItems = [
		{ link: "../about", name: "About"},
		{ link: "../research", name: "Research"},
		{ link: "../projects", name: "Projects"},
		{ link: "../youtube", name: "Youtube"}

	];
	return (
		<div>
			<NavBar headerProps={listItems}/>
			<div className={Styles.research}>
			<div className = {Styles.vanderbilt1}>
				<h1 className = {Styles.vandyheader}>
				<img src={VandyLogo} alt="VanderbiltLogo" className={Styles.logo}/>
				Vanderbilt University (2020 - Currently Under Development) </h1>
				<p className={Styles.profcap}> This work was completed under the supervision of Dr. Kalman Varga in the Vanderbilt Physics Department </p>
				<p className={Styles.body}> The goal of this work is to show the ionization of various materials under a strong laser field using Time Dependent Desnity Functional Theory (TDDFT). This work is currently under development as of Summer 2020. </p>
			</div>
			<div className = {Styles.vanderbilt2}>
				<h1 className = {Styles.vandyheader}>
				<img src={VandyLogo} alt="VanderbiltLogo" className={Styles.logo}/>
				Vanderbilt University (2019) </h1>
				<p className={Styles.profcap}> This work was completed under the supervision of Dr. Taylor Johnson at the Vanderbilt Institute for Software and Integrated Systems lab. </p>
				<p className={Styles.body}> At the Institute for Software and Integrated Systems lab, I along with another undergraduate student applied a simulated 3-layer feed forward neural network to a small scaled robot to create an autonomous breaking system. This work was presented at the Vandebrilt Undergraduate Research fair and a video is attached below demonstrating the breaking system. 
				</p>
				<video classNames={Styles.vandyvideo} controls>
					<source src={isisvideo} types="video/mp4"/>
					Your browser unfortunately does not support videos
				</video>
			</div>

			<div className = {Styles.ud}>
				<h1 className={Styles.udheader}>
				<img src={UDLogo} alt="UDLogo" className={Styles.logo}/>
				 University of Delaware (2017-2018) </h1>
				<p className={Styles.profcap}> This work was completed under the supervision of Dr. Andreas Malikopoulos in the mechanical engineering department. </p>

				<p className={Styles.body}> At the University I and Dr. Adam Stager (previously a graduate student at the time) built the University of Delaware Scaled Smart City. This served as a testbed for testing algorithms on small scaled autonomous vehicles. Ultimately, we ended up implementing a mergin algorithm using the test bed for connected and autonomous vehicles. We ended up publishing a peer reviewed conference paper available 
					<a href="https://arxiv.org/abs/1710.11408"> here</a>. Below is a video demonstrating the merging algorithm we developed!
				</p>
				<video className={Styles.udvideo} controls>
					<source src={UDVideo} types="video/mp4"/>
					Your browser unfortunately does not support videos
				</video>
			</div>
		</div>
		</div>
	);
}
