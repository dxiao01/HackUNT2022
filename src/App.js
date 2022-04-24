import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
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
					path="/resources"
					element={<Resources user={user} loggedIn={loggedIn} />}
				/>
				<Route
					path="/profile"
					element={<Profile user={user} loggedIn={loggedIn} />}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/addContent"
					element={<AddContent user={user} loggedIn={loggedIn} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
