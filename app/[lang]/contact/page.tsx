// app/(site)/contact/page.tsx
import Link from 'next/link';
import { getDictionary } from '@/lang/dictionaries';

export default async function ContactPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');
    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">{dict.contact.title}</h2>
                <p className="text-lg text-gray-700 mb-12">{dict.contact.text}</p>

                <div className="space-y-8">
                    {dict.contact.email && (
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-sm text-gray-500">Email</p>
                            <a href={`mailto:${dict.contact.email}`} className="text-lg text-gray-800 font-medium underline">
                                {dict.contact.email}
                            </a>
                        </div>
                    )}
                    {dict.contact.github && (
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-sm text-gray-500">GitHub</p>
                            <Link href={dict.contact.github} target="_blank" className="text-lg text-gray-800 font-medium underline">
                                {dict.additionalInfo.github}
                            </Link>
                        </div>
                    )}
                    {dict.contact.linkedin && (
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-sm text-gray-500">LinkedIn</p>
                            <Link href={dict.contact.linkedin} target="_blank" className="text-lg text-gray-800 font-medium underline">
                                Connect on LinkedIn
                            </Link>
                        </div>
                    )}
                </div>

                <p className="mt-12 text-sm text-gray-500">
                    Currently available for freelance opportunities. Email is the preferred method of contact.
                </p>
            </div>
        </section>
    );
}