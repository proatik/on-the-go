import React from 'react';

interface SectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, className = '' }) => {
    return (
        <h2 className={`text-xl md:text-3xl lg:text-4xl xl:text-[2.5rem] text-[#263238] font-bold ${className}`}>
            {children}
        </h2>
    );
};

