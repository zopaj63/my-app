import { getCurrentDate } from "../helpers";

export default function CurrentDate() {
    return <p>Today is <span style={{ color: "lightGreen" }}>{getCurrentDate()}</span></p>;
}