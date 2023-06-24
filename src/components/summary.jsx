
function Summary(props){


    return(
        <div className="w-[200px] sm:w-[366px] md:w-[466px] lg:w-[688px] h-[224px] mt-4 bg-white overflow-auto rounded-md mb-5">
            <p>
                {props.summaryText}
            </p>
        </div>
    )

}

export default Summary