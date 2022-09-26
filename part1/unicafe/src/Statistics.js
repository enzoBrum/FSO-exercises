
const ColumnRow = ({message, data}) => {
    return (
    <tr>
        <td>
            {message}
        </td>
        <td>
            {data}
        </td>
    </tr>
    )
}

const Statistics = ({feedback}) => {
    const feedbackSum = feedback.bad + feedback.neutral + feedback.good
    const average = (feedback.good - feedback.bad) / feedbackSum
    const positivePercentage = (feedback.good/feedbackSum)*100
  

    if (feedbackSum)
    {
        return(
            <table>
                <tbody>
                    <ColumnRow message="good" data={feedback.good}/>         
                    <ColumnRow message="neutral" data={feedback.neutral}/>         
                    <ColumnRow message="bad" data={feedback.bad}/>         
                    <ColumnRow message="all" data={feedbackSum}/>         
                    <ColumnRow message="average" data={average}/>         
                    <ColumnRow message="positive" data={positivePercentage + " %"}/>         
                </tbody>
            </table>
        )
    }

    return (
        <>
            <div>No feedback given</div>
        </>
    )
    
}

export default Statistics