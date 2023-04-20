function Dropbox() {
  
    return (
      <div className ="w-[100%] flex justify-center">
        <form className="" method = "post">
            <label>
                <textarea className="w-[688px] h-[224px] placeholder:align-top resize-none" type ="text" name = "inputText" placeholder = "Paste your text here..."/>
            </label>
            <input className="block text-grey p[2px]" type="file" name="file"/>
        </form>
      </div>
    )
  }

  export default Dropbox