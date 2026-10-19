function data(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if (name === "" || age === "") {
        alert ("Enter you Details");
    } else {
        document.getElementById("output").textContent = "Name: " + name + ", Age: " + age;
    }
}
async function getStudents() {
    try {
        const response = await fetch("/api/students");
        const students = await response.json();

        console.log(students);
    } catch (error) {
        console.log("Error:", error);
    }
}

getStudents();