// components/SkillCategory.tsx
import React from 'react';
import { SkillCategoryData } from '@/data/cvDatas';
import { Card, CardContent } from './ui/card'; // Use Card components
import { Badge } from './ui/badge'; // Use Badge component

interface SkillCategoryProps {
    category: SkillCategoryData;
}



const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
    return (
        <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
            <CardContent>
                <h3 className="text-xl font-semibold text-secondary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default SkillCategory;