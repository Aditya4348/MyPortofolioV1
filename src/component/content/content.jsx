
import Warrior from "../../assets/Wariors.png";
import Project from "./project.jsx";

    const content = [
        {
            page: "navbar",
            title: "MyPortofolio",
        },
        {
            page: "hero",
            introduction: "Hi, I'm Aditya Alfitodinova",
            description: "I'm a passionate Web Developer focused on building modern, high-quality websites. I'm committed to growing continuously and staying up-to-date with the latest web technologies.",
            linkedIn: "https://www.linkedin.com/in/aditya-alfitodinova-3601332ab/",
            linkGit: "https://github.com/Aditya4348"
        },
        {
            page: "about",
            image: Warrior,
            author: "AdTorin",
            quote: "great achievements, Created from great sacrifices",
            title: "About Me",
            description: "Hello, I'm Aditya, a recent graduate with expertise as a full-stack web developer, currently based in Kabupaten Bandung, Indonesia. I specialize in developing responsive web applications using Laravel for the backend, and Tailwind CSS and React for the frontend. I have completed several projects, such as a school savings application, a company profile website, and various other applications, which you can view directly on my GitHub account. I also have experience in organizational activities, which has helped shape my ability to work collaboratively, responsibly, and effectively within a team. I am open to job opportunities as a freelancer or in a full-time position, and I am always enthusiastic about learning and growing in the ever-evolving world of technology.",
        },
        {
            page: 4,
            title: "Content 4",
            description: "Description 4"
        },
    ]

export const portoMenu = [
        {
            id: 1,
            title: "Project",
            content: <Project />
        },
        {
            id: 2,
            title: "Gallery",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 3,
            title: "My Skills",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

export default content;
