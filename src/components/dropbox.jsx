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
    const url="https://54.183.255.16/upload-text"; 
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
      const reader = new FileReader();
      reader.readAsText(selectedFile)

      reader.onload = () =>{
        fetch( url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            input: reader.result
          })
        }).then(res =>res.json())
        .then(data => {
          setSummary(data.response)
          setSummaryStat('arrived') 
        }).catch(err => console.log(err))

      } 

      reader.onerror = function() {
        console.log(reader.error);
      };
      
    

      /*
      const formData = new FormData()
      formData.append('file', selectedFile)
      fetch( url,{
        method: "POST",
        headers:{

        },
        body: formData
      }
      ).then(res =>res.json())
      .then(data => {
        setSummary(data.response)
        setSummaryStat('arrived') 
      }).catch(console.log()); */
    }
  }
  
    return (
      <div>
      <div className ="w-[100%] flex justify-center">
        <form className="w-[200px] sm:w-[366px] md:w-[466px] lg:w-[688px]" action='#0'>
            <label>
                <textarea className="w-[100%] h-[224px] mt-[30px] placeholder:align-top resize-none rounded-md pl-1 pr-1" type ="text" name = "inputText" placeholder = "Paste your text here..." onChange={(event)=>setText(event.target.value)}/>
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