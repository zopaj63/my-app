import { getId } from "../helpers";

export default function UniqueId() {
    return <p>My unique ID is: <span style={{ color: "lightGreen" }}>{getId()}</span></p>;
}