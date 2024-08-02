import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function AddTodo() {
  const { listNote } = useSelector((state) => state.notes);

  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-4">
        {listNote.map((elm) => (
          <TodoList key={elm.id} {...elm} />
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;
