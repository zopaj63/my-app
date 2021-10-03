export default function TextInput({
    label, onChange, value, inputProps
}) {
    return (
        <div className="TextInput">
            <label>
                {label}
                <input
                    {...inputProps}
                    type="password"
                    onChange={onChange}
                    value={value} />
            </label>
        </div>
    )
}