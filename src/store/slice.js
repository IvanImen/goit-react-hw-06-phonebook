import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
// reducer - это функция, которая принимает текущее состояние (state)

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilterAction: (state, { payload }) => {
      //   return { ...state, filter: payload };
      state.filter = payload;
    },

    addContactAction: {
      prepare: data => {
        const todo = {
          ...data,
          id: nanoid(),
        };
        return { payload: todo };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },

    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { setFilterAction, deleteContactAction, addContactAction } =
  phonebookSlice.actions;
