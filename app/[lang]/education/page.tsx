import { getDictionary } from '@/lang/dictionaries';

export default async function EducationPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-900 mb-10">{dict.title}</h2>
                <div className="space-y-10">
                    {dict.education.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-medium text-gray-800">{item.degree}</h3>
                            <p className="text-sm text-gray-600">{item.institution} &middot; {item.period}</p>
                            <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}