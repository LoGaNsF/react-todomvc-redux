import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../actions/TodoActions';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      dispatch(addTodo(event.target.value));
      setValue('');
    }
  };

  return (
    <header>
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        value={value}
      />
    </header>
  );
};

export default Header;
