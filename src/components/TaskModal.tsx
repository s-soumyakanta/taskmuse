import {EditTaskOptions} from "../components/CreateTask"
import close from "../assets/close-cross.svg"
import { ModalComponentProps } from "./types/modal.types"

const TaskModal = ({selectedTaskId,tasks,toggleModal}:ModalComponentProps) => {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId )
  return (
    <>
    <div className="absolute top-0 bg-white bg-opacity-60 w-full h-full" onClick={toggleModal} > 
       <div className="flex justify-center items-center w-full h-full">

        <div className='w-[40%] h-[80%] bg-yellow-100 rounded-md relative' onClick={(e)=>e.stopPropagation()}>
            <div className="h-[85%] pt-8 overflow-x-scroll hide-scroll-bar p-2 bg-lime-400 rounded-t-md">
              <p contentEditable="true" className="outline-none">
                {
                  selectedTask?.taskText
                }
              </p>
            </div>
            <div className="h-[15%] rounded-b-md flex flex-col ">  
              <div className=" h-[50%] flex items-center justify-between px-3">
               <EditTaskOptions />
              </div>
              <div className="flex items-end h-[50%] justify-end space-x-4 pb-1 pr-1">
                <button className="p-2 w-24 rounded-md bg-lime-200">Delete</button>
                <button className="p-2 w-24 rounded-md bg-lime-400">Completed</button>
              </div>
            </div>
           <div onClick={toggleModal} className="absolute top-0 right-0 m-2 w-6 h-6 p-1 cursor-pointer rounded-full bg-red-500 flex justify-center items-center">
            <img src={close} alt="close" />
           </div>
        </div>
       </div>
      
       </div>
    </>
  )
}

export default TaskModal