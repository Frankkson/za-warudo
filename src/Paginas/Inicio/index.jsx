import Banner from "Componentes/Banner";
import styles from "./Inicio.module.css";
import posts from "assets/posts.json";
import BlogPosts from "Componentes/BlogPosts";

const Inicio = () => {
	return (
		<main>
			<Banner />
			<ul className={styles.posts}>
				{posts.map((post) => (
					<li key={post.id}>
						<BlogPosts post={post} />
					</li>
				))}
			</ul>
			;
		</main>
	);
};

export default Inicio;
