import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import FormButton from "../FormButton";
import "./MessageForm.css";

export default function MessageForm({ onSendMessage }) {
    const [state, setState] = useState({
        message: "",
        isImportant: false,
        title: "",
    });

    const setMessage = (event) => {
        setState((currentState) => {
            return { ...currentState, message: event.target.value };
        });
    };

    const setTitle = (event) => {
        setState((currentState) => {
            return { ...currentState, title: event.target.value };
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
        <form className="MessageForm" onSubmit={sendMessage}>
            <div className="MessageForm__row">
                <TextInput
                    label={<div>Title:</div>}
                    onChange={setTitle}
                    value={state.title}
                    inputProps={{
                        name: "title", id: "title", placeholder: "Title"
                    }}
                />
            </div>

            <div className="MessageForm__row">
                <input
                    type="text"
                    onChange={setMessage}
                    value={state.message}
                    placeholder="Message"
                />
            </div>

            <div className="MessageForm__row">
                <Checkbox
                    label="Important"
                    onChange={setIsImportant}
                    value="isImportant"
                    checked={state.isImportant}
                />
            </div>

            <div className="MessageForm__row">
                <FormButton type="submit">Send</FormButton>
            </div>
        </form>
    );
}

MessageForm.propTypes = {
    onSendMessage: PropTypes.func,
};
