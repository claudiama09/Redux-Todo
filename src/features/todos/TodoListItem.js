import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { availableColors, capitalize } from '../filters/colors';

const selectTodosById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId);
}

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectTodosById(state, id));
  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: 'todo/todoToggled', payload: todo.id })
  }

  return (
      <li>
        <div className='view'>{text}</div>
      </li>
  )
}

export default TodoListItem;