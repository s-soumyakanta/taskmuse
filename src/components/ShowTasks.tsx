import Task from "./Task"
import { useAppSelector } from "../hooks"

const ShowTasks = () => {
  const tasks = useAppSelector(state => state.task.allTasks)

  return (
    <>
     <div>
        <Task allTasks={tasks} />
     </div>
    </>
  )
}

export default ShowTasks