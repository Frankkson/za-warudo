import styles from "./BotaoPrincipal.module.css";

const BotaoPrincipal = ({ tituloBotao, tamanho, onClick }) => {
	return (
		<button
			className={`${styles.botaoPrincipal} ${styles[tamanho]}`}
			onClick={onClick}
		>
			{tituloBotao}
		</button>
	);
};

export default BotaoPrincipal;
