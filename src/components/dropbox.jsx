import React, { useState } from 'react';
import LoadingIcon from './LoadingIcon.jsx';

function Dropbox() {
  const [text, setText] = useState("");
  const [summary, setSummary]= useState("");
  const [summaryStat, setSummaryStat]= useState("dorm");
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const spinner= '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';

  const onSubmit= () =>{
    const url="http://localhost:3000/text"; 
    setSummaryStat('loading')
    

    if(!isFilePicked){
      console.log("WHAT UP")
      fetch( url,{
        method: "POST",
        headers: {
        },
        body: JSON.stringify(text)
      }
      ).then(res =>res.text())
      .then(data => {
        console.log(data)
        setSummaryStat('arrived') 
      }).catch(err => console.log('BAD'));
    } else{
      const formData = new FormData()
      formData.append('File', selectedFile)
      fetch( url,{
        method: "POST",
        body: formData
      }
      ).then(res =>res.json())
      .then(data => {
        console.log(data[0])
        setSummary(data[0])
      }).catch(console.log()); 
    }
  }
  
    return (
      <div>
      <div className ="w-[100%] flex justify-center">
        <form className="" action='#0'>
            <label>
                <textarea className="w-[688px] h-[224px] placeholder:align-top resize-none" type ="text" name = "inputText" placeholder = "Paste your text here..." onChange={(event)=>setText(event.target.value)}/>
            </label>
            <input className="block text-grey p-[2px]" type="file" name="file"
            onChange={(event)=> {
              setSelectedFile(event.target.files[0])
              setIsFilePicked(true)
            }}/>
            <input
              className="bg-orange text-grey text-[32px] w-[200px] h-[50px] rounded-xl"
              type="button"
              value="Summarize"
              onClick={onSubmit}
            />
        </form>

      </div>
        <div className='w-[100%] flex justify-center'>
          {
            {
              'dorm': <div />,
              'loading': <LoadingIcon />,
              'arrived': <p>{summary}</p>
            }[summaryStat]
          }
       </div>
      </div>
    )
  }

  export default Dropbox