export function Input({ label = "Label", value = "value", onInputChange = null, id, autoFocus = false }) {
    const handleInputChange = ({currentTarget}) => {
        if (onInputChange) {
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }
    return (
        <>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor={id}
                    className="text-sm"
                >
                    { label }
                </label>
                <input 
                    autoFocus={autoFocus}
                    type="text" 
                    name="inpt" 
                    id={id}  
                    className="border outline-none p-2 rounded-lg"
                    value={value}
                    onChange={handleInputChange}
                    maxLength={60}
                />
                <div
                    className="flex justify-end"
                >
                    <span 
                        className={value.length <= 40 ? 
                            "text-green-900" : 
                            value.length <= 50 ? 
                            "text-yellow-600" : 
                            "text-red-600"}
                    >
                        { value.length }/60
                    </span>
                </div>
            </div>
        </>
    );
}
