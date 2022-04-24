import { Navigate } from "react-router-dom";

const Profile = (props) => {
	if (props.loggedIn) {
		return (
			<div class="flex items-center justify-center">
				<div class="bg-white w-3/4 mt-10 rounded-lg">
					<div class="flex items-center justify-center pt-10 flex-col">
						<img src="/astronaut.jpg" class="rounded-full w-32"></img>
						<h1 class="text-gray-800 font-extrabold text-3xl mt-5">
							{props.user.firstName} {props.user.lastName}
						</h1>
						<h1 class="text-gray-500 text-sm">
							Total Points: {props.user.points}
						</h1>
						<h1 class="text-gray-500 text-sm">Post count: xxx</h1>
					</div>
					<div class="flex items-center justify-center pt-10 flex-col">
						<h1 class="text-gray-800 font-extrabold text-3xl mt-5">Posts</h1>
						<div class="w-full px-12 mx-auto text-center">
							<div class="grid grid-cols-1">
								<div class="w-full	border-gray-200 rounded-lg shadow-lg">
									<div class="flex justify-between p-10 max-h-80">
										<div class="flex flex-col items-left justify-left p-10">
											<h2 class="text-lg font-medium">
												How NASA Reinvented The Wheel
											</h2>
											<p class="font-medium text-grey-100">Article</p>
											<p class="text-black">Tags: Engineering, Materials</p>
										</div>
										<div>
											<img
												src="/wheel.jpeg"
												class="h-60 w-60 object-scale-down"
											></img>
										</div>
									</div>
								</div>

								<div class="w-full	border-gray-200 rounded-lg shadow-lg">
									<div class="flex justify-between p-10 max-h-80">
										<div class="flex flex-col items-left justify-left p-10">
											<h2 class="text-lg font-medium">
												MEGA Drive — the Tech That Promises Near Light-Speed
												Travel!
											</h2>
											<p class="font-medium text-grey-100">Article</p>
											<p class="text-black">
												Tags: Theoretical Physics, Interstellar Travel,
												Light-Speed
											</p>
										</div>
										<div>
											<img
												src="/megaengine.jpeg"
												class=" h-60 w-60 object-scale-down"
											></img>
										</div>
									</div>
								</div>

								<div class="w-full	border-gray-200 rounded-lg shadow-lg">
									<div class="flex justify-between p-10 max-h-80">
										<div class="flex flex-col items-left justify-left p-10">
											<h2 class="text-lg font-medium">
												NASA’s Perseverance Rover arrives at delta for new
												science campaign
											</h2>
											<p class="font-medium text-grey-100">News</p>
											<p class="text-black">
												Tags: Mars, Robotic Exploration, Mapping
											</p>
										</div>
										<div>
											<img
												src="/mars.png"
												class=" h-60 w-60 object-scale-down"
											></img>
										</div>
									</div>
								</div>
							</div>
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
