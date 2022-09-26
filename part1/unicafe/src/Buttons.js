// Button component, receives a text message and a click handler

import { handleGoodClick, handleNeutralClick, handleBadClick } from "./handlerClick"

const Button = ({message, handlerClick}) => {
    return (
    <>
        <button onClick={handlerClick}>
            {message}
        </button>
    </>
    )
}


const Buttons = ({feedback, setFeedback}) => {
    return(
        <>
            <Button message="good" handlerClick={handleGoodClick(feedback, setFeedback)} />
            <Button message="neutral" handlerClick={handleNeutralClick(feedback, setFeedback)} />
            <Button message="bad" handlerClick={handleBadClick(feedback, setFeedback)} />
        </>
    )
}



export default Buttons