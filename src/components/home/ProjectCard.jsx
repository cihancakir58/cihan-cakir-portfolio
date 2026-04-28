/* eslint-disable react/prop-types */
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import SpotlightCard from "../Animation/SpotlightCard";

const storeIcons = {
    ios: <FaApple className="text-xl" />,
    android: <FaGooglePlay className="text-lg" />,
    web: <FaGlobe className="text-lg" />,
};

const ProjectCard = ({ project }) => {
    const { name, description, icon, type, technologies = [], stores = [] } = project;

    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(45, 212, 191, 0.18)">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-auto flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/20 to-transparent blur-2xl" />
                        <div className="relative h-36 w-36 rounded-[2rem] overflow-hidden border border-cyan-300/20 bg-[#0c2234]/80 shadow-2xl">
                            <img
                                src={icon}
                                alt={`${name} logosu`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{type}</p>
                            <h2 className="mt-2 text-3xl font-russo bg-gradient-to-r text-transparent bg-clip-text from-cyan-200 via-sky-300 to-white">
                                {name}
                            </h2>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-300 leading-7">{description}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {stores.map((store) => (
                            <a
                                key={store.url}
                                href={store.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-[#0c2234]/75 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                                    {storeIcons[store.platform]}
                                </span>
                                {store.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
};

export default ProjectCard;
