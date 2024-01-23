
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Yuri",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		// {
		// 	title: "Links",
		// 	link: "/links",
		// }
		// {
		// 	title: "Blog",
		// 	link: "https://medium.com/@hashirshoaeb",
		// }
	],
}
export const intro = {
	title: "Hey, I'm Yuri!",
	description: "Full Stack Software Developer experienced with Rails, MongoDB, Javascript, and React.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/13Qri0TlhtWqscfmG2NN_y1ky2-NkwRqIt-WpViFeeHc/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Cornell University in May 2023 with a bachelors of science in Industrial and Labor Relations, with a minor in UX Design. It was my first Intro to Python class at Cornell which exposed me to the fun challenge of coding, and propelled me post-graduation to attend App Academy, a rigorous 16-week full time coding bootcamp. There, I learned new technologies and developed multiple projects using Node.js, React, Ruby on Rails, and more. I'm currently working on my own personal project, Kittycord, a Discord-inspired live messaging site run on Rails and React. In my free time, I like to cook for my family (my favorite dish is curry!) and game. One of my biggest endeavors was leading the skilled taiko-drumming student group, Yamatai Taiko, in my senior year of college!"
	],
}

// export const work = {
// 	title: "What I do",
// 	cards: [
// 		{
// 			title: "Mobile App Development",
// 			description: "I create pixel perfect iOS and Andriod apps using Flutter.",
// 			icons: null,
// 		},
// 		{
// 			title: "Web Development",
// 			description: "I create responsive static websites using Reactjs.",
// 			icons: null,
// 		}
// 	],
// }

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Bonjour World",
			description: "A web platform designed to facilitate language exchange events for both language learners and polyglots!",
			icons: [
				{
					icon: faLink,
					link: "https://bonjourworld.onrender.com/",
				},
				{
					icon: faGithub,
					link: "https://github.com/yuris1234/Bonjour-World",
				},
			]
		},
		{
			title: "Kittycord",
			description: "Live chat messaging built on Rails and React, inspired by Discord!",
			icons: [
				{
					icon: faLink,
					link: "https://kittycord.onrender.com/"
				},
				{
					icon: faGithub,
					link: "https://github.com/yuris1234/Kittycord",
				},
			]
		},
		{
			title: "Music Maker",
			description: "Test your reflexes and catch fast-falling notes from this musical playground built with JavaScript, HTML Canvas, and Web Audio API!",
			icons: [
				{
					icon: faLink,
					link: "https://yuris1234.github.io/Music-Maker/",
				},
				{
					icon: faGithub,
					link: "https://github.com/yuris1234/Music-Maker"
				}
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Let's chat! Please don't hesitate to reach out.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:yls4@cornell.edu",
			isPrimary: true,
		},
		{
			title: "LinkedIn", 
			icon: faLinkedin,
			link: "https://www.linkedin.com/in/yuri-sugihara/"
		},
		{
			title: "Github",
			link: "https://github.com/yuris1234"
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Yuri Sugihara",
	description: "Full Stack Software Engineer. I graduated from Cornell University in May 2023 with a degree in employment law, and graduated from App Academy's 16-week full-time bootcamp in December 2023.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/yuris1234",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/yuri-sugihara/",
		},
	]
}