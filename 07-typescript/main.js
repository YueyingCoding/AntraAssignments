var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// static type
var str = "111";
//pre -compiling type check
var Student = /** @class */ (function () {
    function Student() {
        this.schoolID = "000000";
        this.major = "General Engineering";
        this.GPA = 3;
    }
    return Student;
}());
var Engineering = /** @class */ (function () {
    function Engineering() {
        this.building = "Engineer";
    }
    return Engineering;
}());
var EngineerStudents = /** @class */ (function (_super) {
    __extends(EngineerStudents, _super);
    function EngineerStudents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tutor = "JR";
        return _this;
    }
    return EngineerStudents;
}(Student));
var freshmanEngineer = new EngineerStudents();
console.log(freshmanEngineer.major);
var Freshman = /** @class */ (function () {
    function Freshman() {
        this.name = "JR";
        this.age = 18;
        this.score = 60;
        this.id = 1;
    }
    Freshman.prototype.getName = function (name, age) {
        return name;
    };
    return Freshman;
}());
////////////////////////////////////////////////////
// class, abstract class, interface
var newStudent = {
    score: 2,
    id: 2
};
var developer = {
    job: "frontend",
    task: "create interface"
};
var newStudentGrade = "2";
var StudentGrade;
(function (StudentGrade) {
    StudentGrade[StudentGrade["freshman"] = 0] = "freshman";
    StudentGrade[StudentGrade["sophomore"] = 1] = "sophomore";
    StudentGrade[StudentGrade["junior"] = 2] = "junior";
    StudentGrade[StudentGrade["senior"] = 3] = "senior";
})(StudentGrade || (StudentGrade = {}));
console.log(StudentGrade.freshman);
