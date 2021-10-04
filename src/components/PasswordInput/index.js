export default function PasswordInput({
    label, onChange, value, inputProps, isShowPassword
}) {

    //const type = isShowPassword ? "text" : "password";

    let type = "password";
    if (isShowPassword) type = "text";

    return (
        <div className="PasswordInput">
            <label>
                {label}
                <input
                    {...inputProps}
                    type={type}
                    onChange={onChange}
                    value={value} />
            </label>
        </div>
    )
}