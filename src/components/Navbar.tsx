import menu from "../assets/hambuger.svg"
import search from "../assets/search.svg"
import view from "../assets/grid.svg"
import sort from "../assets/filter.svg"
import about from "../assets/info.svg"
import download from "../assets/download.svg"
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <>
     <nav className="flex flex-row w-full mt-2 border-b-2 ">
       <div className="flex flex-row w-1/6 justify-between px-8 items-center">
        <div className="w-8">
          <img src={menu} alt="menu" />
        </div>
        <div className="w-16">
          <img src={logo} alt="taskzen" />
        </div>
       </div>

       <div className="flex  w-5/6 justify-between items-center px-8 ">
        <div className="w-4/6">
        <div className=" flex justify-end ">
          <img src={search} alt="search" className="w-6" />
        </div>
        </div>
        <div className="w-2/6 flex justify-evenly items-center">

      
        <div className="w-6">
          <img src={view} alt="view" />
        </div>
        <div className="w-6">
          <img src={sort} alt="sort" />
        </div>
        <div className="w-6">
          <img src={about} alt="about" />
        </div>
        <div className="w-6">
          <img src={download} alt="download" />
        </div>
        </div>
       </div>
       
     </nav>
      </>
  )
}

export default Nav