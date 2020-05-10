import React, {useState, useEffect, createContext} from 'react';

export const ThemeContext = createContext();

const storageName = 'theme';

const ThemeContextProvider = ({children}) => {

    const lightTheme = { bg: "#ffffff", text: "#51587d", ui: "#f9f9f9" }
    const darkTheme = { bg: "#212529", text: "#eeeeee", ui: "#333333" }

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