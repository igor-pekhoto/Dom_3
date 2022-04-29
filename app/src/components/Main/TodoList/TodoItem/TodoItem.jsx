import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"


const TodoItem = ({id, text, index, completed}) => {

	const {completedTodo, deleteTodo} = useContext(TodoListContext)

	const deleteHandler = () => deleteTodo(id)

	const completedHandler = () => completedTodo(id)

	return (
		<li className="list-group-item">
			<span>
				{index + 1}. {text}
			</span>
			<div>
				<button onClick={completedHandler} type="button" className="btn btn-success">Success</button>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Danger</button>
			</div>
		</li>
	)
}

export default TodoItem