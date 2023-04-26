import Typewriter from 'typewriter-effect';

function Title(){

    return(
        <div>
        <h1 className="font-title font-bold text-[64px] mt-10 text-grey">
              Welcome to Summer
            </h1>
            <div className=''>
            <h2 className="font-title font-bold lg:text-[40px] md:text-[32px] text-[24px] mt-[-20px] text-grey">
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