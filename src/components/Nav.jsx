import logo from '../assets/Vector.png'
function Nav() {
  
    return (
      <div className="flex flex-row w-100% h-[10vh]">
        <img src={logo}/>
        <div>
        <h1>
            Welcome to Summer
        </h1>
        </div>
        <div>
            <button className='bg-orange text-grey'> Login</button>
        </div>
        
      </div>
    )
  }
  
  export default Nav