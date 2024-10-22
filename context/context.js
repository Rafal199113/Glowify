import React, { createContext, useState } from 'react';

// Stwórz kontekst
export const GlobalContext = createContext();

// Stwórz komponent dostarczający kontekst
export const GlobalProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState(0);

    return (
        <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalContext.Provider>
    );
};