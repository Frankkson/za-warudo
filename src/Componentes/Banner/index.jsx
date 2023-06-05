import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Za warudo</h1>
				<p>Bem vindo ao website sobre animes mais bobalhão da internet</p>
			</div>
			<div className={styles.imagens}>
				<img
					aria-hidden="true"
					alt="foto perfil banner"
					className={styles.circuloColorido}
					src={circuloColorido}
				/>
				<img
					alt="foto perfil banner"
					className={styles.minhaFoto}
					src={minhaFoto}
				/>
			</div>
		</div>
	);
};

export default Banner;
