import React from 'react';

function SocialBox({ children , boxClass}) {
    return (
        <a href="#" target="_blank" className={`${boxClass} inline-flex items-center justify-center transition-all duration-300`}>
            {children}
        </a>
    );
}

export default SocialBox;