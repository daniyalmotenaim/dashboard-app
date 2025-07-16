import React , {createContext, useContext, useState} from "react";

const StateContext = createContext();
const initialState = {
    chat: false,    
    cart: false,
    userProfile: false,
    notification: false,    
};


export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true})};  
    
    
    const [screenSize, setScreenSize] = useState(undefined);
    // const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (mode) => {
        localStorage.setItem('themeMode', mode);
        document.documentElement.setAttribute('data-theme', mode);
    };

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            // themeSettings,
            // setThemeSettings,
            // setMode
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);