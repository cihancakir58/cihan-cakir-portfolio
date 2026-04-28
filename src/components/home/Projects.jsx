import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    }, [])

    return (
        <section id='projects' className="pb-24 mt-5">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">

                <h1 className="text-center text-5xl font-bold">Projelerim ve <span className="text-[#5c29b4]">Yayınlarım</span></h1>
                <p className="text-center mt-2 text-lg text-gray-300 mb-8">Mobil uygulamalar, web siteleri ve yayında olan dijital ürünlerim tek alanda.</p>

                <div className="flex flex-col gap-12">
                    {
                        projects.map(project => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                >

                            </ProjectCard>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}

export default Projects
