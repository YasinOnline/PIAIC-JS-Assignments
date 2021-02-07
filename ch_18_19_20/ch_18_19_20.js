var courses = [];
var num = 1;
for (var i = 0; i <= 4; i++) {
    courses[i] = prompt("Course " + num);
    if (courses.length <= 4) {
        courses.push(courses[i]);
    }
    num = ++num;
}
alert(courses);
for (var i = 0; i <= 4; i++) {
    courses[i] = prompt(courses[i], courses[i]);
}
alert(courses);