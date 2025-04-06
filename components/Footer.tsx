// components/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Assuming Mail icon
import { getDictionary } from '@/lang/dictionaries';

async function Footer({ params }: { params: { lang: 'de' | 'en' } }) {
    const dict = await getDictionary(params.lang);
    return (
        <div className="bg-gray-100 border-t border-gray-200 mt-16 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-mediumText">
                <div className="flex justify-center space-x-6 mb-4">
                    {dict.contact.email && (
                        <a href={`mailto:${dict.contact.email}`} className="text-mediumText hover:text-primary" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    )}
                    {dict.contact.github && (
                        <Link href={dict.contact.github} target="_blank" rel="noopener noreferrer" className="text-mediumText hover:text-primary" aria-label="GitHub">
                            <Github size={24} />
                        </Link>
                    )}
                    {dict.contact.linkedin && (
                        <Link href={dict.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-mediumText hover:text-primary" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </Link>
                    )}
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} {dict.name}. All rights reserved.
                </p>
            </div>
        </div>
    );
}
export default Footer;