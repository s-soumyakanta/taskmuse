import CreateTask from "./CreateTask"
import ShowTasks from "./ShowTasks"

const SubHomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className=" bg-yellow-100 w-full flex justify-center items-center">
           <CreateTask />
        </div>
        <div className="hide-scroll-bar bg-lime-300 h-full w-full overflow-y-scroll p-4">
          <ShowTasks />
        </div>
        
      </div>
    </>
  )
}

export default SubHomePage