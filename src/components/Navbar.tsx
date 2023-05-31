import menu from "../assets/hambuger.svg"
import search from "../assets/search.svg"
import view from "../assets/grid.svg"
import sort from "../assets/filter.svg"
import about from "../assets/info.svg"
import download from "../assets/download.svg"
import logo from "../assets/logo.png"
import { Toggle } from "./types/toggle.types"


const Navbar = (props:Toggle) => {
 
  return (
    <>
     <nav className="flex flex-row w-full  border-b-2 ">
       <div className="flex flex-row w-2/6   ml-8 items-center  ">
        <div className="w-10 cursor-pointer" >
          <img src={menu} alt="menu" onClick={props.handleMenuClick} />
        </div>
        <div className="w-16 ml-6 flex items-center">
          <img src={logo} alt="taskzen" />
          <p>TaskZen</p>
        </div>
       </div>

       <div className="flex  w-4/6 justify-between items-center px-8 ">
        <div className="w-3/6">
        <div className=" flex justify-end ">
          <img src={search} alt="search" className="w-6" />
        </div>
        </div>
        <div className="w-3/6 flex justify-evenly items-center">

      
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

export default Navbar