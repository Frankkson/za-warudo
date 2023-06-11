import { useParams, Routes, Route } from "react-router-dom";
import posts from "assets/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./post.css";
import PaginaPadrao from "Componentes/PaginaPadrao";
import NaoEncontrado from "Paginas/NaoEncontrado";

const Post = () => {
	const params = useParams();

	const post = posts.find((post) => {
		return post.id === Number(params.id);
	});

	if (!post) {
		return <NaoEncontrado />;
	}

	return (
		<Routes>
			<Route
				path="*"
				element={<PaginaPadrao />}
			>
				<Route
					index
					element={
						<PostModelo
							fotoCapa={`/assets/posts/${post.id}/capa.png`}
							titulo={post.titulo}
						>
							<div className="post-markdown-container">
								<ReactMarkdown>{post.texto}</ReactMarkdown>
							</div>
						</PostModelo>
					}
				/>
			</Route>
		</Routes>
	);
};

export default Post;
