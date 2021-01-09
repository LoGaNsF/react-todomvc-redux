import { useDispatch, useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import { getVisibleTodos } from '../store/selectors';
import { completeTodo, deleteTodo, editTodo } from '../store/actions/TodoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getVisibleTodos);
  const update = (id, text) => dispatch(editTodo(id, text));
  const remove = (id) => dispatch(deleteTodo(id));
  const complete = (id) => dispatch(completeTodo(id));

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          data={todo}
          editTodo={update}
          deleteTodo={remove}
          completeTodo={complete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
