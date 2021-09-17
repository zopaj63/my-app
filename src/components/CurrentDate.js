import { getCurrentDate } from "../helpers";

export default function CurrentDate() {
    return <p>Danas je {getCurrentDate()}</p>;
}