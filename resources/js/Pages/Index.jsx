import { useState } from "react";
import Board from "./Board";
import InputForm from "./InputForm";
import LanguageSwitch from "./LangaugeSwitch";

export default function Index({locales}) {

    const [fieldValues, setFieldValues] = useState([]);

    function handleFieldValues(values) {
        setFieldValues(values);
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <LanguageSwitch />
            </div>
            <div className="row mt-3">
                <div className="col">
                    <InputForm onFieldValueInput={handleFieldValues} locales={locales} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col d-flex justify-content-center mb-5">
                    <Board fieldValues={fieldValues} />
                </div>
            </div>
        </div>
    );
}