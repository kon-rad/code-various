
// Closure Defined
// A closure is a function that makes use of variables
// defined in outer functions that have previously 
// returned

function outer() {
	var data = "closures are ";
	return function inner() {
		var innerData = "awesome";
		return data + innerData;
	}
}

outer()() // "closures are awesome"

// Another example
function outerFn() {
	var data = "something from outer";
	return function innerFn() {
		var innerData = "something from inner";
		return data + " " + innerData;
	}
}

// When to use a closure? Private Variables!
// In other languages there exists support
// for variables that can not be modified externally
// we call those private variables, but in js
// we don't have that built in. No worries - closeures 
// can help!

function counter() {
	var count = 0;
	return function() {
		return ++count;
	}
}

var c = counter();
c() // returns 1
c() // returns 2
c() // returns 3
// count is private, no one can chane it
var c2() == counter();
c2() // returns 1
c2() // returns 2 

c() // returns 4 - This is not affected by c2()!

// ANOTHER EXAMPLE

function classRoom() {
	var instructors = ["Colt", "Ellie"]
	return {
		getInstructors: function(){
			return instructors;
		}, 
		addInstructor: function(instructor){
			instructors.push(instructor);
			return instructors;
		}
	}
}

course1 = classRoom()
course1.getInstructors() // ["Elie', "Colt"]
course1.addInstructor("Ian") // ["Elie", "Colt", "Ian"]

course2 = classRoom()
course2.getInstructors() // ["Elie", "Colt"] - not affected by course1

// we have no access to the instructors variable, which makes it private

