import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState={
    message:""
}

const notificationSLice=createSlice({
    name:"notification",
    initialState,
    reducers:{
        reset:(state, action)=>{
            state.message="";
        }

    },
    // extraReducers:{
    //     "todo/add": (state, action)=>{
    //         state.message="Todo is created"
    //     }

    // }

    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add, (state, action)=>{
    //         state.message="Todo is Created";
    //     })
    // }
        //map objects: [Key]:Value
        extraReducers:{
            [actions.add]: (state, action)=>{
                state.message= "Todo is Created"
            }
        }
});

export const notificationReducer=notificationSLice.reducer;
export const resetNotifications=notificationSLice.actions.reset;
export const notificationSelector=(state)=>state.notificationReducer.message; 