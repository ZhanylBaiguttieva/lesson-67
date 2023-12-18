import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
}

const initialState: CounterState = {
    value: '',
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        count: (state) => {
            state.value = eval(state.value);
        },
        show: (state,action: PayloadAction<string>) => {
            state.value += action.payload;
        },
    }
});

export const counterReducer = counterSlice.reducer;
export const {
    count,
    show,
} = counterSlice.actions;