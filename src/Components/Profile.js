import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Profile = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("/posts/user/" + props.user._id).then((res) => {
			setPosts(res.data);
		});
	}, [props.user]);

	if (props.loggedIn) {
		return (
			<div class="flex items-center justify-center">
				<div class="bg-white w-3/4 mt-10 rounded-lg">
					<div class="flex items-center justify-center pt-10 flex-col">
						<img src="/astronaut.jpg" class="rounded-full w-32"></img>
						<h1 class="text-gray-800 font-extrabold text-3xl mt-5">
							{props.user.firstName} {props.user.lastName}
						</h1>
						<h1 class="text-gray-600 text-sm text-center">
							{props.user.email}
						</h1>
						<h1 class="text-gray-500 text-sm">
							Total Points: {props.user.points}
						</h1>
						<h1 class="text-gray-500 text-sm">Post count: {posts.length}</h1>
					</div>
					<div class="flex items-center justify-center pt-10 flex-col">
						<h1 class="text-gray-800 font-extrabold text-3xl mt-5">Posts</h1>
						<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{posts.map((post) => (
								<button class="w-full border border-gray-200 rounded-lg shadow-lg hover:bg-slate-200">
									<div class="flex flex-col items-center justify-center p-10">
										<h2 class="text-lg font-medium text-center">
											{post.title}
										</h2>
										<p class="font-medium text-blue-700">{post.type}</p>
										<p class="py-3"></p>
										<img src={post.img} />
									</div>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default Profile;
