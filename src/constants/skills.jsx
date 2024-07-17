import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaAws, FaFlask} from "react-icons/fa";
import { FaGolang, FaGitAlt } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import { SiSpringboot, SiMysql, SiMongodb, SiNginx, SiWireshark, SiJira, SiGooglecloud, SiPrometheus, SiGrafana, SiAnaconda, SiPycharm, SiIntellijidea, SiConfluence, SiDocker, SiK3S, SiKubernetes, SiUbuntu } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";

export const SKILLS_CONSTANT = [
    {
		category: "Backend",
		items: [
            { name: "Flask", icon: <FaFlask size={32} /> },
            { name: "Django", icon: <AiOutlineAntDesign size={32} /> },
            { name: "Node.js", icon: <IoLogoJavascript size={32} /> },
            { name: "Spring", icon: <SiSpringboot size={32} /> },
            { name: "MySQL", icon: <SiMysql size={32} /> },
            { name: "MongoDB", icon: <SiMongodb size={32} /> },
            { name: "Nginx", icon: <SiNginx size={32} /> },
            { name: "WSGI", icon: <SiNginx size={32} /> },
            
        ]
	},
	{
		category: "Cloud",
		items: [
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "GCP", icon: <SiGooglecloud size={32} /> },
            { name: "Prometheus", icon: <SiPrometheus size={32} /> },
            { name: "Grafana", icon: <SiGrafana size={32} /> },
            { name: "Docker", icon: <SiDocker size={32} /> },
            { name: "Kubernetes", icon: <SiKubernetes size={32} /> },
		]
	},
	{
		category: "Frontend",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React.js", icon: <FaReact size={32} /> },
            { name: "Next.js", icon: <TbBrandNextjs size={32} /> },
            { name: "Bootstrap", icon: <BsBootstrap size={32} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Jira", icon: <SiJira width={32} /> },
			{ name: "Confluence", icon: <SiConfluence size={32} /> },
			{ name: "Git", icon: <FaGitAlt size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			// { name: "VSCode", icon: <VscVscode size={32} /> },
			{ name: "Wireshark", icon: <SiWireshark size={32} /> },
			{ name: "Anaconda", icon: <SiAnaconda size={32} /> },
			{ name: "PyCharm", icon: <SiPycharm size={32} /> },
			{ name: "IDEA", icon: <SiIntellijidea size={32} /> },
			{ name: "Ubuntu", icon: <SiUbuntu size={32} /> },

		]
	}
];