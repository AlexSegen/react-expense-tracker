import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const light = { bg: "#ffffff", text: "#111111", ui: "#f9f9f9" }
    const dark = { bg: "#212121", text: "#eeeeee", ui: "#212529" }

    const [lightTheme, setLightTheme] = useState(true)
    const [theme, setTheme] = useState({
        light: true,
        ...light
    });

    const toggleTheme = () => {
        setLightTheme(!lightTheme);
        setTheme({
            light: lightTheme,
            ...lightTheme ? light : dark
        });
    }

    const contextValues = {
        toggleTheme,
        theme
    }

    return ( 
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;