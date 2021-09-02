import { createContext } from "react";
import { useContext } from "react";

export interface ThemeContextType {
	theme: boolean;
	setTheme: (theme: boolean) => void;
}

const initialState: ThemeContextType = {
	theme: false,
	setTheme: (theme: boolean) => {},
};

const ThemeContext = createContext<ThemeContextType>(initialState);
export default ThemeContext;