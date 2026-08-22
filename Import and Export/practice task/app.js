// ALL IMPORTS 

import { studentId, studentName, studentProfile } from "./student.js";
import enrolledCourse from "./course.js";
import * as details from "./details.js";

console.log(studentProfile());
console.log(enrolledCourse());

console.log(`${enrolledCourse()} studies at ${details.branch} and his batch number is ${details.batch}`);


