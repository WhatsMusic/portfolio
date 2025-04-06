// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/cvDatas';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';



const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Card className="flex flex-col h-full transition-transform transform hover:scale-[1.02] duration-300 ease-out">
            {project.imageUrl ? (
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={project.imgUrl || '/images/placeholder.jpg'} // Direkt aus dem public-Verzeichnis
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            ) : (
                <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-sm text-gray-500 italic">No image available</span>
                </div>
            )}
            <CardContent className="flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-mediumText text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-darkText mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {(project.technologies ?? []).map((tech, index) => (
                            <Badge key={index} variant="default">{tech}</Badge>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex space-x-3 pt-3 border-t border-gray-100">
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition duration-150 flex items-center text-sm" title="Live Demo">
                            <ExternalLink size={18} className="mr-1" /> Live Demo
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition duration-150 flex items-center text-sm" title="GitHub Repository">
                            <Github size={18} className="mr-1" /> Code
                        </Link>
                    )}
                    {!project.liveUrl && !project.repoUrl && (
                        <span className="text-xs text-lightText italic">Links not available</span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;