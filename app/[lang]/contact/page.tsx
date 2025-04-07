// app/(site)/contact/page.tsx
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { getDictionary } from '@/lang/dictionaries';

export default async function ContactPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');
    return (
        <SectionWrapper
            title={dict.contact.title}
            subtitle={dict.contact.subtitle}
            className="bg-lightBg mt-40"
        >
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-mediumText mb-10">
                    {dict.contact.text}

                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                    {dict.contact.email && (
                        <a
                            href={`mailto:${dict.contact.email}`}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="p-4 rounded-full bg-white shadow-md mb-2 group-hover:bg-lime-500 transition duration-300">
                                <Mail size={32} className="text-secondary group-hover:text-white transition duration-300" />
                            </div>
                            <span className="text-sm font-medium text-darkText group-hover:text-black transition duration-300">Email</span>
                            <span className="text-xs text-lightText">{dict.contact.email}</span>
                        </a>
                    )}

                    {dict.contact.github && (
                        <Link
                            href={dict.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="p-4 rounded-full bg-white shadow-md mb-2 group-hover:bg-lime-500 transition duration-300">
                                <Github size={32} className="text-secondary group-hover:text-white transition duration-300" />
                            </div>
                            <span className="text-sm font-medium text-darkText group-hover:text-black transition duration-300">GitHub</span>
                            <span className="text-xs text-lightText">{dict.additionalInfo.github}</span>
                        </Link>
                    )}

                    {/* Uncomment if LinkedIn is added */}
                    {dict.contact.linkedin && (
                        <Link
                            href={dict.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="p-4 rounded-full bg-white shadow-md mb-2 group-hover:bg-lime-500 transition duration-300">
                                <Linkedin size={32} className="text-secondary group-hover:text-white transition duration-300" />
                            </div>
                            <span className="text-sm font-medium text-darkText group-hover:text-black transition duration-300">LinkedIn</span>
                            <span className="text-xs text-lightText">Connect on LinkedIn</span>
                        </Link>
                    )}
                </div>

                {/* Optional: Add a note about availability or preferred contact method */}
                <p className="mt-12 text-sm text-lightText">
                    Currently available for freelance opportunities. Email is the preferred method of contact.
                </p>
            </div>
        </SectionWrapper>
    );
}