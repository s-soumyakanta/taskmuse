import CreateTask from "./CreateTask"


const SubHomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className=" bg-yellow-100 w-full flex justify-center items-center">
           <CreateTask />
        </div>
        <div className="bg-lime-300 h-full w-full">Task List</div>
        
      </div>
    </>
  )
}

export default SubHomePage