export default function PasswordInput({
    label, onChange, value, inputProps
}) {
    return (
        <div className="PasswordInput">
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