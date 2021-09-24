import { useState } from "react";

export default function MessageForm({ onSendMessage }) {
    const [state, setState] = useState({ message: "Poruka" });

    const setMessage = (event) => {
        setState({ message: event.target.value });
    }

    const sendMessage = (event) => {
        // console.log(state);
        event.preventDefault();
        onSendMessage(state);
    };

    return (
        <form onSubmit={sendMessage}>
            <input type="text" onChange={setMessage} value={state.message} />
            <button type="submit">Send</button>
        </form>
    );
}