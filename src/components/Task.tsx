import { useState } from "react"
import TaskModal from "./TaskModal"
import { createPortal } from "react-dom"
import { TasksStateType } from "./types/task.types"

const Task = ({allTasks}:TasksStateType) => {
  const [shoWTask,setShowTask] = useState(false)
  const [taskId,setTaskId] = useState<string>("")
  
  const handleClick =  (id:string) =>{
     setTaskId(id)
     setShowTask(true)
   }
  
  const toggleModal = () => {
    setShowTask(!shoWTask)
  }
 
 
 
  return (
    <>
    {
      allTasks?.length === 0 ? "No task found":
   <div className="flex flex-wrap justify-center items-center">
  
  {
    allTasks?.map((task)=>{
      const textAreaValue = `${task.taskText}`
      return(

   <div className=" w-1/4 rounded-md p-1 m-2" key={task.id} onClick={() =>handleClick(task.id)}>
       {
        !task.images  ? null:
        <div className="flex overflow-x-scroll bg-white justify-center items-center h-12">
          {
            task.images?.map((img)=>{
              return(
                <img src={img} className="w-auto m-1" alt="selcted" />
              )
            })
          }
        </div> 
       }
        <textarea className="w-full h-full resize-none overflow-y-hidden"
          value={textAreaValue}
          readOnly
        />
        
   </div>
      )

    })
  }
    
  
   
   
    
   </div>
    }
   {
      shoWTask && createPortal(
        <TaskModal selectedTaskId={taskId} toggleModal={toggleModal} tasks={allTasks} />,
        document.body

      )
    }
    </>
  )
}

export default Task