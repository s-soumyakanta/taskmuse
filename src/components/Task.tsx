import { useState } from "react"
import vertical from "../assets/testImg-vertical.jpg"
import horizontal from "../assets/testImg-horizontal.jpg"
import TaskModal from "./TaskModal"
import { createPortal } from "react-dom"


const Task = () => {
  const [shoWTask,setShowTask] = useState(false)
  const handleClick = () =>{
    setShowTask(!shoWTask)
  }
  return (
    <>
   <div className="flex flex-wrap justify-center items-center">
  
  
   <div className="h-72 w-1/4 bg-red-600 rounded-md p-1 m-2" onClick={handleClick}>
        <div className="h-[50%] flex justify-center text-center">
          <img src={vertical} alt="vertical" className="h-[98%]" />
        </div>
     
        <div className="h-[50%] overflow-y-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam quia sint placeat non quidem voluptate culpa sapiente tempora beatae, deserunt assumenda laudantium. Eum cumque quibusdam ratione voluptates maxime animi tenetur amet maiores similique?</div>
        
    </div>
    
   <div className="h-72 w-1/4 bg-red-600 rounded-md p-1 m-2">
        <div className="h-[50%] flex justify-center text-center">
          <img src={horizontal} alt="vertical" className="h-[98%]" />
        </div>
        <div className="h-[50%] overflow-y-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam quia sint placeat non quidem voluptate culpa sapiente tempora beatae, deserunt assumenda laudantium. Eum cumque quibusdam ratione voluptates maxime animi tenetur amet maiores similique?</div>
    </div>
   <div className="h-72 w-1/4 bg-red-600 rounded-md p-1 m-2">
        <div className="h-[50%] flex justify-center text-center">
          <img src={vertical} alt="vertical" className="h-[98%]" />
        </div>
        <div className="h-[50%] overflow-y-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam quia sint placeat non quidem voluptate culpa sapiente tempora beatae, deserunt assumenda laudantium. Eum cumque quibusdam ratione voluptates maxime animi tenetur amet maiores similique?</div>
    </div>
   <div className="h-72 w-1/4 bg-red-600 rounded-md p-1 m-2">
        <div className="h-[50%] flex justify-center text-center">
          <img src={vertical} alt="vertical" className="h-[98%]" />
        </div>
        <div className="h-[50%] overflow-y-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam quia sint placeat non quidem voluptate culpa sapiente tempora beatae, deserunt assumenda laudantium. Eum cumque quibusdam ratione voluptates maxime animi tenetur amet maiores similique?</div>
    </div>
   <div className="h-72 w-1/4 bg-red-600 rounded-md p-1 m-2">
        <div className="h-[50%] flex justify-center text-center">
          <img src={vertical} alt="vertical" className="h-[98%]" />
        </div>
        <div className="h-[50%] overflow-y-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam quia sint placeat non quidem voluptate culpa sapiente tempora beatae, deserunt assumenda laudantium. Eum cumque quibusdam ratione voluptates maxime animi tenetur amet maiores similique?</div>
    </div>
   
   
    
   </div>
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