import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    listNote: [],
    editedNote: []
  },
  reducers: {
    addTodo: (state, action) => {
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.desc,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      };
      state.listNote.push(newNote);
    },
    toggleTodo: (state, action) => {
      const newCompleted = state.listNote.find(
        (item) => item.id === action.payload.id
      );
      newCompleted.completed = action.payload.completed;
    },
    deleteTodo: (state) => {
      state.listNote = state.listNote.filter((item) => !item.completed);
    },
  },

});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
