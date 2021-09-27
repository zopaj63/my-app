import { useState } from "react";

export default function MessageForm({ onSendMessage }) {
    const [state, setState] = useState({ message: "", title: "", isImportant: false });

    const setTitle = (event) => {
        // drugi (funkcijski) pristup:
        setState((currentState) => {
            return { ...currentState, title: event.target.value };
        });
    };

    const setMessage = (event) => {
        // setState({ ...state, message: event.target.value });
        // prvi pristup, drugi (funkcijski) pristup:
        setState((currentState) => {
            return { ...currentState, message: event.target.value };
        });
    };

    const setIsImportant = (event) => {
        setState({ ...state, isImportant: event.target.checked });
    };

    const sendMessage = (event) => {
        event.preventDefault();
        onSendMessage(state);
    };

    return (
        <form onSubmit={sendMessage}>
            <input type="text" onChange={setMessage} value={state.message} />
            <br />
            <input type="text" onChange={setTitle} value={state.title} />
            <br />
            <label>
                <input
                    type="checkbox"
                    onChange={setIsImportant}
                    checked={state.isImportant}
                    value="isImportant"
                /> Important
            </label>

            <button type="submit">Send</button>
        </form>
    );
}