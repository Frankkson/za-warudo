import { useParams } from "react-router-dom";
import posts from "assets/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./post.css";

const Post = () => {
	const params = useParams();

	const post = posts.find((post) => {
		return post.id === Number(params.id);
	});

	return (
		<PostModelo
			fotoCapa={`/assets/posts/${post.id}/capa.png`}
			titulo={post.titulo}
		>
			<div className="post-markdown-container">
				<ReactMarkdown>{post.texto}</ReactMarkdown>
			</div>
		</PostModelo>
	);
};

export default Post;
