import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import AddContent from "./Components/AddContent";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [user, setUser] = useState({});
	const [refreshKey, refresh] = useState("");

	useEffect(() => {
		axios
			.get("/auth/verifyToken")
			.then((res) => {
				setUser(res.data);
				setLoggedIn(true);
			})
			.catch((err) => {
				setLoggedIn(false);
			});
	}, [refreshKey]);

	return (
		<div class="">
			<Navbar user={user} loggedIn={loggedIn} refresh={refresh} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/login"
					element={<Login refresh={refresh} loggedIn={loggedIn} />}
				/>
				<Route
					path="/resources/"
					element={<Resources user={user} loggedIn={loggedIn} />}
				/>
				<Route path=":postID" element={<Post loggedIn={loggedIn} />} />
				<Route
					path="/profile"
					element={
						<Profile refresh={refresh} user={user} loggedIn={loggedIn} />
					}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/addContent"
					element={
						<AddContent refresh={refresh} user={user} loggedIn={loggedIn} />
					}
				/>
				<Route
					path="*"
					element={
						<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
							<div class="max-w-5xl space-y-8">
								<div>
									<h2 class="mt-8 text-center text-4xl font-extrabold text-gray-900">
										There's nothing here!
									</h2>
								</div>
							</div>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
