export interface TaskType{
    id:string
    taskText?:string
    images?:string[] 
    
}



export interface TasksStateType{
    allTasks:TaskType[]
    onTaskClick?:(taskId:number) => void
    
}


