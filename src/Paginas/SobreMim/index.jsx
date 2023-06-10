import PostModelo from "../../Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";
const SobreMim = () => {
	return (
		<PostModelo
			fotoCapa={fotoCapa}
			titulo={"Sobre a minha pessoinha"}
		>
			<h3 className={styles.subtitulo}>Olá, eu sou o Frank</h3>
			<img
				alt="Imagem avatar do Frank"
				className={styles.fotoSobreMim}
				src={fotoSobreMim}
			/>
			<p className={styles.paragrafo}>Here's how my life started.</p>
			<p className={styles.paragrafo}>
				Here's how I started to migrate to the tech world and what I like to do.
			</p>
		</PostModelo>
	);
};

export default SobreMim;
