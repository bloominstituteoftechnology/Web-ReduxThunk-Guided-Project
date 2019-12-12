import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { markTodo, getTodos } from '../state/actionCreators';

export function Todos({ todos, markTodo, getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='component'>
      {
        todos.map((todo) => (
          <div key={todo.id} style={{ color: !todo.completed ? 'red' : 'green' }}>
            {todo.name}
            <button onClick={() => markTodo(todo.id, true)}>Mark complete</button>
            <button onClick={() => markTodo(todo.id, false)}>Mark incomplete</button>
          </div>
        ))
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(
  mapStateToProps,
  { markTodo, getTodos },
)(Todos);
