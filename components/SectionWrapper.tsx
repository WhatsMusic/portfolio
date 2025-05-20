// components/SectionWrapper.tsx
import React from 'react';

interface SectionWrapperProps {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    params?: { lang: 'de' | 'en' }; // Added params property
}
const SectionWrapper: React.FC<SectionWrapperProps> = async ({ id, title, subtitle, children, className = '' }) => {
    // Use params.lang to fetch the dictionary





    return (
        <section id={id} className={`${className} relative bg-white py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-gray-700">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;