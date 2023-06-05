import styles from "./MenuLink.module.css";

import { NavLink } from "react-router-dom";

const MenuLink = ({ nome, to }) => {
	return (
		<NavLink
			className={({ isActive, isPending }) =>
				isActive ? styles.linkDestacado : isPending ? styles.link : ""
			}
			to={to}
		>
			{nome}
		</NavLink>
	);
};

export default MenuLink;
