import Image from "next/image";

// Projects Boulevard Component
export default function ProjectsBoulevard() {
    const projects = [
        { name: 'Project A', description: 'Description of Project A', imageSrc: 'project-a.jpg' },
        // Add more projects as needed
    ];

    return (
        <div className="projects-boulevard">
            {projects.map((project) => (
                <div className="project-card" key={project.name}>
                    <Image src={""} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
