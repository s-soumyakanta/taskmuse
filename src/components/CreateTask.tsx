import image from "../assets/image.svg"
import color from "../assets/color.svg"
import schedule from "../assets/schedule.svg"
import repeat from "../assets/repeat.svg"
import reminder from "../assets/alert.svg"
import more from "../assets/more.svg"
import copy from "../assets/copy.svg"
import { ChangeEvent, useState } from "react"
import { useAppDispatch} from "../hooks"
import { addText } from "../store/Slices/tasksSlice"


export const EditTaskOptions = () =>{
    const addImageSvg = document.getElementById("add-image-svg")
    const addImageInput = document.getElementById("add-image-input")
    
    addImageSvg?.addEventListener("click",()=>{
        addImageInput?.click()
    })
    
    addImageInput?.addEventListener("change",(e:Event)=>{
       const files = (e.target as HTMLInputElement).files
       if(files){

           const selectedImagesFileArray = Array.from(files)
           const imagesArray = selectedImagesFileArray.map((image) => {
                 return URL.createObjectURL(image)

           })
           console.log(imagesArray)
       }
       
    })
   
    

    return(
        <>
          <div className="w-6">
            <img src={image} alt="Add Photographs to task" id="add-image-svg" />
            <input type="file" accept="image/jpeg, image/png, image/jpg" className="hidden" id="add-image-input" multiple  />
        </div>
        <div className="w-6">
            <img src={color} alt="Add background color to task" />
        </div>
        <div className="w-6">
            <img src={schedule} alt="Scheduule task" />
        </div>
        <div className="w-6">
            <img src={repeat} alt="Repeat task" />
        </div>
        <div className="w-6">
            <img src={reminder} alt="Add reminder for task" />
        </div>
        <div className="w-6">
            <img src={copy} alt="Copy task text to clipboard" />
        </div>
        <div className="w-6">
            <img src={more} alt="More options" />
        </div>
     
        </>
    )
}
const CreateTask = () => {
  const [taskText,setTaskTest] = useState("")
  const dispatch = useAppDispatch()
  
//Auto resize text area for create a task
 const createTaskTextArea = document.getElementById("create-task") as HTMLTextAreaElement | null;
if(createTaskTextArea === null){
   console.log("Can't found")
}else{

    createTaskTextArea.addEventListener("keyup", (e) => {
        if (createTaskTextArea && e.target) {
            createTaskTextArea.style.height = "50px"
            let textAreaHeight = (e.target as HTMLTextAreaElement).scrollHeight;
            createTaskTextArea.style.height = `${textAreaHeight}px`;
        }
    });
}


const handleOnChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    setTaskTest(e.target.value)
    
}
const save = (userText:string) => {
    if(!userText){
        alert("Please Compose a Task")
    }else{

        dispatch(addText({taskText:userText}))
    }

}
const handelSave = () => {
    save(taskText)
    setTaskTest("")
}

  return (
    <>
    <div className='w-[40%] my-7  bg-red-400 p-2 rounded-md'>
      <div className=" flex justify-center w-full items-center">
       <textarea id="create-task" 
                 placeholder="Create a task..." 
                 className="pl-4 w-full rounded-md resize-none " 
                 onChange={handleOnChange}
                 value={taskText}
        />
      </div>
      <div className="flex  w-full justify-between items-center pt-2 ">
      <div className="flex  w-[60%] justify-between  ">
       <EditTaskOptions />
      </div>
      <div className="w-[40%] flex justify-evenly px-1">
        <button>Discard</button>
        <button onClick={handelSave}>Save</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default CreateTask