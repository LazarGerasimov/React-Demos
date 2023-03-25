import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { AddTodoModal } from './components/AddTodoModal';



import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, []);

    const onTodoAdd = async (values) => {
        console.log(values);
    };

    return (
        <>
            <Header />
            <TodoList todos={todos} />
            <AddTodoModal onTodoAdd={onTodoAdd} />
        </>
    );
}

export default App;
