import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      addTodo(event.target.value);
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

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
