import { getRandomColor, getRandomName } from "../random";

export default function UserInfo() {
    const color = getRandomColor();
    return (
        <p>My name is <span style={{ color: "lightGreen" }}>{getRandomName()}</span> and my color is {" "}
            <span style={{ color: color }}>{color}</span>
        </p>
    );
}