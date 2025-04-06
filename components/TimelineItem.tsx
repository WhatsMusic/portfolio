// components/TimelineItem.tsx
import React from 'react';

interface TimelineItemProps {
    title: string; // Role or Degree
    subtitle: string; // Company or Institution
    period: string;
    description: string[];
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, description, isLast = false }) => {
    return (
        <div className="relative pl-8 pb-8">
            {/* Timeline Line (conditionally rendered if not last) */}
            {!isLast && <div className="timeline-line"></div>}
            {/* Timeline Dot */}
            <div className="timeline-dot"></div>

            {/* Content */}
            <div className="ml-4">
                <p className="text-xs text-lightText uppercase tracking-wider mb-1">{period}</p>
                <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
                <h4 className="text-md font-medium text-secondary mb-3">{subtitle}</h4>
                <ul className="list-disc pl-5 space-y-1 text-mediumText">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineItem;