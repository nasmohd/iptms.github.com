var student_records = new Array();
var i = 0;
function addStudent(){
    var fname = document.getElementById ('fname');
    var lname = document.getElementById ('lname');
    var course = document.getElementById ('course');
    
    //Only 1000 students are considered
    while (i <= 1000){
        s = i+1
        student_records[i][0] = s;
        student_records[i][1] = fname.value;
        student_records[i][2] = lname.value;
        student_records[i][3] = course.value;
        
    i = i+1;
}
    
}


function removeStudent(){
    var fname = document.getElementById ('fname');
    var lname = document.getElementById ('lname');
    var course = document.getElementById ('course');
    
    
}
