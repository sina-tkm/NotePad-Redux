import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todos";
import EditModal from "./EditModal";
import { useState } from "react";

function TodoList({ id, completed, title, description }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {modal && (
        <EditModal
          setmodal={setModal}
          title={title}
          description={description}
          id={id}
        />
      )}
      <li className='border' onClick={() => setModal(true)}>
        <h1>{title}</h1>
        <h2>{description}</h2>∆
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleTodo({ id, completed: !completed }))}
          onClick={(e) => e.stopPropagation()}
        />
      </li>
    </>
  );
}

export default TodoList;
