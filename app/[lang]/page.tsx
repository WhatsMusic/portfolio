import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from '@/lang/dictionaries';
import profilBild from '../../public/robert-schulz.jpg';



export default async function Page({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');


    return (

        <div>
            <div className="bg-gradient-to-b from-white to-lightBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="animate-fadeInUp space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                                {dict.title}
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-darkText">
                                {dict.degree} {dict.name}
                            </h2>
                            <p className="text-lg md:text-xl text-mediumText italic">
                                &quot;{dict.tagline}&quot;
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {/* Key technologies from cover */}
                                {["Next.js", "App Router", "TypeScript", "TailwindCSS", "PostgreSQL"].map((tech) => (
                                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-4">
                                <Link href={`/${resolvedParams.lang}/projects`}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out">
                                    {dict.buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center md:justify-end animate-fadeIn">
                            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[320px] lg:h-[450px] rounded-full overflow-hidden shadow-xl border-4 border-white">
                                <Image
                                    src={profilBild}
                                    alt="Profile"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}