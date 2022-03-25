// Script

var students = new Map();

///set values

students.set("Abdelrahman", {
    Grades: [
        { Coursename: "JAVA_SCRIPT", Grade: "Excellent" },
        { Coursename: "ADVANCED_JS", Grade: "GOOD" },
        { Coursename: "ES6", Grade: "VERYGOOD" }
    ]
});

students.set("Hussien", {
    Grades: [
        { Coursename: "JAVA_SCRIPT", Grade: "PASS" },
        { Coursename: "ADVANCED_JS", Grade: "VERYGOOD" },
        { Coursename: "ES6", Grade: "EXCELLENT" }
    ]
});

students.set("Zakaria", {
    Grades: [
        { Coursename: "JAVA_SCRIPT", Grade: "GOOD" },
        { Coursename: "ADVANCED_JS", Grade: "VERYGOOD" },
        { Coursename: "ES6", Grade: "GOOD" }
    ]
});

//Access dropdownlist Menu
var SelMenu = document.getElementById("stu_names");

//Part A Loop the map
students.forEach((stu_info, name) => {
    let stu_grades = stu_info.Grades.map((obj) => obj.Grade);
    let option = document.getElementById("opt");
    option.innerText = name;
    option.value = stu_grades.join(",");
    SelMenu.appendChild(option);
});


//Append On Body, The Values OF Each Student
let output = document.createElement("h1");
document.body.appendChild(output);
output.innerText = SelMenu.value;
SelMenu.onchange = function () {
    output.innerText = this.value;
};