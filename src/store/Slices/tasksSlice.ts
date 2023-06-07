import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { TasksStateType } from "../../components/types/task.types";


const initialState:TasksStateType={
   allTasks:[]
}

const TasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addText:(state,action:PayloadAction<{taskText:string,imageArray?:string[]}>)=>{
            state.allTasks.push({
                id:crypto.randomUUID(),
                taskText:action.payload.taskText,
                images:action.payload.imageArray
            })
        }
    }
})

export default TasksSlice.reducer
export const {addText} = TasksSlice.actions