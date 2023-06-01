import {useState} from "react"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ShowTask from "./components/ShowTask";

const App = () => {
  const [toggle,setToggle] = useState(true)
  const toggleMenu = () =>{
    setToggle(!toggle)
  }
  console.log(toggle)
  return (
   <>
      {/* <Nav /> */}

      {/* <Sidebar /> */}
      <div className='h-[100vh]'>
        <div className=' h-[9%]'>
          <Navbar handleMenuClick={toggleMenu} />
        </div>
        <div className=' h-[91%]'>
        <div className='flex h-full'>
          <div>
            <Sidebar shouldToggle={toggle} />
          </div>
          <div className="bg-teal-200 w-full flex justify-center">
            <ShowTask />
          </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
