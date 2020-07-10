import React from "react";
import styles from "./header.module.scss";

export default function Header(props) {
	return (
		<header className={styles.header}>
			<a className = {styles.name} href={'about'}>
				Luke Bhan
			</a>
		<ul className={styles.headerMenu}>
		  {props.headerProps.map(item => (
		  <li>
			  <a className={styles.link} href={item.link}>{item.name}</a>
			</li>
		  ))}
		</ul>
	  </header>
	);
}
