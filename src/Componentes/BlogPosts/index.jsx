import styles from "./BlogPosts.module.css";

const BlogPosts = ({ post }) => {
	return (
		<div className={styles.post}>
			<img
				className={styles.capa}
				src={`/assets/posts/${post.id}/capa.png`}
				alt="Imagem de capa do Post"
			/>
			<h2 className={styles.titulo}>{post.titulo}</h2>
		</div>
	);
};

export default BlogPosts;
