import {useState} from "react"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const [toggle,setToggle] = useState(false)
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
          <div>
            right
          </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
