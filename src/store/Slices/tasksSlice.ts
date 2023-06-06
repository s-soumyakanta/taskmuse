import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { TasksStateType } from "../../components/types/task.types";


const initialState:TasksStateType={
   allTasks:[]
}

const TasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addText:(state,action:PayloadAction<{taskText:string}>)=>{
            state.allTasks.push({
                id:state.allTasks.length + 1,
                taskText:action.payload.taskText
            })
        }
    }
})

export default TasksSlice.reducer
export const {addText} = TasksSlice.actions