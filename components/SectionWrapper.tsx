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
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-fadeInUp">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-mediumText animate-fadeInUp animation-delay-100">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="animate-fadeInUp animation-delay-200">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;