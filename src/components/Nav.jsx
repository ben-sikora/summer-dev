import logo from '../assets/Vector.png'
function Nav() {
  
    return (
      <div className="flex flex-row w-100% h-[20vh] mt-3 justify-between">
        <img src={logo} className='max-w-[8vh] max-h-[8vh] mr-3 mt-3'/>
        <div className='self-center'>
        <h1 className='font-title font-bold text-[64px] text-grey'>
            Welcome to Summer
        </h1>
        <h1 className='font-title font-bold text-[40px] mt-[-20px] text-grey'>
            Summarize your documents...
        </h1>
        </div>
        <div className='box-border'>
            <button className='bg-orange text-grey h-[50px] w-[160px] rounded-xl mt-7 text-[32px] mr-6'> Login</button>
        </div>
        
      </div>
    )
  }
  
  export default Nav