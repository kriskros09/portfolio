import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	// {
	// 	name: "Projects",
	// 	hash: "#projects",
	// },
	{
		name: "Skills",
		hash: "#skills",
	},
	// {
	// 	name: "Experience",
	// 	hash: "#experience",
	// },
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Front End Developer",
		location: "Remote",
		description:
			"Implemented a wide range of features for Smart Building Solutions",
		icon: React.createElement(LuGraduationCap),
		date: "Present",
	},
	{
		title: "Front-End Developer",
		location: "Remote",
		description:
			"The goal of this project was to create a decentralized application (dApp) on the Ethereum blockchain. This was represented within an interactive map, customers could also create their accounts, add items to their cart and purchase NFTS with Metamask and other providers through an SSO authentification flow. The tech stack for this project was Java for the backend and React/NextJS for the front end. Both code bases were deployed to AWS.",
		icon: React.createElement(CgWorkAlt),
		date: "2022 - 2023",
	},
	{
		title: "Freelance Front-End Developer",
		location: "Montreal, Canada",
		description:
			"I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2018 - 2022",
	},
] as const;

export const projectsData = [
	{
		title: "CorpComment",
		description:
			"I worked as a front-end developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"Framer Motion",
] as const;
