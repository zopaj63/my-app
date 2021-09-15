import * as dayjs from "dayjs";
import { nanoid } from "nanoid";


export function getCurrentDate() {
    return dayjs().format('MMMM/DD/YYYY, HH:mm:ss');
}

export function getID() {
    return nanoid();
}