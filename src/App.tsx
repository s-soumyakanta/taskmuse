import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
   <>
      {/* <Nav /> */}

      {/* <Sidebar /> */}
      <div className='h-[100vh]'>
        <div className=' h-[9%]'>
          <Navbar />
        </div>
        <div className=' h-[91%]'>
        <div className='flex h-full bg-slate-500'>
          <div>
            <Sidebar />
          </div>
          <div className='to-blue-900'>
            right
          </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
