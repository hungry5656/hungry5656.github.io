import { OpenAIFilled, OpenAIOutlined } from '@ant-design/icons';
import { AmazonwebservicesOriginalWordmark, AnacondaOriginal, ApachekafkaOriginal, ArchlinuxOriginal, BashOriginal, BootstrapOriginal, ConfluenceOriginal, COriginal, CplusplusOriginal, Css3Original, DockerOriginal, ExpressOriginal, FlaskOriginal, GithubactionsOriginal, GithubOriginal, GitOriginal, GooglecloudOriginal, GoOriginal, GradleOriginal, GrafanaOriginal, GrpcOriginal, GrpcPlain, Html5Original, IntellijOriginal, JavaOriginal, JavascriptOriginal, JenkinsOriginal, JiraOriginal, JupyterOriginal, KerasOriginal, KubernetesOriginal, LatexOriginal, LinuxOriginal, MatlabOriginal, MatplotlibOriginal, MavenOriginal, MongodbOriginal, MysqlOriginal, NextjsOriginal, NginxOriginal, NodejsOriginal, NpmOriginalWordmark, NumpyOriginal, OpenapiOriginal, PandasOriginal, PostmanOriginal, PrometheusOriginal, PycharmOriginal, PythonOriginal, PytorchOriginal, RabbitmqOriginal, ReactOriginal, RedisOriginal, ReduxOriginal, ROriginal, ScikitlearnLine, ScikitlearnOriginal, SonarqubeOriginal, SpringOriginal, SqliteOriginal, SshOriginal, TensorflowOriginal, TypescriptOriginal, UbuntuOriginal, VimOriginal, VisualbasicOriginal, VscodeOriginal} from 'devicons-react';
import { Whisper } from 'next/font/google';
import { SiAdguard, SiBoost, SiEclipsemosquitto, SiExpo, SiHomeassistant, SiHtop, SiJellyfin, SiMapbox, SiMqtt, SiNginxproxymanager, SiPortainer, SiQbittorrent, SiRadarr, SiRiscv, SiSonarr, SiSpeedtest, SiSyncthing, SiTasmota, SiUptimekuma, SiWireshark } from "react-icons/si";

