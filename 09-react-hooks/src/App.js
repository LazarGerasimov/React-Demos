import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { AddTodoModal } from './components/AddTodoModal';



import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {

    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, []);

    const onTodoAddSubmit = async (values) => {
        // console.log(values);
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const result = await response.json();

        setShowAddTodo(false);
        setTodos(state => [...state, result]);

        console.log(result);
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    const onTodoDeleteClick = async (todoId) => {
        await fetch(`${baseUrl}/${todoId}`, {
            method: 'DELETE'
        });

        setTodos(state => state.filter(x => x._id !== todoId));

    }


    return (
        <>
            <Header />
            <TodoList todos={todos} onTodoAddClick={onTodoAddClick} onTodoDeleteClick={onTodoDeleteClick} />
            <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
        </>
    );
}

export default App;
