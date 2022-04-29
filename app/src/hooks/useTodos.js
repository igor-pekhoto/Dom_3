import { useEffect, useState } from "react";

const LSTodosKey = "todos";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = async (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const completedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey);
    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS));
    } else {

			fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
				.then(res => res.json())
				.then(data => data.map(({title, userId, ...rest}) => ({...rest, text: title})))
				.then(setTodos)
		}
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos));
  }, [todos]);


	return {
		todos,
		createTodo,
		completedTodo,
		deleteTodo,
		clearAllTodos,
	}
};

export default useTodos
