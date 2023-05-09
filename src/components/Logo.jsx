import logo from "../assets/Vector.png";

function Logo(){

    return(
        <div className='box-border'>
            <img src={logo} className="max-w-[6vh] max-h-[6vh] md:max-w-[8vh] md:max-h-[8vh] mt-[10px] ml-[10px]" />
        </div>
    )

}
export default Logo; 