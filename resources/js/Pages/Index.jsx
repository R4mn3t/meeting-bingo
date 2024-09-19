import Board from "./Board";

export default function Index() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="form-group">
                        <label className="form-label" for="fieldInputs">Werte</label>
                        <input type="text" className="form-control" id="fieldsInputs" name="fieldInputs" aria-label="values"></input>
                        <span className="form-text">Werte für die Felder, kommasepariert</span>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <Board />
                </div>
            </div>
        </div>
    );
}