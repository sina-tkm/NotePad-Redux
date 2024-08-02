import { useState } from "react";
import { useDispatch } from "react-redux";
import { editFilter } from "../features/todos";

function EditModal({ setmodal, description, title, id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editFilter({ newTitle, newDesc, id }));
    setmodal(false);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='p-4 rounded border bg-pink-300 flex-col'>
        <h1>Edit Modal</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-y-3'>
            <input
              type='text'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type='text'
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
          </div>
          <button type='button' onClick={() => setmodal(false)}>
            Cancel
          </button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
