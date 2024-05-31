import React, { useContext } from 'react';
import Paragraph from './Paragraph';
import { ThemeContext } from './ThemeContext';

const Contents = () => {
    const theme = useContext(ThemeContext)

    return (
        <div>
            <button onClick={theme.toggleTheme}>
                Toggle Theme
            </button>
            <Paragraph />
        </div>
    );
};

export default Contents;