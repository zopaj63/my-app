import { getRandomColor, getRandomName } from "../random";
import GreetComponent from "./GreetComponent";

export default function UserInfo() {
    const color = getRandomColor();
    return (
        <GreetComponent greeting="Hello" name={getRandomName()}>
            Color: <span style={{ color: color }}>{color}</span>
        </GreetComponent>
    );
}