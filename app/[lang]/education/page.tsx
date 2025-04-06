import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { getDictionary } from '@/lang/dictionaries';

export default async function EducationPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');

    return (
        <SectionWrapper title="Education & Certifications" className="bg-lightBg">
            <div className="max-w-3xl mx-auto">
                {dict.education.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.degree}
                        subtitle={item.institution}
                        period={item.period}
                        description={item.description}
                        isLast={index === dict.education.length - 1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}