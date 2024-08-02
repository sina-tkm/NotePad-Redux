import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todos";
import EditModal from "./EditModal";
import { useState } from "react";

function TodoList({ id, completed, title, description }) {
  const [accordion, setAccordion] = useState(null);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='relative'>
      {modal && (
        <EditModal
          setModal={setModal}
          title={title}
          description={description}
          id={id}
        />
      )}
      <li
        className={`border p-4 rounded transition-all duration-300 overflow-hidden bg-white shadow  ${
          accordion === id ? "h-auto" : "h-20"
        }`}
        onClick={() => setAccordion((prev) => (prev === id ? null : id))}
      >
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-lg font-bold'>{title}</h1>
            {accordion === id && <p className='text-gray-700'>{description}</p>}
          </div>
          <div className='flex items-center space-x-2'>
            <input
              type='checkbox'
              checked={completed}
              onChange={() =>
                dispatch(toggleTodo({ id, completed: !completed }))
              }
              className='w-4 h-4'
            />
            <button
              onClick={() => setModal(true)}
              className='bg-blue-500 text-white p-2 rounded'
            >
              Edit
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default TodoList;
