import React, {useState, useEffect, createContext} from 'react';

export const ThemeContext = createContext();

const storageName = 'theme';

const ThemeContextProvider = ({children}) => {

    const lightTheme = { bg: "#ffffff", text: "#111111", ui: "#f9f9f9" }
    const darkTheme = { bg: "#212121", text: "#eeeeee", ui: "#212529" }

    const initialState = {
        light: true,
        ...lightTheme
    }

    const [theme, setTheme] = useState(initialState);

    const loadStorage = () => {
        const storage = localStorage.getItem(storageName);
        setTheme(storage ? JSON.parse(storage) : initialState)
    }

    const toggleTheme = () => {
        let { light } = theme;
        light = !light
        const styles = light ? lightTheme : darkTheme
        setTheme({
            light,
            ...styles
        });
        
        localStorage.setItem(storageName, JSON.stringify({
            light,
            ...styles
        }))
    }

    const contextValues = {
        toggleTheme,
        theme
    }

    useEffect(()=> {
        loadStorage()
    },[])

    return ( 
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;