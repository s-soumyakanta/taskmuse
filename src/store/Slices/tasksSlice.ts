import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface Task{
    taskText:string 
}

export interface TasksState{
    allTasks:Task[]
}

const initialState:TasksState={
   allTasks:[]
}

const TasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addText:(state,action:PayloadAction<{taskText:string}>)=>{
            state.allTasks.push({
                taskText:action.payload.taskText
            })
        }
    }
})

export default TasksSlice.reducer
export const {addText} = TasksSlice.actions