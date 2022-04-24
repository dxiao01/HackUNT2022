import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { defineCustomElements } from "shooting-stars/dist/loader";

const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	defineCustomElements(window);
	return (
		<div class="h-full py-8 scrollbar-hide bg-gray-900">
			<shooting-stars
				height="5"
				width="200"
				min-speed="20"
				max-speed="30"
				num="70"
			></shooting-stars>
			<div
				class="text-center text-8xl font-extrabold text-white"
				data-aos="fade-up"
			>
				Spaceverse
			</div>
			<div
				class=" text-center text-3xl font-extrabold mt-48 text-white"
				data-aos="fade-right"
			>
				Your Universe for All Things Space!
			</div>
			<div
				class="text-center text-2xl font-extrabold my-48 mx-60 float-left text-white"
				data-aos="fade-left"
			>
				Spaceverse is a novel space-based education software. It brings all the
				resources from around the world together to one location in order help
				humanity understand recent space advancements, complex universal
				concepts, human exploration frontiers, and basically everything in the
				universe (pun intended). The goal of Spaceverse is to educate the
				community about the universe by consolidating information from news
				websites, allowing users to contribute to information by creating
				videos/websites, and gamifying the process of learning.
			</div>
			<div class="max-w-6xl px-12 mx-auto text-center">
				<div class="space-y-12 md:text-center" data-aos="fade-up">
					<div class="max-w-3xl mb-10 space-y-5 sm:mx-auto sm:space-y-4">
						<h2 class="relative text-4xl font-extrabold tracking-tight sm:text-5xl mt-10 text-white">
							About Us
						</h2>
					</div>
				</div>
				<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
					<div
						class="w-full border border-gray-200 rounded-lg shadow-lg bg-slate-200"
						data-aos="flip-down"
					>
						<div class="flex flex-col items-center justify-center p-10">
							<h2 class="text-lg font-medium">Daniel Xiao</h2>
							<p class="font-medium text-blue-500">Frontend Designer </p>
						</div>
					</div>
					<div
						class="w-full border border-gray-200 rounded-lg shadow-lg bg-slate-200"
						data-aos="flip-down"
					>
						<div class="flex flex-col items-center justify-center p-10">
							<h2 class="text-lg font-medium">Dhruv Chanana</h2>
							<p class="font-medium text-blue-500">Backend Developer</p>
						</div>
					</div>
					<div
						class="w-full border border-gray-200 rounded-lg shadow-lg bg-slate-200"
						data-aos="flip-down"
					>
						<div class="flex flex-col items-center justify-center p-10">
							<h2 class="text-lg font-medium">Jathin Pranav Singaraju</h2>
							<p class="font-medium text-blue-500">Frontend Designer</p>
						</div>
					</div>
					<div
						class="w-full border border-gray-200 rounded-lg shadow-lg bg-slate-200"
						data-aos="flip-down"
					>
						<div class="flex flex-col items-center justify-center p-10">
							<h2 class="text-lg font-medium">James Yang</h2>
							<p class="font-medium text-blue-500">Logistics</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
