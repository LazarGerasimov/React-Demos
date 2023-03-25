import ListGroup from 'react-bootstrap/ListGroup';
import { TodoItem } from './TodoItem';


export const TodoList = ({
    todos,
    
}) => {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup >
                {todos.map(t => <TodoItem key={t._id} {...t}/>)}
            </ListGroup>
        </div>
    )
}