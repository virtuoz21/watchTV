import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        search: '',
    },
    reducers: {
       setSearch: (state, action) => {
        state.search = action.payload;
       },
    }
});

export const {setSearch} = CounterSlice.actions;

export default CounterSlice.reducer;