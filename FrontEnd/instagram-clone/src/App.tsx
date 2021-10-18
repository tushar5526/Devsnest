import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { updateUser } from "./actions";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export interface PostType {
	username: string;
	post: string;
}

function App() {
	const dispatch = useDispatch();
	const [posts, setPosts] = React.useState<PostType[]>([]);
	useEffect(() => {
		fetch("/data/post.json")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
			});
		dispatch(updateUser());
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Landing posts={posts} />
		</div>
	);
}

export default App;
