import styles from "./PostModelo.module.css";

const PostModelo = ({ fotoCapa, titulo, children }) => {
	return (
		<article className={styles.postModeloContainer}>
			<div
				className={styles.fotoCapa}
				style={{ backgroundImage: `url(${fotoCapa})` }}
			></div>
			<h2 styles={styles.titulo}>{titulo}</h2>
			<article styles={styles.postConteudoContainer}>{children}</article>
		</article>
	);
};

export default PostModelo;
