import Typewriter from 'typewriter-effect';

function Title(){

    return(
        <div>
        <h1 className="font-title font-bold text-[64px] mt-10 text-grey">
              Welcome to Summer
            </h1>
            <div className=''>
            <h2 className="font-title font-bold text-[40px] mt-[-20px] text-grey flex flex-row">
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