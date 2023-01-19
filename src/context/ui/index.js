import { createContext, useContext, useState } from "react";


export const UIContext = createContext()
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {

    const [drawerOpen, setdrawerOpen] = useState(false)
    const [showSrch, setSrch] = useState(false)

    const value = {
        drawerOpen,
        setdrawerOpen,
        showSrch,
        setSrch
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}