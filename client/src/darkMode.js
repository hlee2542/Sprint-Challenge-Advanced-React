import React, {useState} from 'react';

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    const handleIsDark = () => {
        setIsDark(() => !isDark)
    }
    return [isDark, handleIsDark];
}

export default useDarkMode;