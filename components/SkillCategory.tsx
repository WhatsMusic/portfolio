// components/SkillCategory.tsx
import React from 'react';
import { SkillCategoryData } from '@/data/cvDatas';
import { Card, CardContent } from './ui/card'; // Use Card components

interface SkillCategoryProps {
    category: SkillCategoryData;
}



const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
    return (
        <Card className="h-full border border-gray-200 shadow-sm">
            <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, index: number) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default SkillCategory;