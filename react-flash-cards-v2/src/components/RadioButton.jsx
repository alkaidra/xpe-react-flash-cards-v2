import { useId } from "../hooks/useId";


export function RadioButton({ name, children, checked, onClick }) {
    const { id } = useId();

    return (
        <div className="flex gap-4">
            <input 
                type="radio" 
                name={ name } 
                id={ id } 
                checked={checked} 
                onChange={onClick} 
                className="cursor-pointer"
            />
            <label 
                htmlFor={ id }
                className="cursor-pointer"
            >
                { children }
            </label>
        </div>
    );
}
