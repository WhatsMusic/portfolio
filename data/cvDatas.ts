// data/cvData.ts
export interface Dictionary {
	name: string;
	degree: string;
	title: string;
	contact: {
		title: string;
		subtitle: string;
		text: string;
		email: string;
		github: string;
		linkedIn?: string;
	};
	skillCategories?: string[]; // Make skillCategories optional
}

export interface cvData {
	name: string;
	title: string;
	degree: string;
	tagline: string;
	profile: string;
	professionalExperience: ExperienceItem[];
	education: EducationItem[];
	skillCategories: SkillCategoryData[];
	projects: Project[];
	additionalInfo: AdditionalInfo;
	contact: {
		title: string;
		subtitle: string;
		text: string;
		email: string;
		github: string;
		linkedIn?: string;
	};
}

export interface AdditionalInfo {
	coreCompetencies: SkillCategoryData[];
	musician: string;
	international: string;
	github: string;
	contact: {
		email: string;
		github: string;
	};
}
export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	description: string[];
}

export interface EducationItem {
	degree: string;
	institution: string;
	period: string;
	description: string[];
}

export interface SkillCategoryData {
	title: string;
	skills: string[];
}

export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	repoUrl: string | null;
	liveUrl: string | null;
}

export const createCvDataFromDictionary = (dictionary: cvData): cvData => {
	return {
		name: dictionary.name ?? "",
		title: dictionary.title ?? "",
		degree: dictionary.degree ?? "",
		tagline: dictionary.tagline ?? "",
		profile: dictionary.profile ?? "",
		professionalExperience: dictionary.professionalExperience ?? [],
		education: dictionary.education ?? [],
		skillCategories: dictionary.skillCategories ?? [],
		projects: {
			...(dictionary.projects ?? [])
		},
		additionalInfo: {
			coreCompetencies: dictionary.additionalInfo?.coreCompetencies ?? [],
			musician: dictionary.additionalInfo?.musician ?? "",
			international: dictionary.additionalInfo?.international ?? "",
			github: dictionary.additionalInfo?.github ?? "",
			contact: {
				email: dictionary.additionalInfo?.contact?.email ?? "",
				github: dictionary.additionalInfo?.contact?.github ?? ""
			}
		},
		contact: {
			title: dictionary.contact?.title ?? "",
			subtitle: dictionary.contact?.subtitle ?? "",
			text: dictionary.contact?.text ?? "",
			email: dictionary.contact?.email ?? "",
			github: dictionary.contact?.github ?? "",
			linkedIn: dictionary.contact?.linkedIn ?? ""
		}
	};
};

