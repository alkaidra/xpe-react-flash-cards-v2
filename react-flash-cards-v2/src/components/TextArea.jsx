export function TextArea({ label = "Label", value = "value", onTextAreaChange = null, id, autoFocus = false }) {
    const handleTextAreaChange = ({currentTarget}) => {
        if (onTextAreaChange) {
            const newValue = currentTarget.value;
            onTextAreaChange(newValue);
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
                <textarea 
                    name="txt" 
                    id={id} 
                    cols="30" 
                    rows="4"
                    className="border outline-none p-2 rounded-lg"
                    maxLength={230}
                    value={value}
                    autoFocus={autoFocus}
                    onChange={handleTextAreaChange}
                ></textarea>
                <div
                    className="flex justify-end"
                >
                    <span 
                        className={value.length <= 150 ? 
                            "text-green-900" : 
                            value.length <= 200 ? 
                            "text-yellow-600" : 
                            "text-red-600"}
                    >
                        { value.length }/230
                    </span>
                </div>
            </div>
        </>
    );
}
