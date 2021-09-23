import { getRandomColor } from "../random";
import GreetComponent from "./GreetComponent";

export default function UserInfo() {
    const color = getRandomColor();
    return (
        <p>
            My name is <span style={{ color: "lightGreen" }}>{<GreetComponent greeting="Aloha" name="Domagoj" />
            }</span>
            and my color is {" "} <span style={{ color: color }}>{color}</span>
        </p>
    );
}