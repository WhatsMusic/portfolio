import ProjectCard from '@/components/ProjectCard';
import { getDictionary } from '@/lang/dictionaries';

export default async function ProjectsPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{dict.projects.title}</h2>
                <p className="text-gray-600 text-lg mb-12">{dict.projects.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                    {dict.projects.items.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={{
                                id: project.id,
                                title: project.title,
                                description: project.description,
                                technologies: project.technologies,
                                imageUrl: project.imageUrl || '/images/placeholder.jpg',
                                repoUrl: project.repoUrl || null,
                                liveUrl: project.liveUrl || null,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}