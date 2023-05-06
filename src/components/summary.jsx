
function Summary(props){


    return(
        <div className="w-[688px] h-[224px] mt-[5px] bg-white overflow-auto rounded-md">
            <p>
                {props.summaryText}
            </p>
        </div>
    )

}

export default Summary