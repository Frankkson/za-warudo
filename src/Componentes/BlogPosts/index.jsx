import BotaoPrincipal from "Componentes/BotaoPrincipal";
import styles from "./BlogPosts.module.css";
import { Link } from "react-router-dom";

const BlogPosts = ({ post }) => {
	return (
		<Link to={`/posts/${post.id}`}>
			<div className={styles.post}>
				<img
					className={styles.capa}
					src={`/assets/posts/${post.id}/capa.png`}
					alt="Imagem de capa do Post"
				/>
				<h2 className={styles.titulo}>{post.titulo}</h2>
				<BotaoPrincipal tituloBotao="Ler" />
			</div>
		</Link>
	);
};

export default BlogPosts;
