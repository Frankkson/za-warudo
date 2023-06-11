import styles from "./NaoEncontrado.module.css";
import erro404 from "assets/erro_404.png";

const NaoEncontrado = () => {
	return (
		<>
			<div className={styles.conteudoContainer}>
				<span className={styles.texto404}>404</span>
				<h1 className={styles.titulo}>
					Você encontrou o Zoro. <br />
					Mas acho que não era isso que você queria.
				</h1>
				<p className={styles.paragrafo}>
					Aguarde alguns instantes e atualize a página, isso pode resolver o
					problema.
				</p>
				<p className={styles.paragrafo}>
					Se preferir, retorne à pagina inicial
				</p>
				<div className={styles.botaoContainer}>
					<button>Voltar</button>
				</div>
				<img
					className={styles.imagemZoroPerdido}
					alt="Personagem com feição de dúvida pois está perdido."
					src={erro404}
				/>
			</div>
			<div className={styles.espacoEmBranco}></div>
		</>
	);
};

export default NaoEncontrado;
