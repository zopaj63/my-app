import MessageForm from "../MessageForm";
import { useState } from "react";

export default function Message() {
    const [messageObject, setMessageObject] = useState(null);
    return (
        {
            messageObject !== null && (
            <div
                className={
                    messageObject.isImportant ? "important-message" : "message"
                }
            >
                {messageObject.message}
            </div>
        )
    });


<MessageForm onSendMessage={setMessageObject} />

}
