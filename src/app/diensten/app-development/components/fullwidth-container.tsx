import React, { ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FullwidthContainerProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

const FullwidthContainer: React.FC<FullwidthContainerProps> = ({
    children,
    className = '',
    as: Component = 'div',
}) => {
    return (
        <Component className={twMerge('fullwidth-container relative', className)}>
            {children}
        </Component>
    );
};

export default FullwidthContainer;