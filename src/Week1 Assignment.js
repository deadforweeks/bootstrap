class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor (name, level, students = [])  { //if students param is not passed in, default is empty array
        this.name = name;
        this.level = level;
        this.students = students;  
    }
    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length) {
            // check to see if students email is already in the system
            console.log (`Email address ${studentToRegister.email} is already in ${this.name}. You cannot register at this time.`);
        } else {
       console.log (`Welcome ${studentToRegister.name} registered at ${studentToRegister.email} to our bootcamp course of ${this.name}! `);
          this.students.push(studentToRegister); // adding student to the student array }
        return this.students;    
        }
    }
}
const student1 = new Student ('Lola', 'lola@student.edu', 'Providence');
const student2 = new Student ('Alfie', 'alfie@alfie.com', 'London');
const student3 = new Student ('Sophie', 'soap@stu.edu', 'Dublin');
const studentSameMail = new Student ('Repeat Lola', 'lola@student.edu', 'Poovidence');

const bootcamp1 = new Bootcamp ('Web Development for Silk Road on Darkweb', 'Beginner');
const bootcamp2 = new Bootcamp ('Murder for Hire', 'Intermediate')
const bootcamp3 = new Bootcamp('Commiting Acts of Espionage in 3rd World Nations', 'Expert')
bootcamp1.registerStudent(student1);
bootcamp2.registerStudent(student2);
bootcamp3.registerStudent(student3);
//now passing in a student with a duplicate email that's already in the system:
bootcamp1.registerStudent(studentSameMail)
bootcamp2.registerStudent(studentSameMail)
//^^^however we can see Repeat Lola with the same email address can still join bootcamp2, one that she didn't yet register for
bootcamp2.registerStudent(studentSameMail)