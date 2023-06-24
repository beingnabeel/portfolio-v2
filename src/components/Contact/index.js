import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import React from "react";

const data = [
    {
        section: "Youtube",
        title: "Blackboy96",
        link: "https://www.youtube.com/@blackboi96",
        icon: faYoutube,
    },
    {
        section: "Github",
        title: "tOxicV4p0r",
        link: "https://github.com/tOxicV4p0r",
        icon: faGithub,
    },
    {
        section: "linkedin",
        title: "Kraisorn",
        link: "https://www.linkedin.com/in/kraisorn-deelert/",
        icon: faLinkedin,
    },
]

function Contact() {
    return (
        <section className="flex items-end pb-10 mb-10 lg:pb-0">
            <div className="flex gap-6">
                {
                    data.map(({ section, title, link, icon }) => (
                        <React.Fragment key={section}>
                            <a className="underline underline-offset-4 text-gray-500 hover:text-gray-300" href={link} alt={title} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} className="text-2xl" />
                            </a>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
};

export default Contact;