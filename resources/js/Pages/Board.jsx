import { useState } from "react";
import Field from "./Field";

export default function Board() {
    const [fields, setFields] = useState(Array(25).fill(null));
    let status = '';

    function handleClick(i) {
        console.log(e.target.value);
        const nextFields = fields.slice();
        nextFields[i] = 'X';
        setFields(nextFields);

        if (calculateWinner(fields)) {
            status = 'You won!';
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
            // const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
            // if (fields[a] ===  && fields[b] ===  && fields[c] ===  && fields[d] ===  && fields[e] === ) {
            //     return fields[a];
            // }
        }

        return null;
    }

    return (
        <>
            <p>{status}</p>
            <div className="board">
                <div className="board-row d-flex">
                    <Field value={fields[0]} onFieldClick={() => handleClick(0)} id="0"/>
                    <Field value={fields[1]} onFieldClick={() => handleClick(1)} id="1"/>
                    <Field value={fields[2]} onFieldClick={() => handleClick(2)} id="2"/>
                    <Field value={fields[3]} onFieldClick={() => handleClick(3)} id="3"/>
                    <Field value={fields[4]} onFieldClick={() => handleClick(4)} id="4"/>
                </div>
                <div className="board-row d-flex">
                    <Field value={fields[5]} onFieldClick={() => handleClick(5)} id="5" />
                    <Field value={fields[6]} onFieldClick={() => handleClick(6)} id="6" />
                    <Field value={fields[7]} onFieldClick={() => handleClick(7)} id="7" />
                    <Field value={fields[8]} onFieldClick={() => handleClick(8)} id="8" />
                    <Field value={fields[9]} onFieldClick={() => handleClick(9)} id="9" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fields[10]} onFieldClick={() => handleClick(10)} id="10" />
                    <Field value={fields[11]} onFieldClick={() => handleClick(11)} id="11" />
                    <Field value={fields[12]} onFieldClick={() => handleClick(12)} id="12" />
                    <Field value={fields[13]} onFieldClick={() => handleClick(13)} id="13" />
                    <Field value={fields[14]} onFieldClick={() => handleClick(14)} id="14" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fields[15]} onFieldClick={() => handleClick(15)} id="15" />
                    <Field value={fields[16]} onFieldClick={() => handleClick(16)} id="16" />
                    <Field value={fields[17]} onFieldClick={() => handleClick(17)} id="17" />
                    <Field value={fields[18]} onFieldClick={() => handleClick(18)} id="18" />
                    <Field value={fields[19]} onFieldClick={() => handleClick(19)} id="19" />
                </div>
                <div className="board-row d-flex">
                    <Field value={fields[20]} onFieldClick={() => handleClick(20)} id="20" />
                    <Field value={fields[21]} onFieldClick={() => handleClick(21)} id="21" />
                    <Field value={fields[22]} onFieldClick={() => handleClick(22)} id="22" />
                    <Field value={fields[23]} onFieldClick={() => handleClick(23)} id="23" />
                    <Field value={fields[24]} onFieldClick={() => handleClick(24)} id="24" />
                </div>
            </div>
        </>
    );
}