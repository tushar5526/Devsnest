import React from "react";
import { useState } from "react";
import { TodoType } from "./Todos";

interface TodoListProps {
	title: string;
	done: boolean;
}

const TodoList = ({ title, done }: TodoListProps) => {
	return (
		<div className="todo-list">
			<h2>{title}</h2>
		</div>
	);
};

export default TodoList;
