import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeContextType } from "./ThemeContext";
import TodoList from "./TodoList";

export interface TodoType {
	title: string;
	done: boolean;
}

const Todos = () => {
	const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
	const [todos, setTodos] = useState<TodoType[]>([]);
	const [input, setInput] = useState<string>("");

	return (
		<div>
			<div className={theme ? "todos dark" : "todos"}>
				<input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						setTodos([...todos, { title: input, done: false }]);
						setInput("");
					}}
				>
					Add todo
				</button>
				{todos.map((todo, index) => (
					<TodoList title={todo.title} done={todo.done} />
				))}
			</div>
		</div>
	);
};

export default Todos;
