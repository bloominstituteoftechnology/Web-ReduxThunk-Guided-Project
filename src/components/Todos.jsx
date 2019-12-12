import React from 'react';

export function Todos({ }) {
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
