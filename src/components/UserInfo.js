import { getRandomName } from "../random";
import { getRandomColor } from "../random";

export default function UserInfo() {
    return <p>Tvoje ime je: {getRandomName()} , a boja: {getRandomColor()}</p>;
}