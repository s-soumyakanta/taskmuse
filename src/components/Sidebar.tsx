import task from "../assets/task.svg"
import notification from "../assets/notifications.svg"
import archive from "../assets/archive.svg"
import remove from "../assets/delete.svg"
import star from "../assets/star.svg"



const Sidebar = () => {
  return (
    <>
      <div className="bg-red-500 w-60 space-y-5 h-full">
        <div className="w-full h-12 bg-yellow-50 rounded-md">
            <img src={task} alt="task" />
        </div>
        <div>
            <img src={star} alt="important" />
        </div>
        <div>
            <img src={notification} alt="reminder" />
        </div>
        <div>
            <img src={archive} alt="archive" />
        </div>
        <div>
            <img src={remove} alt="trash" />
        </div>
      </div>
    </>
  )
}

export default Sidebar