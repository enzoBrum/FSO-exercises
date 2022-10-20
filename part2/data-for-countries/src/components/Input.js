const Input = ({value, setValue, text}) => {
    const changeHandler = (event) => {
        setValue(event.target.value)
    }
    
    return(
    <div>
        {text} <input 
                    value={value} 
                    onChange={changeHandler}
                />
    </div>)
}

export default Input
