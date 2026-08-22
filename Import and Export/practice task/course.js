// Default Export

import { studentProfile } from "./student.js";

function enrolledCourse(){
    return`${studentProfile()} is enrolled in Web Development Course`
}

export default enrolledCourse;