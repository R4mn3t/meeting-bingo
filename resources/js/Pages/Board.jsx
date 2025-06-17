import { useState } from "react";
import Field from "./Field";

export default function Board({fieldValues}) {
    const [fields, setFields] = useState(Array(25).fill(false));
    const [status, setStatus] = useState('');

    function handleClick(i) {
        const nextFields = fields.slice();
        nextFields[i] = !nextFields[i];
        setFields(nextFields);

        if (calculateWinner(nextFields)) {
            setStatus('You won!');
        } else {
            setStatus('');
        }
    }

    function calculateWinner(fields) {
        const lines = [
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d, e] = lines[i];

            if (fields[a] && fields[a] === fields[b] && fields[b] === fields[c] && fields[c] === fields[d] && fields[d] === fields[e]) {
                return fields[a];
            }
        }

        return null;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div>
                <h3><b>{status}</b></h3>
            </div>
            <div className="board">
                <div className="board-row d-flex">
                    <Field value={fieldValues[0]} marked={fields[0]} onFieldClick={() => handleClick(0)} id="0"/>
                    <Field value={fieldValues[1]} marked={fields[1]} onFieldClick={() => handleClick(1)} id="1"/>
                    <Field value={fieldValues[2]} marked={fields[2]} onFieldClick={() => handleClick(2)} id="2"/>
                    <Field value={fieldValues[3]} marked={fields[3]} onFieldClick={() => handleClick(3)} id="3"/>
                    <Field value={fieldValues[4]} marked={fields[4]} onFieldClick={() => handleClick(4)} id="4"/>
                </div>
                <div className="board-row d-flex">
                    <Field value={fieldValues[5]} marked={fields[5]} onFieldClick={() => handleClick(5)} id="5" />
                    <Field value={fieldValues[6]} marked={fields[6]} onFieldClick={() => handleClick(6)} id="6" />
                    <Field value={fieldValues[7]} marked={fields[7]} onFieldClick={() => handleClick(7)} id="7" />
                    <Field value={fieldValues[8]} marked={fields[8]} onFieldClick={() => handleClick(8)} id="8" />
                    <Field value={fieldValues[9]} marked={fields[9]} onFieldClick={() => handleClick(9)} id="9" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fieldValues[10]} marked={fields[10]} onFieldClick={() => handleClick(10)} id="10" />
                    <Field value={fieldValues[11]} marked={fields[11]} onFieldClick={() => handleClick(11)} id="11" />
                    <Field value={fieldValues[12]} marked={fields[12]} onFieldClick={() => handleClick(12)} id="12" />
                    <Field value={fieldValues[13]} marked={fields[13]} onFieldClick={() => handleClick(13)} id="13" />
                    <Field value={fieldValues[14]} marked={fields[14]} onFieldClick={() => handleClick(14)} id="14" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fieldValues[15]} marked={fields[15]} onFieldClick={() => handleClick(15)} id="15" />
                    <Field value={fieldValues[16]} marked={fields[16]} onFieldClick={() => handleClick(16)} id="16" />
                    <Field value={fieldValues[17]} marked={fields[17]} onFieldClick={() => handleClick(17)} id="17" />
                    <Field value={fieldValues[18]} marked={fields[18]} onFieldClick={() => handleClick(18)} id="18" />
                    <Field value={fieldValues[19]} marked={fields[19]} onFieldClick={() => handleClick(19)} id="19" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fieldValues[20]} marked={fields[20]} onFieldClick={() => handleClick(20)} id="20" />
                    <Field value={fieldValues[21]} marked={fields[21]} onFieldClick={() => handleClick(21)} id="21" />
                    <Field value={fieldValues[22]} marked={fields[22]} onFieldClick={() => handleClick(22)} id="22" />
                    <Field value={fieldValues[23]} marked={fields[23]} onFieldClick={() => handleClick(23)} id="23" />
                    <Field value={fieldValues[24]} marked={fields[24]} onFieldClick={() => handleClick(24)} id="24" />
                </div>
            </div>
        </div>
    );
}