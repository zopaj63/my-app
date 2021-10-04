export default function PasswordInput({
    label, onChange, value, inputProps, isShowPassword
}) {

    const type = isShowPassword ? "text" : "password";

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