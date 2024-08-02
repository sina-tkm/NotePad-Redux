import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./features/todos";

function NoteMaker() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") return;
    dispatch(addTodo({ title: title, desc: desc }));
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <button
          className='border w-[100px]'
          onClick={() => dispatch(deleteTodo())}
        >
          delete
        </button>
        <input
          className='border w-[200PX]'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='border w-[200PX]'
          type='text'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='border w-[150px]'>add</button>
      </form>
    </div>
  );
}

export default NoteMaker;
