import React, { createContext, useState } from "react";

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

export const MyContext = createContext({})

function MyContextProvider({children}) {
    return (
        <MyContext.Provider 
        value={{
            tituloBotaoSomar: "Somar",
            temaBotaoSomar: themes.dark,
            tituloBotaoSubtrair: "Subtrair",
            temaBotaoSubtrair: themes.light}}
        >

            {children}

        </MyContext.Provider>
    )
}
export default MyContextProvider;