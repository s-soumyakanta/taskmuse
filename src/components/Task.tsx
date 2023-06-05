import { useState } from "react"
import TaskModal from "./TaskModal"
import { createPortal } from "react-dom"
import { useAppSelector } from "../hooks"

const Task = () => {
  const [shoWTask,setShowTask] = useState(false)
  const handleClick = () =>{
    setShowTask(!shoWTask)
  }
  const tasks = useAppSelector(state => state.task.allTasks)
  return (
    <>
    {
      tasks.length === 0 ? "No task found":
   <div className="flex flex-wrap justify-center items-center">
  
  {
    tasks.map((task)=>{
      return(

   <div className="h-32 w-1/4 rounded-md p-1 m-2" onClick={handleClick}>
        <textarea className="w-full h-full resize-none overflow-y-hidden">
          {task.taskText}
        </textarea>
   </div>
      )

    })
  }
    
  
   
   
    
   </div>
    }
   {
      shoWTask && createPortal(
        <TaskModal handleMenuClick={handleClick}  />,
        document.body

      )
    }
    </>
  )
}

export default Task