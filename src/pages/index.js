import React  from "react"

import Particles from "../components/homepage/particles"
import particleStyles from "../components/homepage/particles.module.scss"
import homePageStyles from "../components/homepage/homepage.module.scss"
import buttonStyles from "../components/homepage/button.module.scss"
import Typist from "react-typist"

var typist_cursor = {
	show: false,
	blink: true,
	element: '|',
	hideWhenDone: true,
	hideWhenDoneDelay: 0,
};

export default function home () {
	return (
		<div className = {particleStyles.body}>
			<Particles />
			<div className = {homePageStyles.center}>
				<Typist avgTypingDelay={125} cursor={typist_cursor}> Hi. I am Luke. I like to build things.
						<div className = {homePageStyles.button}>
							<div className = {buttonStyles.fadein}>
								<a href="about">
									<button class={buttonStyles.buttonFormat}> View my work </button>
								</a>
							</div>
						</div>
				</Typist>
			</div>
		</div>
	)
}

