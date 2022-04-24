import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Resources = (props) => {
	const navigate = useNavigate();

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("/posts").then((res) => {
			setPosts(res.data);
		});
	}, []);

	if (props.loggedIn) {
		return (
			<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div class="max-w-5xl space-y-8">
					<div>
						<h2 class="mt-8 text-center text-4xl font-extrabold text-gray-900">
							Welcome To Spaceverse!
						</h2>
					</div>
					<div>
						<div class="rounded-lg">
							<label for="search-entry" class="sr-only">
								Search Keywords
							</label>
							<input
								id="search-entry"
								name="search"
								type="search"
								required
								class="appearance-none rounded-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Enter Keywords"
							/>
						</div>
						<p class="py-3"></p>
						<div class="text-center">
							<input type="checkbox" id="task1" name="task1" value="1"></input>
							<label class="pr-10 pl-2" for="task">
								News
							</label>
							<input type="checkbox" id="task2" name="task2" value="2"></input>
							<label class="pr-10 pl-2" for="task">
								Videos
							</label>
							<input type="checkbox" id="task3" name="task3" value="3"></input>
							<label class="pr-10 pl-2" for="task">
								Websites
							</label>
							<button
								type="enter"
								class="group justify-center w-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5"
							>
								Enter
							</button>
						</div>
						<div class="rounded-lg"></div>
					</div>
					<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{posts.map((post) => (
							<button
								class="w-full border border-gray-200 rounded-lg shadow-lg hover:bg-slate-200"
								onClick={() => {
									navigate("/" + post._id);
								}}
							>
								<div class="flex flex-col items-center justify-center p-10">
									<h2 class="text-lg font-medium text-center">{post.title}</h2>
									<p class="font-medium text-blue-700">{post.type}</p>
									<p class="py-3"></p>
									<img src={post.img} />
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default Resources;
