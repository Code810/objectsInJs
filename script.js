
// const group={
//     id:1,
//     name:"P518",
//     groupSize: 3,
//     students:[],
//     addStudent: function (student){
//         if (this.students.length<this.groupSize) {
//             this.students.push(student)
//             console.log("elave edildi");
//         }
//         else{
//             console.log("qrup doludur");
//         }
//     },
//     findStudent: function(id){
//         return this.students.find(student=>student.id==id)
//     },
//     removeStudent: function(id){
// this.students=this.students.filter(student=>student.id!=id)
//     },
//     findAll: function(){
//         return this.students;
//     },
//     updateStudents: function(id,name,surname,age){
//         let student=this.students.find(stu=>stu.id==id)
//         if (student) {
//             student.name= name ?? student.name;
//             student.surname=surname ?? student.surname;
//             student.age= age ?? student.age ;
//             console.log("update edildi");
//             console.log(student);
//         }
//         else{
//             console.log("student tapilmadi");
//         }
//     }
// }

// const student1={
//     id:1,
//     name:"Nadir",
//     surname: "Shirinbayli",
//     age:32,
// }
// const student2={
//     id:2,
//     name:"Nesib",
//     surname: "Ixtiyarli",
//     age:32,
// }
// const student3={
//     id:3,
//     name:"Islam",
//     surname: "Adisirinli",
//     age:22,
// }
// const student4={
//     id:4,
//     name:"Tair",
//     surname: "Aslanli",
//     age:24,
// }

// group.addStudent(student1);
// group.addStudent(student2);
// group.addStudent(student3);
// group.addStudent(student4);
// console.log(group.findStudent(2));
// group.removeStudent(3);
// console.log(group.findAll());
// group.updateStudents(2,"Revan");
// console.log(group.findAll());




//! hometasks 
//? task1 custom
// let array1=[11,1,4,8,5,6,9,3];

// function sortArrayCustom(array){
//     let num=0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//           if (array[i]>array[j]) {
//               num=array[i];
//               array[i]=array[j];
//               array[j]=num;
//           }
//         }
//       }
//       return array;
// }
// console.log(sortArrayCustom(array1));

//* task1 bestpractice

// let array2=[11,1,4,8,5,6,9,3];
// array2.sort(function(a, b){return b-a});
// console.log(array2);


//? task2 

// let sentence="salam sagol necesen"


// function getWordsCharsCount(sentence){
// return sentence.split(" ").map(word=>word.length);
// }

// console.log(getWordsCharsCount(sentence));

//?task3

const companies=[
{name: "Company One", category: "Finance", start:1981, end: 2003},
{name: "Company Two", category: "Retail", start:1992, end: 2008},
{name: "Company Three", category: "Auto", start:1999, end: 2007},
{name: "Company Four", category: "Retail", start:1989, end: 2010},
{name: "Company Five", category: "Technology", start:2009, end: 2014},
{name: "Company Six", category: "Finance", start:1987, end: 2010},
{name: "Company Seven", category: "Auto", start:1986, end: 1996},
{name: "Company Eight", category: "Technology", start:2011, end: 2016},
{name: "Company Nine", category: "Retail", start:1981, end: 1989},
]
const ages=[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
companies.forEach(company => {
    console.log(company);
});

let canDrink=ages.filter(age=>age>21);
console.log(canDrink);

let eightsCompanies= companies.filter(company=> company.start>=1980&& company.end<=1990);
console.log(eightsCompanies);

let lastedTenYears= companies.filter(company=>  company.end-company.start>=10);
console.log(lastedTenYears);

const companyNames=companies.map(company=>company.name);
console.log(companyNames);
