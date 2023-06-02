import task from "../assets/task.svg"
import notification from "../assets/notifications.svg"
import archive from "../assets/archive.svg"
import remove from "../assets/delete.svg"
import star from "../assets/star.svg"
import { ToggleValue } from "./types/toggle.types"


const Sidebar = (props:ToggleValue) => {
  const sidebarOpenWidth = "bg-yellow-200  w-60 space-y-5 h-full pt-3 p-1  "
  const sidebarCloseWidth = " space-y-5 h-full   pt-3 pl-8 "
  const boxView = " p-1  bg-tertiary-400   rounded-md flex justify-center"
  const wideView = " p-1 pl-8 bg-tertiary-400 rounded-md flex items-center"
  return (
    <>
      <div className={props.shouldToggle ?  sidebarOpenWidth : sidebarCloseWidth}>
        <div className={props.shouldToggle ? wideView : boxView}>
            <img src={task}  alt="task" className="w-10" />
            {
              props.shouldToggle ? <p className="pl-6 font-medium">Task</p>:null
            }
        </div>
        <div className={props.shouldToggle ? wideView : boxView}>
            <img src={star} alt="important" className="w-10"  />
            {
              props.shouldToggle ? <p className="pl-6 font-medium">Important</p>:null
            }
        </div>
        <div className={props.shouldToggle ? wideView : boxView}>
            <img src={notification} alt="reminder" className="w-10"  />
            {
              props.shouldToggle ? <p className="pl-6 font-medium">Reminder</p>:null
            }
        </div>
        <div className={props.shouldToggle ? wideView : boxView}>
            <img src={archive} alt="archive" className="w-10"  />
            {
              props.shouldToggle ? <p className="pl-6 font-medium">Archive</p>:null
            }
        </div>
        <div className={props.shouldToggle ? wideView : boxView}>
            <img src={remove} alt="trash" className="w-10"  />
            {
              props.shouldToggle ? <p className="pl-6 font-medium">Trash</p>:null
            }
        </div>
      </div>
    </>
  )
}

export default Sidebar