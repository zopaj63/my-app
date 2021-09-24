
export default function MessageForm() {
    const sendMessage = (event) => {
        console.log(event);
        event.preventDefault();
    };

    return (
        <form>
            <input type="text" />
            <button type="submit">Send</button>
        </form>
    );
}