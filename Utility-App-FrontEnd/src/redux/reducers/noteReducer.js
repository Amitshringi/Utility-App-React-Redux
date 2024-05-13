import { createSlice } from "@reduxjs/toolkit"


const initialState={
    notes:[]
}


//creating Reducer with redux-toolkit
const noteSlice=createSlice({
    name: 'note',
    initialState: initialState,
    reducers:{
        //this is add action
        add:(state, action)=>{
            state.notes.push({
                text: action.payload,
                createdOn:new Date().toDateString()
            })
        },
        delete:(state, action)=>{
            state.notes.splice(action.payload, 1);
        }

    }
    
})

export const noteReducer=noteSlice.reducer;
export const actions=noteSlice.actions;
export const noteSelector=(state)=> state.noteReducer.notes;

//reducer using redux 
//  export function noteReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_NOTE:
//             return{
//                 ...state,
//                notes: [
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                ]
//             }

//             case DELETE_NOTE:
//                state.notes.splice(action.index, 1);
//                return {
//                 ...state,
//                 notes: [...state.notes]
//                }

//                default:
//                 return state;

//     }

//  }