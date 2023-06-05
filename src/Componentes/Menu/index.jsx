import styles from "./Menu.module.css";

import MenuLink from "../MenuLink";

const Menu = () => {
	return (
		<header>
			<nav className={styles.navegacao}>
				<MenuLink
					nome={"Início"}
					to={"/"}
				></MenuLink>
				<MenuLink
					nome={"Sobre mim"}
					to={"/sobre-mim"}
				></MenuLink>
			</nav>
		</header>
	);
};

export default Menu;
