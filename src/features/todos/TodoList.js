import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodos = state => state.todos

const TodoList = () => {
    const todos = useSelector(selectTodos, shallowEqual)

    return (
        <ul className='todo-list'>
            {todos.map(todo => {
                return <TodoListItem key={todo.id} id={todo.id}/>
            })}
        </ul>
    )
}

export default TodoList;