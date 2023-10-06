import React from 'react';

interface textProps {
    textUp: String;
    textDown: String;
}

const TitleIcon: React.FC<textProps> = ({textUp, textDown}) => {
    return (
        <>
        <div className='flex mt-20 gap-2.5 items-center'>
            <div className='rounded-full bg-primary-1 p-5 h-0 w-0 flex items-center justify-center'>
            <span className='text-heading2 text-font-2 font-flexo font-bold'>+</span>
            </div>
            <img src="_ionicons_svg_md-filing-1.svg" className='w-16' alt="" />
            <div>
            <p className='font-flexo font-bold text-primary-1 text-heading2'>{textUp}</p>
            <p className='font-flexo font-bold text-primary-1 text-heading2'>{textDown}</p>
            </div>
        </div>
        </>
    );
};

export default TitleIcon;
