import Board from "./Board";
import InputForm from "./InputForm";

export default function Index() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <InputForm/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col d-flex justify-content-center mb-5">
                    <Board />
                </div>
            </div>
        </div>
    );
}