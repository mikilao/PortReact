import React, { useEffect, useState } from 'react';
import sanityClient from '../Client'
export default function Project() {

    const [projectData, setProjectData] = useState(null); //setting the state
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
          
        }`
        )
            .then((data) => setProjectData(data))
            .catch((error) => console.log(error));
    }, [])
    return (
        <main className='bg-yellow-100 min-h-screen p-12'>
            <section className="container mx-auto">
                <h1 className='text-5xl flex justify-center cursive'> Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center'>by Rachel</h2>
                <section className=" grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index)=> (
                    <article className='relative rounded large shadow-xl bg-white p-16'>
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-200">
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}</a></h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">
                                    Finished on
                                </strong> :{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span> <strong className="font-bold">Company</strong> :{" "} {project.place}
                            </span>
                            <span><strong className="font-bold"> Type</strong> :{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-300 font-bold hover:text-red-700 underline"
                                > View the Project here!{" "}
                                <span aria-label="right pointer">
                                    HERE
                                    </span>
                                    </a>
                        </div>
                    </article>))}
                </section>
            </section>
        </main>
    )
} 