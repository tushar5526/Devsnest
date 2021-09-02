import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";
import Todos from "./Todos";
// const App: FC<AppProps> = ({ title }): ReactElement => {
// 	return (
// 		<div className="App">
// 			<h1>{title}</h1>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [counter, setCounter] = useState<number | null>(null);
// 	const [theme, setTheme] = useState<boolean>(false);

// 	useEffect(() => {
// 		setCounter(0);
// 	}, []);
// 	return (
// 		<ThemeContext.Provider value={{ theme, setTheme }}>
// 			<div className="App">
// 				{counter != null ? (
// 					<button onClick={() => setCounter(counter + 1)}>
// 						{counter}
// 					</button>
// 				) : (
// 					"hi"
// 				)}
// 				<ThemeToggle />
// 			</div>
// 		</ThemeContext.Provider>
// 	);
// };

const App = () => {
	const [theme, setTheme] = useState<boolean>(false);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={theme ? "App dark" : "App"}>

			<Todos />
			<ThemeToggle />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