// export const cvData = {
// 	name: getDictionary.name,
// 	title: "Full Stack Developer",
// 	degree: "B.Eng.",
// 	tagline: "Bridging Front-End Creativity with Back-End Power",
// 	profile:
// 		"Enthusiastic Full Stack Developer with over 10 years of experience in software and web development, project management, and international engineering. Specializes in Next.js, TypeScript, TailwindCSS, and PostgreSQL. Combines strong technical expertise with an agile, user-centered approach to deliver scalable, modern solutions.",
// 	coreCompetencies: [
// 		{
// 			title: "Front-End & Full Stack",
// 			skills: [
// 				"Next.js (App Router)",
// 				"React",
// 				"TypeScript",
// 				"TailwindCSS",
// 				"Node.js",
// 				"PostgreSQL",
// 				"RESTful APIs"
// 			]
// 		},
// 		{
// 			title: "Mobile & App Development",
// 			skills: [
// 				"Kotlin (Android)",
// 				"Swift (iOS)",
// 				"Jetpack Navigation",
// 				"MVVM",
// 				"Retrofit",
// 				"Firebase"
// 			]
// 		},
// 		{
// 			title: "UI/UX & Design",
// 			skills: [
// 				"Figma",
// 				"Material Design",
// 				"Rapid Prototyping",
// 				"Wireframing"
// 			]
// 		},
// 		{
// 			title: "Project Management & Innovation",
// 			skills: [
// 				"Agile Methods (Scrum, Kanban)",
// 				"Design Thinking",
// 				"International & Cross-Cultural Team Leadership"
// 			]
// 		},
// 		{
// 			title: "Tools & Platforms",
// 			skills: [
// 				"Git/GitHub",
// 				"Android Studio",
// 				"Xcode",
// 				"Adobe CC (Photoshop, After Effects)",
// 				"Midjourney",
// 				"DALL·E"
// 			]
// 		},
// 		{
// 			title: "Languages",
// 			skills: ["German (Native)", "English (B2)"]
// 		}
// 	] as SkillCategoryData[],
// 	professionalExperience: [
// 		{
// 			role: "Full Stack & Frontend Development (Freelance)",
// 			company: "",
// 			period: "2022 – Present",
// 			description: [
// 				"Develop and maintain modern web applications using Next.js, TypeScript, TailwindCSS, and PostgreSQL.",
// 				"Implement responsive UI layouts and optimize performance for cross-platform accessibility.",
// 				"Integrate RESTful APIs and back-end services, ensuring seamless data flow and security.",
// 				"Collaborate with clients to gather requirements and deliver feature-rich solutions on time."
// 			]
// 		},
// 		{
// 			role: "CTO Web Development",
// 			company: "AL-ARABIYYA-INSTITUTE",
// 			period: "2017 – 2022",
// 			description: [
// 				"Directed the conception and implementation of major web platforms, such as Modern-Standard-Arabic.net and TOAFL.com, servicing thousands of users globally.",
// 				"Employed data-driven methodologies to enhance user experience and boost learning outcomes.",
// 				"Oversaw full project lifecycles, from requirements gathering and prototyping to deployment and user training.",
// 				"Managed cross-functional teams with a focus on agile development, code reviews, and continuous improvement."
// 			]
// 		},
// 		{
// 			role: "Technical Customer Service Manager",
// 			company: "Borsig ZM",
// 			period: "2016",
// 			description: [
// 				"Provided technical solutions and guidance for complex machinery and plant engineering projects.",
// 				"Coordinated with clients, engineers, and vendors to resolve technical issues efficiently."
// 			]
// 		},
// 		{
// 			role: "Project Manager (Engineering)",
// 			company: "CRYOTEC Anlagenbau GmbH",
// 			period: "2012 – 2016",
// 			description: [
// 				"Planned and delivered large-scale industrial installations in the Middle East and Europe, ensuring timely project completion.",
// 				"Led international engineering teams, conducted on-site inspections, and performed technical clarifications."
// 			]
// 		}
// 	] as ExperienceItem[],
// 	education: [
// 		{
// 			degree: "IT Specialist for App Development",
// 			institution: "Syntax Institut",
// 			period: "2023 – 2024",
// 			description: [
// 				"Advanced modules in Android (Kotlin) and iOS (Swift) development, UX/UI design with Figma, and agile project management.",
// 				"Gained hands-on experience in data storage (Room, Core Data), REST integrations (Retrofit, URLSession), and modern architecture patterns (MVVM, Coroutines)."
// 			]
// 		},
// 		{
// 			degree: "Bachelor's Degree in Industrial Engineering (Chemistry & Environmental Technology)",
// 			institution: "Hochschule Merseburg",
// 			period: "2009 – 2012",
// 			description: [
// 				"Focus on marketing of capital goods and search engine optimization."
// 			]
// 		}
// 	],
// 	additionalInfo: {
// 		musician:
// 			'Passionate Musician: Produces and composes electronic music under the artist name "ARTEKK” and Indie Pop Rock under the artist name RobArte Soul.',
// 		international:
// 			"International Experience: Extensive work in the Middle East; adept at managing culturally diverse teams.",
// 		github: "github.com/WhatsMusic"
// 	},
// 	contact: {
// 		email: "robert.schulz.dev@example.com", // Replace with actual email
// 		github: "https://github.com/WhatsMusic"
// 		// Add LinkedIn if available
// 		// linkedIn: "https://linkedin.com/in/yourprofile"
// 	},
// 	// Placeholder Projects - Replace with actual project details
// 	projects: [
// 		{
// 			id: 1,
// 			title: "Modern-Standard-Arabic.net (Conceptual)",
// 			description:
// 				"Major web platform developed during CTO role, servicing thousands of users globally focused on learning Arabic.",
// 			technologies: [
// 				"Web Technologies (Specifics TBC)",
// 				"Data-Driven UX",
// 				"Platform Architecture"
// 			],
// 			imageUrl: "/placeholder.png", // Add a placeholder image
// 			// liveUrl: "https://modern-standard-arabic.net", // If applicable
// 			repoUrl: undefined
// 		},
// 		{
// 			id: 2,
// 			title: "TOAFL.com (Conceptual)",
// 			description:
// 				"An online assessment platform for Arabic language proficiency, designed for scalability and user engagement.",
// 			technologies: [
// 				"Web Technologies (Specifics TBC)",
// 				"Assessment Tools",
// 				"User Management"
// 			],
// 			imageUrl: "/placeholder.png", // Add a placeholder image
// 			// liveUrl: "https://toafl.com", // If applicable
// 			repoUrl: undefined
// 		},
// 		{
// 			id: 3,
// 			title: "Freelance Project Example",
// 			description:
// 				"Developed a modern web application for a client using the latest stack, focusing on performance and responsive design.",
// 			technologies: [
// 				"Next.js",
// 				"TypeScript",
// 				"TailwindCSS",
// 				"PostgreSQL",
// 				"REST API Integration"
// 			],
// 			imageUrl: "/placeholder.png", // Add a placeholder image
// 			liveUrl: undefined,
// 			repoUrl: undefined
// 		}
// 	] as Project[]
// };
