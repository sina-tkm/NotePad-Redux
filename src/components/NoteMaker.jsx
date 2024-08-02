import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../features/todos";

function NoteMaker() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") return;
    dispatch(addTodo({ title, desc }));
    setTitle("");
    setDesc("");
  };

  return (
    <div className='container mx-auto p-4'>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <button
          className='bg-red-500 text-white p-2 rounded'
          onClick={() => dispatch(deleteTodo())}
          type='button'
        >
          Delete checked List
        </button>
        <input
          className='w-full p-2 border rounded'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <textarea
          className='w-full p-2 border rounded'
          type='text'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder='Description'
          rows='4'
        />
        <button className='bg-green-500 text-white p-2 rounded' type='submit'>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteMaker;
