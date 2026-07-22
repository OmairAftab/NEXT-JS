"use client";
import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);








//if we directly use the themeprovider in the layout file of the app it will give error because the layout file is a server component
// and the theme provider is a client component so we need to wrap the body of the layout file with the theme provider and then we can use the useTheme hook in any client component to get the theme values.