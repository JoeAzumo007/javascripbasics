function simpleFunc(){
    console.log('Inside Functions')
}

function add(a,b){
   // var sum = a+b;
    //console.log(sum);

    return(a+b);
}

console.log(add(50,70));


function course(){
    this.topic = "Protector";
    this.duration = "20 hours";
}

var obj_course = new course();
console.log(obj_course.topic+'----'+obj_course.duration);


function student(name,rollNo,age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;

}

var obj_student = new student("Joversky",55);

console.log("Student name is : "+obj_student.name+" and roll number is: "+obj_student.rollNo);

