// components/TimelineItem.tsx
import React from 'react';

interface TimelineItemProps {
    title: string; // Role or Degree
    subtitle: string; // Company or Institution
    period: string;
    description: string[];
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, description }) => {
    return (
        <div className="space-y-2">
            <p className="text-sm text-gray-500">{period}</p>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <h4 className="text-md font-medium text-gray-700">{subtitle}</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimelineItem;