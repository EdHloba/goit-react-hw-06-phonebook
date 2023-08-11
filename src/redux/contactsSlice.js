import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = {
    contactList: [
        {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
        {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
        {"id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
        {"id": "id-4", "name": "Annie Copeland", "number": "227-91-26"}
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contactList.push(action.payload);
            },
            prepare(name, number) {
                    return{
                        payload: {
                            id: nanoid(),
                            name,
                            number,
                        },
                    };
            },
        },
        deleteContact(state, action) { 
            const index = state.contactList.findIndex(contact => contact.id === action.payload);
            state.contactList.splice(index, 1);
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;