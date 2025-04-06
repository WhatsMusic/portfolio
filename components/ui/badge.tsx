// components/ui/badge.tsx
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'secondary' | 'outline'; // Example variants
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
    const baseStyle = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    let variantStyle = '';

    switch (variant) {
        case 'secondary':
            variantStyle = 'bg-gray-100 text-gray-800';
            break;
        case 'outline':
            variantStyle = 'border border-gray-300 text-gray-600';
            break;
        default:
            variantStyle = 'bg-blue-100 text-blue-800'; // Default like tech badges
            break;
    }

    return <span className={`${baseStyle} ${variantStyle} ${className}`}>{children}</span>;
};

