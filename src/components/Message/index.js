import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate";
import "./Message.css";

export default function Message({ isImportant, message, title }) {
    if (message === "" || message == null) {
        return null;
    }

    //const className = isImportant ? "important-message" : "message";
    let className = "message";
    if (isImportant) className += " message--important";

    return (<div className={className}>
        <div>
            {"Title: "}{title}
        </div>

        <div>
            <UserInfo />
        </div>

        <div>
            <UniqueId />
        </div>

        <div>{"Message: "}{message}</div>

        <div>
            <CurrentDate />
        </div>

    </div>
    );

}
