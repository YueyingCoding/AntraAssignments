// static type
let str : string = "111";
//pre -compiling type check

class Student {
    schoolID: string = "000000";
    major: string = "General Engineering";
    GPA: number = 3;
}

abstract class Engineering {
    course: string;
    building: string = "Engineer";
}

interface Person {
    //don't initialize
    name: string;
    age: number;
    getName(name: string, age: number): string;
}


interface CollegeStudent {
    score: number;
    id: number;
}

class EngineerStudents extends Student {
    tutor: string = "JR";
}

interface CollegeStudentList {
    Scorelist : CollegeStudent[];
}

let freshmanEngineer = new EngineerStudents();
console.log(freshmanEngineer.major);

class Freshman implements Person, CollegeStudent {
    name: string = "JR";
    age: number = 18;
    score: number = 60;
    id: number = 1;
    getName(name: string, age: number): string {
        return name;
    }
}

////////////////////////////////////////////////////
// class, abstract class, interface
let newStudent: CollegeStudent = {
    score: 2,
    id: 2
}

type Grade = "1" | "2" | "3";
type newGrade = string | number | boolean;
type latestGrade = "1" | string;

type BusinessPeople = {
    job: string;
}

type DevPeople = {
    task: string;
}

type AgileTeamMember = BusinessPeople & DevPeople

let developer: AgileTeamMember = {
    job: "frontend",
    task: "create interface"
}

let newStudentGrade: Grade = "2";

type tup = [string, number]

enum StudentGrade {
    freshman,
    sophomore,
    junior,
    senior
}

console.log(StudentGrade.freshman);
