import { useDispatch, useSelector } from 'react-redux';

import Footer from './Footer';
import TodoList from './TodoList';
import { completeAll } from '../actions/TodoActions';
import { areAllTodosCompleted } from '../selectors';

const MainSection = () => {
  const dispatch = useDispatch();
  const areAllCompleted = useSelector(areAllTodosCompleted);
  const todosCount = useSelector((state) => state.todos.length);

  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            checked={areAllCompleted}
            onChange={(e) => dispatch(completeAll(e.target.checked))}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </span>
      )}
      <TodoList />
      {!!todosCount && <Footer />}
    </section>
  );
};

export default MainSection;
