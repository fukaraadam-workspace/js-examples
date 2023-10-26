import { useState, useCallback, memo } from 'react';

export function WithoutMemoFunction() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <TodosComponent todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export function WithMemoFunction() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

const TodosComponent = ({ todos }) => {
  console.log('child render');
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

const Todos = memo(TodosComponent);
