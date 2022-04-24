import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Post = (props) => {
	const { postID } = useParams();
	const [user, setUser] = useState({});
	const [post, setPost] = useState({});

	useEffect(() => {
		axios.get("/posts/" + postID).then((res) => {
			console.log(post);
			setPost(res.data);
		});
	}, []);

	if (props.loggedIn) {
		return (
			<div class="flex">
				<button class="w-full border border-gray-200 rounded-lg shadow-lg my-32 mx-96 -full">
					<div class="flex flex-wrap p-10">
						<h2 class="text-lg font-medium text-center">{post.title}</h2>
						<p class="font-medium text-blue-700">{post.type}</p>
						<p class="py-3"></p>
						<img src={post.img} class="h-1/4" />
					</div>
				</button>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default Post;
