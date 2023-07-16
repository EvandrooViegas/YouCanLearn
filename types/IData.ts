import { ICourse } from "./ICourse";
import iDev from "./IDev";
import { IQuestion } from "./IQuestion";

export default interface Data {
    email: string;
    emailSubject: string;
    courses: ICourse[]
    questions: IQuestion[];
    devs: iDev[]
    pages: {
        about: {
            title: string
            text: string
        }
    }
}