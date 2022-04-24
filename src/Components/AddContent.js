import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const AddContent = (props) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [thumbnail, setThumbnail] = useState([]);

	const reader = new FileReader();
	reader.onloadend = (event) => {
		if (event.target.readyState == FileReader.DONE) {
			setThumbnail(event.target.result);
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(thumbnail);

		axios
			.post("https://api.cloudinary.com/v1_1/dchanana/image/upload", {
				file: thumbnail,
				upload_preset: "hackunt2022",
			})
			.then((res) => {
				const img = res.data.url;
				axios
					.post("/posts/addPost", {
						title,
						description,
						img,
						type,
						link,
					})
					.then((res) => {
						props.refresh("added post");
						navigate("/resources");
					});
			});
	};

	if (props.loggedIn) {
		return (
			<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div class="max-w-md w-full space-y-8">
					<div>
						<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Add Content
						</h2>
					</div>
					<form class="mt-8 space-y-6" onSubmit={onSubmit}>
						<div class="rounded-md shadow-sm -space-y-px">
							<div>
								<label for="title" class="sr-only">
									Title
								</label>
								<input
									id="title"
									name="title"
									type="title"
									required
									class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Title"
									onChange={(e) => {
										setTitle(e.target.value);
									}}
								/>
							</div>
							<div>
								<label for="content-type" class="sr-only">
									Content Type
								</label>
								<input
									id="content-type"
									name="content-type"
									type="content-type"
									required
									class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Content Type"
									onChange={(e) => {
										setType(e.target.value);
									}}
								/>
							</div>
							<div>
								<label for="link" class="sr-only">
									Link
								</label>
								<input
									id="link"
									name="link"
									type="link"
									required
									class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Link"
									onChange={(e) => {
										setLink(e.target.value);
									}}
								/>
							</div>
							<div>
								<label for="description" class="sr-only">
									Description
								</label>
								<textarea
									id="name"
									name="name"
									type="name"
									required
									class="appearance-none rounded-none relative block rounded-b-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Description"
									onChange={(e) => {
										setDescription(e.target.value);
									}}
								/>
							</div>
							<div class="relative block w-full px-3 py-2 text-gray-500 text-sm">
								Thumbnail{"  "}
								<input
									type="file"
									onChange={(e) => {
										reader.readAsDataURL(e.target.files[0]);
									}}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5"
							>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default AddContent;
