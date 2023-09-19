
import { StudentService } from "../student/student.service";

console.log("students in scool-data.ts!!!!",StudentService)

export const obj = [
  {
    school: {
      name: 'school 1',

      place: 'kochi',

      address: 'international public school, kochi',
    },

    teachers: [
      { id: 10081, name: 'Jane', subject: 'Malayalam' },

      { id: 10083, name: 'Fathma', subject: 'Hindi' },

      { id: 10084, name: 'Maria', subject: 'English' },

      { id: 10087, name: 'April', subject: 'Sanskrit' },
    ],

    students: [
      { id: 5126, name: 'Kumar', division: 'B', teacherId: 10083 },

      { id: 5123, name: 'Raj', division: 'A', teacherId: 10081 },

      { id: 5124, name: 'Farooq', division: 'B', teacherId: 10084 },

      { id: 5121, name: 'Umar', division: 'C', teacherId: 10087 },

      { id: 5127, name: 'Sarath', division: 'C', teacherId: 10083 },

      { id: 5133, name: 'Lakshman', division: 'C', teacherId: 10083 },

      { id: 5141, name: 'Shana', division: 'E', teacherId: 10087 },

      { id: 5145, name: 'Mary', division: 'D', teacherId: 10083 },

      { id: 5155, name: 'Teena', division: 'E', teacherId: 10087 },

      { id: 5151, name: 'July', division: 'A', teacherId: 10081 },

      { id: 5160, name: 'Akshay', division: 'A', teacherId: 10081 },

      { id: 5166, name: 'Dev', division: 'E', teacherId: 10084 },

      { id: 5163, name: 'Ayisha', division: 'D', teacherId: 10081 },

      { id: 5171, name: 'Rajiv', division: 'B', teacherId: 10083 },

      { id: 5188, name: 'Siya', division: 'B', teacherId: 10081 },

      { id: 5187, name: 'Sreerag', division: 'B', teacherId: 10084 },
    ],
  },
];
