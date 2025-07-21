import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import { useState } from 'react';

const TodoList = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, newText: editText }));
        setEditingId(null);
        setEditText('');
    };


    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                    {editingId === todo.id ? (
                        <>
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="border p-1"
                            />
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="text-green-500 hover:text-green-700 ml-2 cursor-pointer"
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{todo.text}</span>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleEdit(todo)}
                                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TodoList