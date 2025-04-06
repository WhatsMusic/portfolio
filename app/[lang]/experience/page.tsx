// app/(site)/experience/page.tsx
import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { getDictionary } from '@/lang/dictionaries';




export default async function ExperiencePageContent({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');
    return (
        <SectionWrapper title="Professional Experience" className="bg-white">
            <div className="max-w-3xl mx-auto">
                {dict.professionalExperience.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.role}
                        subtitle={item.company}
                        period={item.period}
                        description={item.description}
                        isLast={index === dict.professionalExperience.length - 1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}