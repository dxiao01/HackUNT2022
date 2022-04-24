import { Link, useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Navbar = (props) => {
	const navigate = useNavigate();

	const logout = () => {
		axios.post("/auth/logout").then(() => {
			navigate("/login");
			props.refresh("logout");
		});
	};

	if (props.loggedIn) {
		return (
			<nav class="bg-gray-800 w-full ">
				<div class="max-w-7xl mx-auto px-2">
					<div class="relative flex items-center justify-between h-16">
						<div class="flex-1 flex items-center justify-start">
							<div class="hidden sm:block sm:ml-6">
								<div class="flex space-x-4">
									<Link
										to="/"
										class="text-gray-300 px-3 py-1 rounded-md text-2xl font-extrabold"
									>
										<a href="#Home">Spaceverse</a>
									</Link>
								</div>
							</div>
						</div>
						<div class="absolute inset-y-0 right-0 flex items-center text-white">
							<Link
								to="/resources"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium mr-3"
							>
								<a href="#Resources">Resources</a>
							</Link>
							<Link to="/addContent" class="px-5">
								<a>
									<BsPlusCircle class="w-7 h-7" />
								</a>
							</Link>
							<Link to="/profile" class="px-5">
								<a>
									<CgProfile class="w-7 h-7" />
								</a>
							</Link>
							<button
								onClick={logout}
								class=" text-gray-800 bg-white px-3 py-2 rounded-md text-lg font-medium ml-5"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>
		);
	} else {
		return (
			<nav class="bg-gray-800 w-full ">
				<div class="max-w-7xl mx-auto px-2">
					<div class="relative flex items-center justify-between h-16">
						<div class="flex-1 flex items-center justify-start">
							<div class="hidden sm:block sm:ml-6">
								<div class="flex space-x-4">
									<Link
										to="/"
										class="text-gray-300 px-3 py-1 rounded-md text-2xl font-extrabold"
									>
										<a href="#Home">Spaceverse</a>
									</Link>
								</div>
							</div>
						</div>
						<div class="absolute inset-y-0 right-0 flex items-center text-white">
							<Link
								to="/login"
								class=" text-gray-800 bg-white px-3 py-2 rounded-md text-lg font-medium ml-5"
							>
								Login
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
