export default function Field({ value, onFieldClick }) {
    return (
        <button className={"field flex-shrink " + (value ? 'field-active' : '')} onClick={onFieldClick} id={id}>
             {value} 
        </button>
    );
}