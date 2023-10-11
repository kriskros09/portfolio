"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				Hey there! I'm an enthusiastic{" "}
				<span className='font-bold'>
					front-end developer based in Canada, with a solid 8 years of
					experience building websites and web apps
				</span>
				. My journey as a freelancer turned me into a problem solver !{" "}
				<span className='font-bold'>
					I'm all about exploring new languages, frameworks, and trends
				</span>
				. Always staying updated with the latest in tech and i'm always up for a
				challenge to apply that knowledge. Good collaboration is important so i
				always like teaming up with designers, back-end developers, and other
				talented folks. Together, we create awesome projects. My goal is to make
				websites work seamlessly on any device. I'm all about making them fast
				and user-friendly.{" "}
				<span className='font-bold'>
					Right now, I'm on the lookout for a fresh challenge{" "}
				</span>
				that lets me unleash my skills and learn even more. I want to be part of
				a fun team where we can create amazing stuff and keep pushing the
				boundaries of front-end development!
			</p>

			<p>
				<span className='italic'>When I'm not coding</span>, I enjoy playing
				video games, watching movies, and playing with my dog. I also enjoy{" "}
				<span className='font-medium'>learning new things</span>.{" "}
			</p>
		</motion.section>
	);
}
