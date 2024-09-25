import { useState } from "react";
import Field from "./Field";

export default function Board() {
    const [fields, setFields] = useState(Array(25).fill(false));
    const [status, setStatus] = useState('');

    function handleClick(i) {
        const nextFields = fields.slice();
        nextFields[i] = true;
        setFields(nextFields);

        if (calculateWinner(nextFields)) {
            setStatus('You won!');
            return;
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
                <p><b>{status}</b></p>
            </div>
            <div className="board">
                <div className="board-row">
                    <Field value={fields[0]} className={fields[0] ? 'bg-success' : ''} onFieldClick={() => handleClick(0)} id="0"/>
                    <Field value={fields[1]} className={fields[1] ? 'bg-success' : ''} onFieldClick={() => handleClick(1)} id="1"/>
                    <Field value={fields[2]} className={fields[2] ? 'bg-success' : ''} onFieldClick={() => handleClick(2)} id="2"/>
                    <Field value={fields[3]} className={fields[3] ? 'bg-success' : ''} onFieldClick={() => handleClick(3)} id="3"/>
                    <Field value={fields[4]} className={fields[4] ? 'bg-success' : ''} onFieldClick={() => handleClick(4)} id="4"/>
                </div>
                <div className="board-row">
                    <Field value={fields[5]} className={fields[5] ? 'bg-success' : ''} onFieldClick={() => handleClick(5)} id="5" />
                    <Field value={fields[6]} className={fields[6] ? 'bg-success' : ''} onFieldClick={() => handleClick(6)} id="6" />
                    <Field value={fields[7]} className={fields[7] ? 'bg-success' : ''} onFieldClick={() => handleClick(7)} id="7" />
                    <Field value={fields[8]} className={fields[8] ? 'bg-success' : ''} onFieldClick={() => handleClick(8)} id="8" />
                    <Field value={fields[9]} className={fields[9] ? 'bg-success' : ''} onFieldClick={() => handleClick(9)} id="9" />
                </div>
                <div className="board-row">
                    <Field value={fields[10]} className={fields[10] ? 'bg-success' : ''} onFieldClick={() => handleClick(10)} id="10" />
                    <Field value={fields[11]} className={fields[11] ? 'bg-success' : ''} onFieldClick={() => handleClick(11)} id="11" />
                    <Field value={fields[12]} className={fields[12] ? 'bg-success' : ''} onFieldClick={() => handleClick(12)} id="12" />
                    <Field value={fields[13]} className={fields[13] ? 'bg-success' : ''} onFieldClick={() => handleClick(13)} id="13" />
                    <Field value={fields[14]} className={fields[14] ? 'bg-success' : ''} onFieldClick={() => handleClick(14)} id="14" />
                </div>
                <div className="board-row">
                    <Field value={fields[15]} className={fields[15] ? 'bg-success' : ''} onFieldClick={() => handleClick(15)} id="15" />
                    <Field value={fields[16]} className={fields[16] ? 'bg-success' : ''} onFieldClick={() => handleClick(16)} id="16" />
                    <Field value={fields[17]} className={fields[17] ? 'bg-success' : ''} onFieldClick={() => handleClick(17)} id="17" />
                    <Field value={fields[18]} className={fields[18] ? 'bg-success' : ''} onFieldClick={() => handleClick(18)} id="18" />
                    <Field value={fields[19]} className={fields[19] ? 'bg-success' : ''} onFieldClick={() => handleClick(19)} id="19" />
                </div>
                <div className="board-row">
                    <Field value={fields[20]} className={fields[20] ? 'bg-success' : ''} onFieldClick={() => handleClick(20)} id="20" />
                    <Field value={fields[21]} className={fields[21] ? 'bg-success' : ''} onFieldClick={() => handleClick(21)} id="21" />
                    <Field value={fields[22]} className={fields[22] ? 'bg-success' : ''} onFieldClick={() => handleClick(22)} id="22" />
                    <Field value={fields[23]} className={fields[23] ? 'bg-success' : ''} onFieldClick={() => handleClick(23)} id="23" />
                    <Field value={fields[24]} className={fields[24] ? 'bg-success' : ''} onFieldClick={() => handleClick(24)} id="24" />
                </div>
            </div>
        </div>
    );
}