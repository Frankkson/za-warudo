import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

const Rodape = () => {
	return (
		<footer className={styles.rodape}>
			<MarcaRegistrada />
			Desenvolvido por Alura
		</footer>
	);
};

export default Rodape;
