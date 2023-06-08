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



const CreateTask = () => {
  const [taskText,setTaskTest] = useState("")
  const [allImage,setAllImage] = useState<string[]>([])
  const dispatch = useAppDispatch()
  console.log(allImage)

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
const save = (userText:string,allImage:string[]) => {
    if(!userText && allImage.length === 0){
        alert("Please Compose a Task")
    }else{

        dispatch(addText({taskText:userText,imageArray:allImage}))
    }

}
const handelSave = () => {
    save(taskText,allImage)
    setTaskTest("")
    setAllImage([])
}

const handleFileInput = (event: ChangeEvent<HTMLInputElement>) =>{
    const files = event.target.files
    if(files){
        const selectedImagesFileArray = Array.from(files)
        const imagesobjOfArray = selectedImagesFileArray.map((image) => {
              return URL.createObjectURL(image)
        })
        
        const selectedImageArray = {imagesobjOfArray}.imagesobjOfArray
        if(selectedImageArray.length === 0){
         setAllImage(selectedImageArray)
        }else{
         const newAllImageArray = allImage.concat(selectedImageArray)
         setAllImage(newAllImageArray)
        }
        
    } 
    
}

  return (
    <>
    <div className='w-[80%] my-7  bg-red-400 p-2 rounded-md'>
      <div className=" flex flex-col justify-center w-full items-center bg-white">
        { !allImage ? null:
            <div className="flex overflow-x-scroll">
               {
                   allImage?.map((image)=>{
                       return(
                           <img src={image} className="w-20 m-1" alt="user selected" />
                       )
                   })

               }
            </div>
        }
       <textarea id="create-task" 
                 placeholder="Create a task..." 
                 className="outline-none w-full rounded-md resize-none " 
                 onChange={handleOnChange}
                 value={taskText}
        />
      </div>
      <div className="flex  w-full justify-between items-center pt-2 ">
      <div className="flex  w-[60%] justify-between  ">
      <div className="w-6">
           <label htmlFor="add-image-input">
            <img src={image} alt="Add Photographs to task"  className="cursor-pointer" />
           </label>
            <input type="file" accept="image/jpeg, image/png, image/jpg" className="hidden" id="add-image-input" multiple onChange={handleFileInput}  />
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