export const SKILLS_CONSTANT = [
    {
		category: "Backend",
		items: [
            { name: "Flask", icon: <FlaskOriginal size={32} /> },
            { name: "Express.js", icon: <ExpressOriginal size={32} /> },
            { name: "Node.js", icon: <NodejsOriginal size={32} /> },
            { name: "Spring", icon: <SpringOriginal size={32} /> },
            { name: "Apache Kafka", icon: <ApachekafkaOriginal size={32} /> },
            { name: "Rabbit MQ", icon: <RabbitmqOriginal size={32} /> },
            { name: "MySQL", icon: <MysqlOriginal size={32} /> },
            { name: "MongoDB", icon: <MongodbOriginal size={32} /> },
            { name: "SQLite", icon: <SqliteOriginal size={32} /> },
            { name: "Redis", icon: <RedisOriginal size={32} /> },            
        ]
	},
	{
		category: "Frontend",
		items: [
			{ name: "Javascript", icon: <JavascriptOriginal size={32} /> },
			{ name: "HTML", icon: <Html5Original size={32} /> },
			{ name: "CSS", icon: <Css3Original size={32} /> },
			{ name: "Typescript", icon: <TypescriptOriginal size={32} /> },
			{ name: "React.js", icon: <ReactOriginal size={32} /> },
            { name: "Next.js", icon: <NextjsOriginal size={32} /> },
            { name: "Bootstrap", icon: <BootstrapOriginal size={32} /> },
			{ name: "Redux", icon: <ReduxOriginal size={32} /> },
			{ name: "Mapbox", icon: <SiMapbox size={32} /> },
			{ name: "Expo", icon: <SiExpo size={32} /> },
		]
	},
	{
		category: "Infrastructure",
		items: [
			{ name: "Kubernetes", icon: <KubernetesOriginal size={32} /> },
            { name: "Docker", icon: <DockerOriginal size={32} /> },
			{ name: "AWS", icon: <AmazonwebservicesOriginalWordmark size={32} /> },
			{ name: "GCP", icon: <GooglecloudOriginal size={32} /> },
            { name: "Prometheus", icon: <PrometheusOriginal size={32} /> },
            { name: "Grafana", icon: <GrafanaOriginal size={32} /> },
			{ name: "Jenkins", icon: <JenkinsOriginal size={32} /> },
            { name: "Nginx", icon: <NginxOriginal size={32} /> },
            { name: "Github Actions", icon: <GithubactionsOriginal size={32} /> },
            { name: "Gradle", icon: <GradleOriginal size={32} /> },
		]
	},
	{
		category: "Languages",
		items: [
			{ name: "C++", icon: <CplusplusOriginal size={32} /> },
			{ name: "C", icon: <COriginal size={32} /> },
			{ name: "Python", icon: <PythonOriginal size={32} /> },
			{ name: "Java", icon: <JavaOriginal size={32} /> },
			{ name: "Go", icon: <GoOriginal size={32} /> },
			{ name: "Bash", icon: <BashOriginal size={32} /> },
			{ name: "R", icon: <ROriginal size={32} /> },
			{ name: "LaTeX", icon: <LatexOriginal size={32} /> },
			{ name: "Matlab", icon: <MatlabOriginal size={32} /> },
			{ name: "VB.NET", icon: <VisualbasicOriginal size={32} /> },

		]
	},
	{
		category: "AI/ML",
		items: [
			{ name: "Tensorflow", icon: <TensorflowOriginal size={32} /> },
			{ name: "PyTorch", icon: <PytorchOriginal size={32} /> },
			{ name: "Numpy", icon: <NumpyOriginal size={32} /> },
			{ name: "Pandas", icon: <PandasOriginal size={32} /> },
			{ name: "Scikit-learn", icon: <ScikitlearnOriginal size={32} /> },
			{ name: "Keras", icon: <KerasOriginal size={32} /> },
			{ name: "Matplotlib", icon: <MatplotlibOriginal size={32} /> },
			{ name: "Anaconda", icon: <AnacondaOriginal size={32} /> },
			{ name: "Jupyter Notebook", icon: <JupyterOriginal size={32} /> },
			{ name: "Open AI", icon: <OpenAIOutlined size={32} /> },
		]
	},
	{
		category: "System/HPC",
		items: [
			{ name: "Linux Kernel", icon: <LinuxOriginal size={32} /> },
			{ name: "Ubuntu", icon: <UbuntuOriginal size={32} /> },
			{ name: "Arch Linux", icon: <ArchlinuxOriginal size={32} /> },
			{ name: "MQTT", icon: <SiMqtt size={32} /> },
			{ name: "Mosquitto", icon: <SiEclipsemosquitto size={32} /> },
			{ name: "Wireshark", icon: <SiWireshark size={32} /> },
			{ name: "htop", icon: <SiHtop size={32} /> },
			{ name: "SSH", icon: <SshOriginal size={32} /> },
			{ name: "RISC-V", icon: <SiRiscv size={32} /> },
			{ name: "Boost", icon: <SiBoost size={32} /> },
		]
	},
	{
		category: "Homelab",
		items: [
            { name: "Home Assistant", icon: <SiHomeassistant size={32} /> },
			{ name: "Jellyfin", icon: <SiJellyfin size={32} /> },
            { name: "Nginx Proxy Manager", icon: <SiNginxproxymanager size={32} /> },
            { name: "Portainer", icon: <SiPortainer size={32} /> },
            { name: "Uptime Kuma", icon: <SiUptimekuma size={32} /> },
			{ name: "Radarr", icon: <SiRadarr size={32} /> },
            { name: "Sonarr", icon: <SiSonarr size={32} /> },
            { name: "Adguard Home", icon: <SiAdguard size={32} /> },
            { name: "Qbittorrent", icon: <SiQbittorrent size={32} /> },
            { name: "Syncthing", icon: <SiSyncthing size={32} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <GithubOriginal size={32} /> },
			{ name: "Jira", icon: <JiraOriginal size={32} /> },
			{ name: "Confluence", icon: <ConfluenceOriginal size={32} /> },
			{ name: "VSCode", icon: <VscodeOriginal size={32} /> },
			{ name: "Intellij", icon: <IntellijOriginal size={32} /> },
			{ name: "PyCharm", icon: <PycharmOriginal size={32} /> },
			{ name: "Vim", icon: <VimOriginal size={32} /> },
			{ name: "Git", icon: <GitOriginal size={32} /> },
			{ name: "SonarQube", icon: <SonarqubeOriginal size={32} /> },
			{ name: "Postman", icon: <PostmanOriginal size={32} /> },

		]
	}
];