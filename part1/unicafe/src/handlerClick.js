// click handler functions. They receive a stateful value and 
// a function to update it

export function handleGoodClick(feedback, setFeedback)
{
    
    return () => setFeedback({...feedback, good: feedback.good + 1})
}

export function handleNeutralClick(feedback, setFeedback)
{
    return () => setFeedback({...feedback, neutral: feedback.neutral + 1})
}

export function handleBadClick(feedback, setFeedback)
{
    return () => setFeedback({...feedback, bad: feedback.bad + 1})
}

 