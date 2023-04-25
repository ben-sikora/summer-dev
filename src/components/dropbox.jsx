import React, { useState } from 'react';

function Dropbox() {
  const [text, setText] = useState("");


  const onSubmit= () =>{
    const url="http://127.0.0.1:8000/upload-text"; 
    fetch( url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text)
    }
    ).then(res =>res.json())
    .then(data => {
      console.log(data)
    }).catch(console.log); 
  }
  
    return (
      <div className ="w-[100%] flex justify-center">
        <form className="" action='#0'>
            <label>
                <textarea className="w-[688px] h-[224px] placeholder:align-top resize-none rounded-md pl-1 pr-1" type ="text" name = "inputText" placeholder = "Paste your text here..." onChange={(event)=>setText(event.target.value)}/>
            </label>
            <input className="block text-grey p[2px]" type="file" name="file"/>
            <input
              className="bg-orange text-grey text-[32px] w-[200px] h-[50px] rounded-xl"
              type="button"
              value="Summarize"
              onClick={onSubmit}
            />
        </form>
      </div>
    )
  }

  export default Dropbox