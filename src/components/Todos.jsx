import React from 'react';
// we need a couple imports
import { connect } from 'react-redux';
import { markTodo } from '../state/actionCreators';

export function Todos({ todos, markTodo }) {
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

// we need a mapStateToProps
function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}
// we need a new default export
export default connect(
  mapStateToProps,
  { markTodo },
)(Todos);

// don't forget to plug action creators
