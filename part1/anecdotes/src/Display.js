const Display = ({content, votes}) => {
    return(
        <>
            <div>
                {content}
            </div>
            <div>
                has {votes} votes
            </div>
        </>
    )
}

export default Display