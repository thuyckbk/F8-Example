import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Paragraph = () => {
    const theme = useContext(ThemeContext)

    return (
        <div className={theme.theme}>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione est illum sed nihil similique deleniti repellat quos illo voluptate! Voluptate molestias cum eligendi assumenda magni velit? Perspiciatis nisi excepturi dignissimos!
            </p>
        </div>
    );
};

export default Paragraph;