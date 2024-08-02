import {  useSelector } from "react-redux";
import TodoList from "./TodoList";

function AddTodo() {
  const { listNote } = useSelector((state) => state.notes);

  return (
    <div>
      <ul>
        {listNote.map((elm) => {
          return <TodoList key={elm.id} {...elm} />;
        })}
      </ul>
    </div>
  );
}

export default AddTodo;
