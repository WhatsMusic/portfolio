// components/ui/card.tsx
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white border border-gray-200 rounded-xl overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}
export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return <div className={`p-6 ${className}`}>{children}</div>
}

// Add CardHeader, CardFooter etc. as needed