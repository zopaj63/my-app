
export default function Message({ isImportant, message }) {
    if (message === "" || message == null) {
        return null;
    }

    const className = isImportant ? "important-message" : "message";

    return <div className={className}>{message}</div>;

}
