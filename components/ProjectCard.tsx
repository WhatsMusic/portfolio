// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/cvDatas';
import { Card, CardContent } from './ui/card';



const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

    return (
        <Card className="flex flex-col h-full border border-gray-200 shadow-sm">
            {project.imageUrl ? (
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={project.imageUrl || '/images/placeholder.jpg'}
                        alt={project.title}
                        width={1024}
                        height={1536}
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full"
                    />
                </div>
            ) : (
                <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-sm text-gray-500 italic">No image available</span>
                </div>
            )}
            <CardContent className="flex-grow flex flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologien:</h4>
                    <div className="flex flex-wrap gap-2">
                        {(project.technologies ?? []).map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex space-x-4 pt-3 border-t border-gray-100 text-sm">
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline">
                            Live Demo
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline">
                            Code
                        </Link>
                    )}
                    {!project.liveUrl && !project.repoUrl && (
                        <span className="text-xs text-gray-400 italic">Keine Links verfügbar</span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;