import React from 'react';

interface InfoProps {
    title: string;
    value: string | number;
}

const Info: React.FC<InfoProps> = ({ title, value }) => {
    return (
        <div className='flex flex-wrap gap-2'>
            <p className='font-flexo font-bold text-primary-1 text-heading6'>{title}:</p>
            <p className='font-flexo text-font-1 text-heading6'>{value}</p>    
        </div>
    );
};

export default Info;
