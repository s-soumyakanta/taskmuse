import Task from "./Task"
import { useAppSelector } from "../hooks"

const ShowTasks = () => {
  const tasks = useAppSelector(state => state.task.allTasks)
  console.log(crypto.randomUUID())
  return (
    <>
     <div>
        <Task allTasks={tasks} />
     </div>
    </>
  )
}

export default ShowTasks