import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.js'
import { useState } from 'react'

const TodoInput = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 my-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter todo..."
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 rounded cursor-pointer">
                Add
            </button>
        </form>
    )
}

export default TodoInput