export default function Field({ value, onFieldClick, id }) {
    return (
        <button className={"field" + (value ? ' field-active' : '')} onClick={onFieldClick} id={id}>
            {value}
        </button>
    );
}