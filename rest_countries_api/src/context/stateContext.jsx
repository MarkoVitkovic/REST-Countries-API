import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {

    
    const [currentMode, setCurrentMode] = useState('Light')

    const setMode = (e) => {
        setCurrentMode(e)
        localStorage.setItem('themeMode', e)
    }

    return (
        <StateContext.Provider value={{ currentMode, setMode }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)