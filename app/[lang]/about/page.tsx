// app/(site)/about/page.tsx
import { SkillCategoryData } from '@/data/cvDatas';
import SectionWrapper from '@/components/SectionWrapper';
import SkillCategory from '@/components/SkillCategory';
import { getDictionary } from '@/lang/dictionaries';



export default async function AboutPage({ params }: { params: Promise<{ lang: 'de' | 'en' }> }) {
    const resolvedParams = await params; // Promise auflösen
    const dict = await getDictionary(resolvedParams.lang ?? 'en');


    return (
        <>
            <SectionWrapper title="Profile" className="bg-white py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        {dict.profile}
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper title="Core Competencies" className="bg-lightBg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 top-40">
                    {dict.coreCompetencies.map((category: SkillCategoryData, index) => (
                        <SkillCategory key={index} category={category} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Optional: Add Additional Info from CV */}
            <SectionWrapper title="Additional Information" className="bg-white">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    <p className="text-mediumText"><strong className='text-darkText'>Musician:</strong> {dict.additionalInfo.musician}</p>
                    <p className="text-mediumText"><strong className='text-darkText'>International Experience:</strong> {dict.additionalInfo.international}</p>
                </div>
            </SectionWrapper>
        </>
    );
}