import { useState } from "react";
import axios from "axios";

const Signup = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email,
			password,
		};

		axios.post("/auth/register", data).then((res) => {
			console.log(res);
		});
	};

	return (
		<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div class="max-w-md w-full space-y-8">
				<div>
					<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form class="mt-8 space-y-6" onSubmit={onSubmit}>
					<div class="rounded-md shadow-sm -space-y-px">
						<div>
							<label for="first-name" class="sr-only">
								First Name
							</label>
							<input
								id="first-name"
								name="fname"
								type="fname"
								required
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="First Name"
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
							/>
						</div>
						&nbsp;
						<div>
							<label for="last-name" class="sr-only">
								Last Name
							</label>
							<input
								id="last-name"
								name="lname"
								type="lname"
								required
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Last Name"
								onChange={(e) => {
									setLastName(e.target.value);
								}}
							/>
						</div>
						&nbsp;
						<div>
							<label for="email-address" class="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						&nbsp;
						<div>
							<label for="password" class="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autocomplete="current-password"
								required
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5"
						>
							Signup
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
