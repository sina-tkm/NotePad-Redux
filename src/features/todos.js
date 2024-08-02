import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNote: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //  add todo reducer
    addTodo: (state, { payload }) => {
      const newNote = {
        id: Date.now(),
        title: payload.title,
        description: payload.desc,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      };
      state.listNote.push(newNote);
    },
    // toggleTodo REducer
    toggleTodo: (state, { payload }) => {
      const note = state.listNote.find((item) => item.id === payload.id);
      if (note) note.completed = payload.completed;
    },
    // deleteTodo REducer
    deleteTodo: (state) => {
      state.listNote = state.listNote.filter((item) => !item.completed);
    },
    // edirFilter Reducer
    editFilter: (state, { payload }) => {
      const { id, newDesc, newTitle } = payload;
      state.listNote = state.listNote.map((item) =>
        item.id === id
          ? {
              ...item,
              description: newDesc,
              title: newTitle,
              createdAt: new Date().toDateString(),
            }
          : item
      );
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
