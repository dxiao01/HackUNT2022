import React from "react";

const AddContent = () => {
	return (
		<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div class="max-w-md w-full space-y-8">
				<div>
					<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Add Content
					</h2>
				</div>
				<form class="mt-8 space-y-6" action="#" method="POST">
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
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Content Type"
							/>
						</div>
						<div>
							<label for="name" class="sr-only">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="name"
								required
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Name"
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
								class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Link"
							/>
						</div>
						<div class="relative block w-full px-3 py-2 text-gray-500 text-sm">
							Thumbnail
						</div>
						<div>
							<input type="file" />
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
};

export default AddContent;
