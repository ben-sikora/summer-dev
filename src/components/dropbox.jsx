import React, { useState } from 'react';
import LoadingIcon from './LoadingIcon.jsx';
import Summary from './summary.jsx'

function Dropbox() {
  const [text, setText] = useState("");
  const [summary, setSummary]= useState("");
  const [summaryStat, setSummaryStat]= useState("dorm");
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const spinner= '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';

  const onSubmit= () =>{
    const url="http://localhost:3000/upload-text"; 
    setSummaryStat('loading')
    

    if(!isFilePicked){
      fetch( url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: text
        })
      }
      ).then(res =>res.json())
      .then(data => {
        setSummary(data.response)
        setSummaryStat('arrived') 
      }).catch(err => console.log(err));
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
              'arrived': <Summary summaryText={summary} />
            }[summaryStat]
          }
       </div>
      </div>
    )
  }

  export default Dropbox