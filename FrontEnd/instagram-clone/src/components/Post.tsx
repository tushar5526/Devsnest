import React from "react";
import { PostType } from "../App";

const Post = ({ post }: { post: PostType }) => {
	const [isLiked, setisLiked] = React.useState(false);

	return (
		<div className="card post">
			<div className="card-header">
				<div className="card-title">{post.post}</div>
				<i className="bi bi-three-dots"></i>
			</div>
			<img className="card-img-top" src={post.username} alt="" />
			<div className="buttons">
				<i
					className={isLiked ? "bi bi-heart-fill liked" : "bi bi-heart"}
					onClick={() => {
						setisLiked(!isLiked);
					}}
				></i>
				<i className="bi bi-chat"></i>
				<i className="bi bi-share"></i>
			</div>
		</div>
	);
};

export default Post;
