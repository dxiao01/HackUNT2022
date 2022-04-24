import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Post = (props) => {
	const { postID } = useParams();
	const [user, setUser] = useState({});
	const [post, setPost] = useState({});

	useEffect(() => {
		axios.get("/posts/" + postID).then((res) => {
			setPost(res.data);
			axios.get("/auth/" + res.data.owner).then((res) => {
				console.log(post);
				setUser(res.data);
				console.log(res.data);
			});
		});
	}, []);

	if (props.loggedIn) {
		return (
			<div>
				<div class="border border-gray-200 rounded-lg shadow-lg my-16 mx-48">
					<div class="flex w-full p-20 justify-between">
						<div class="flex flex-col justify-between mx-3">
							<div class="flex flex-col">
								<h2 class="text-4xl font-bold">{post.title}</h2>
								<h2 class="w-full text-2xl font-bold text-blue-700 text-white">
									{post.type}
								</h2>
							</div>
							<div class="flex flex-col">
								<h2 class="text-2xl font-bold">
									{user.firstName} {user.lastName}
								</h2>
								<h2 class="text-lg font-bold">{user.email}</h2>
							</div>
							<h2 />
						</div>
						<div class="grow flex flex-col justify-between mx-3">
							<h2 class="text-2xl">{post.description}</h2>
							<div>
								<a
									href={post.link}
									class="btn bg-blue-700 p-2 text-xl text-white rounded shadow-lg hover:bg-blue-800"
									target="_blank"
								>
									Visit the source
								</a>
							</div>
						</div>
						<img
							src={post.img}
							class="h-full content-right align-right items-right"
						/>
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default Post;
