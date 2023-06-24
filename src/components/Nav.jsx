import logo from '../assets/Vector.png'
function Nav() {
  
    return (
      <div className="flex flex-row w-100% h-[40vh] pt-3 justify-between border-box">
        <img src={logo} className='max-w-[8vh] max-h-[8vh] ml-3 mr-3 mt-3'/>
        <div className='self-center ml-[125px]'>
        <h1 className='font-title font-bold lg:text-[64px] text-grey md:text-[48px]'>
            Welcome to Summer
        </h1>
        <h2 className='font-title font-bold text-[40px] mt-[-20px] text-grey'>
            Summarize your documents...
        </h2>
        </div>
        {/* 
        <div className='box-border'>
            <button className='bg-orange text-grey h-[50px] w-[160px] rounded-xl text-[32px] mr-6'> Login</button>
        </div>*/}
        
      </div>
    )
  }
  
  export default Nav