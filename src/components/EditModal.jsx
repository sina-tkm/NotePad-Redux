import { useState } from "react";
import { useDispatch } from "react-redux";
import { editFilter } from "../features/todos";

function EditModal({ setModal, description, title, id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editFilter({ newTitle, newDesc, id }));
    setModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h1 className="text-xl font-bold mb-4">Edit Note</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Description"
            rows="4"
          />
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
            <button type="button" onClick={() => setModal(false)} className="bg-gray-500 text-white p-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
