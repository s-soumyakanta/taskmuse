export interface TaskType{
    id:number
    taskText:string 
}

export interface TasksStateType{
    allTasks:TaskType[]
    onTaskClick?:(taskId:number) => void
}
