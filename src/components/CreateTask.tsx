import image from "../assets/image.svg"
import color from "../assets/color.svg"
import schedule from "../assets/schedule.svg"
import repeat from "../assets/repeat.svg"
import reminder from "../assets/alert.svg"
import more from "../assets/more.svg"
import copy from "../assets/copy.svg"


const CreateTask = () => {

    //Auto resize text area for create a task
   
    const createTaskTextArea = document.getElementById("create-task") as HTMLTextAreaElement | null;
if(createTaskTextArea === null){

}else{

    createTaskTextArea.addEventListener("keyup", (e) => {
        if (createTaskTextArea && e.target) {
            createTaskTextArea.style.height = "50px"
            let textAreaHeight = (e.target as HTMLTextAreaElement).scrollHeight;
            createTaskTextArea.style.height = `${textAreaHeight}px`;
        }
    });
}



  return (
    <>
    <div className='w-[40%] my-7  bg-red-400 p-2 rounded-md'>
      <div className=" flex justify-center w-full items-centern">
       <textarea id="create-task" placeholder="Create a task..." className="pl-4 w-full rounded-md resize-none " />
      </div>
      <div className="flex  w-full justify-between items-center pt-2 ">
      <div className="flex  w-[60%] justify-between  ">
        <div className="w-6">
            <img src={image} alt="Add Photographs to task" />
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
        <button>Save</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default CreateTask