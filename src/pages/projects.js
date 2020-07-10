import React from "react";
import NavBar from "../components/header/navbar";
import Styles from "./styles.module.scss";
import ownablelogo from "../images/ownablelogo.webp";
import tmobilelogo from "../images/tmobilelogo.png";

export default function about () {
	const listItems = [
		{ link: "../about", name: "About" },
		{ link: "../research", name: "Research" },
		{ link: "../projects", name: "Projects" },
		{ link: "../youtube", name: "Youtube" }
	];
	return (
		<div>
			<NavBar headerProps={listItems}/>
			<div className = {Styles.projects}>
			<h1 className = {Styles.projectsheader}> Projects </h1>
			<p className = {Styles.projectp}> This page serves as projects I've worked on both as personal projects as well as projects I've worked on at various companies. It is in chronologically ordered by the project start date as a project in software is never finished :). The open source projects are available at my github <a href="https://github.com/luke-bhan/"> here</a>.
			</p>
			<br/>
			<h1 className = {Styles.projectp}> 
				<img src={tmobilelogo} alt="T-MobileLogo" className={Styles.logo}/>
				T-mobile Internship (2020 Summer - Under development)
			</h1>
			<p className = {Styles.center}>
				I am currently interning at T-mobile under the internet service provider team working on Machine Learning techniques for optimizing LTE networks.
			</p>
			<br/>
			<h1 className = {Styles.projectp}>
				Numlib - An arbitrary integer library (2020)
			</h1>
			<p className = {Styles.center}>
			Numlib is an arbitrary precision integer library written in Rustlang. This project served as an educational project for optimizing the storage of numbers and an introduction to a new language - Rust.
		</p>
			<br/>
			<h1 className = {Styles.projectp}>
				Rummy 500 Game Player (2019)
			</h1>
			<p className = {Styles.center}>
				I developed a reinforcement learning controller using Q-learning to play and defeat novel rummy players. This project was written using the popular TensorFlow package in python. 
			</p>
			<br/>
			<h1 className = {Styles.projectp}>
				<img src={ownablelogo} alt="OwnableLogo" className={Styles.logo}/>
				Ownable Internship (2018)
			</h1>
			<p className = {Styles.center}>
				I interned at Ownable, an ecommerce startup, transfering their deployment to a Service Oriented Architecture (SOA) using Hashicorp's Consul to manage a Docker containers for a scalable webapp and backend.</p>
			</div>
		</div>
	);
}
