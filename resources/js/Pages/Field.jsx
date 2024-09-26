export default function Field({ value, marked, onFieldClick, id }) {
    return (
        <button className={"field" + (marked ? ' bg-success' : '')} onClick={onFieldClick} id={id}>
            <span>{value}</span>
        </button>
    );
}