import { createContext, useContext, useState } from "react";



const NavigationContext = createContext();
export const NavigationContextProvider = ({children}) => {

    // LET NAVBAR ACTIVE
    const [activeNavlink, setActiveNavlink] = useState("home");
    const values = {
        activeNavlink,
        setActiveNavlink,
    }
    return(
        <NavigationContext.Provider value={values}>
            {children}
        </NavigationContext.Provider>
    )
}
export const useNavigation = () => useContext(NavigationContext);
