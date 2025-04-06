import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { getDictionary } from '@/lang/dictionaries';

export default async function ProjectsPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');

    return (
        <SectionWrapper
            title={dict.projects.title}
            subtitle={dict.projects.subtitle}
            className="bg-white"
        >
            <div className="text-center mb-8 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Note: </strong>
                <span className="block sm:inline">The projects listed below are placeholders based on CV information. Please update `data/cvData.ts` with actual project details, images, and links.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dict.projects.items.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={{
                            id: project.id,
                            title: project.title,
                            description: project.description,
                            technologies: project.technologies,
                            imageUrl: project.imageUrl || '/images/placeholder.jpg', // Direkt aus dem public-Verzeichnis
                            repoUrl: project.repoUrl || null, // Use null if no repo URL is provided
                            liveUrl: project.liveUrl || null, // Use null if no live URL is provided
                            imgUrl: project.imageUrl || '/images/placeholder.jpg', // Direkt aus dem public-Verzeichnis
                        }}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}