
const class07Students = [];
	function addStudentToClass(studentName) {
	
	if (class07Students.length <= 6 || studentName === "Queen"){
	return class07Students.push(studentName);
	}

	else if(class07Students.length <6){
	return "Please Enter more students"
	}
	
	else if( class07Students.length === 6 && studentName !== "Queen"){
		return "No more students can be added to class 07"
	}

	else if (class07Students.includes(studentName)){
		return "student ${studentName} exists already"
	}

		
}


addStudentToClass("Anders");
addStudentToClass("Heidi");
addStudentToClass("Kamran");
addStudentToClass("Touseef");
addStudentToClass("Najmi");
addStudentToClass("Gitte");
addStudentToClass("Queen");

console.log(class07Students);
console.log(class07Students.length);


	







