import { useState } from "react";

export default function InputForm() {
    const [inputValue, setInputValue] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    function handleRandomize() {
        let fieldValues = inputValue.split(','); 
        fieldValues = fieldValues.map(item => item.trim()).filter(item => item !== '');

        if (fieldValues.length < 25) {
            setAlertMessage('Too few entries, please enter 25 values separated by commas.');
        }
        else if (fieldValues.length > 25) {
            setAlertMessage('Too many entries, please enter 25 values separated by commas.');
        }
        else {
            setAlertMessage('');
        }
        
        if (fieldValues.length === 25) {
            const shuffledFieldValues = fieldValues.sort((a, b) => 0.5 - Math.random());
            console.log(shuffledFieldValues);
        }

        
    }

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }


    return (
        <>
            {alertMessage && (
                <div className="alert alert-warning" role="alert">
                    {alertMessage}
                </div>
            )}
            <div className="input-group">
                <span className="input-group-text">Values</span>
                <input
                    type="text"
                    className="form-control"
                    id="fieldsInputs"
                    name="fieldInputs"
                    aria-label="values"
                    placeholder="Values for fields, comma seperated"
                    value={inputValue}
                    onChange={handleOnChange}
                />
                <button className="input-group-text" type="button" onClick={handleRandomize}>
                    Randomize
                </button>
            </div>
        </>
    );
}