import { useState } from "react";

export default function InputForm({ onFieldValueInput, locales }) {
    const [inputValues, setInputsValue] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    function handleRandomize() {
        let fieldValues = inputValues.split(';'); 
        fieldValues = fieldValues.map(item => item.trim()).filter(item => item !== '');

        if (fieldValues.length < 25) {
            setAlertMessage(locales.too_few);
        }
        else if (fieldValues.length > 25) {
            setAlertMessage(locales.too_many);
        }
        else {
            setAlertMessage('');
        }
        
        if (fieldValues.length === 25) {
            const shuffledFieldValues = fieldValues.sort((a, b) => 0.5 - Math.random());
            onFieldValueInput(shuffledFieldValues);
        }
        
    }

    function handleChange(event) {
        const value = event.target.value;
        setInputsValue(value);
    }


    return (
        <>
            {alertMessage && (
                <div className="alert alert-warning" role="alert">
                    {alertMessage}
                </div>
            )}
            <div className="input-group">
                <span className="input-group-text">{locales.values}</span>
                <input
                    type="text"
                    className="form-control"
                    id="fieldsInputs"
                    name="fieldInputs"
                    aria-label="values"
                    placeholder={locales.placeholder}
                    value={inputValues}
                    onChange={handleChange}
                />
                <button className="input-group-text" type="button" onClick={handleRandomize}>
                    {locales.randomize}
                </button>
            </div>
        </>
    );
}