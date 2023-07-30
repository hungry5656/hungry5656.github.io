const author = "Sizhuo (Henry) Sun"
const description = "This is my personal website that presented as a portfolio"
const url = "https://www.hungry5656.com"
export const Metadata = {
    metadataBase: new URL(url),
    title: {
        default: `hungry5656`,
        template: `%s | hungry5656`
    },
    description: description,
    icons: {
        icon: "/favicons/favicon.ico"
    },
    creator: author,
	authors: [{ name: author, url: url }],
    openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
                // TODO: add url for images
				url: "",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
}