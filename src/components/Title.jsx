import Typewriter from 'typewriter-effect';

function Title(){

    return(
        <div>
        <h1 className="font-title font-bold text-[20px] sm:text-[32px] md:text-[46px] lg:text-[64px] text-grey">
              Welcome to Summer
            </h1>
            <div className=''>
            <h2 className="font-title font-bold text-[14px] sm:text-[24px] md:text-[32px] lg:text-[46px] mt-[0px] sm:mt-[-10px] text-grey flex flex-row">
              Summarize your...&nbsp;
              <Typewriter
              options={{
                strings: ['documents', 'memos', 'papers', 'readings'],
                autoStart: true,
                loop: true,
              }}
            />
            </h2>
            </div>
        </div>
    )

}

export default Title; 