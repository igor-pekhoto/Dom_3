import { useContext, useState } from "react";
import { TodoListContext } from "../../../contexts/TodoListContext";

const Form = () => {
  const [input, setInput] = useState("");
  const { createTodo } = useContext(TodoListContext);

  const changeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const inputTrim = input.trim();
    if (inputTrim) {
      createTodo(inputTrim);
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={input}
          onChange={changeHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
