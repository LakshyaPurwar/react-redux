import { createSlice } from "@reduxjs/toolkit";
const initialState = {notification : null};
const uiSlice = createSlice({
    name : 'ui-slice',
    initialState : initialState,
    reducers : {
        setNotification(state ,action){
            console.log('Set notification did run');
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }
    }
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;