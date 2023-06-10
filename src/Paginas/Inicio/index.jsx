import styles from "./Inicio.module.css";
import posts from "assets/posts.json";
import BlogPosts from "Componentes/BlogPosts";

const Inicio = () => {
	return (
		<ul className={styles.posts}>
			{posts.map((post) => (
				<li key={post.id}>
					<BlogPosts post={post} />
				</li>
			))}
		</ul>
	);
};

export default Inicio;
