import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        search: '',
        genre: ''
    },
    reducers: {
       setSearch: (state, action) => {
        state.search = action.payload;
       },
       setGenre: (state, action) => {
        state.genre = action.payload;
       },

    }
});

export const {setSearch, setGenre} = CounterSlice.actions;

export default CounterSlice.reducer;