import { TodoItem } from "./TodoItem"



export function TodoList({
    todos,
    toggleTodo,
    deleteTodo
}) {
    return (
        <ul className='list'>
            {todos.length === 0 && "No Todos added yet"}
            {todos.map(todo => {
                // return <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>
                return <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            })}
        </ul>
    )
}