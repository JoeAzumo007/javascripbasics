//var courses = ["selenium","Protractor","Appium","Jmeter"];
//var courses = new Array("selenium","Protractor","Appium","Jmeter");

var courses = new Array(4);
courses[0] = "selenium";
courses[1] = "Protractor";
courses[2] = "Appium";
courses[3] = "Jmeter";

console.log(courses[1]);
console.log(courses.length);
console.log(courses);

/*for(var i=0;i<courses.length;i++){
    console.log(courses[i]);
}*/

for(var course in courses){
    console.log(courses[course]);
}