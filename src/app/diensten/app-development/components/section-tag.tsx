import React from 'react';

interface SectionTagProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ children, className = '' }) => {
    return (
        <span className={`text-[#B479D9] font-bold text-xs md:text-lg px-[1.125rem] py-2 rounded-[40px] bg-[#B479D926] w-max mx-auto xl:mx-0 ${className}`}>
            {children}
        </span>
    );
};

export default SectionTag;