'use strict';

function countToOneThousand() {
    let myCount = 1;
    do {
        console.log(myCount);
        myCount++;
    } while (myCount<=1000);
}
//Item #3 birthDate
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

for (const key in person) {
    //I'm using array.length - 1 as the index for bday
    //odd numbers have no reamaineder, so modulus confirms
    if(person.birthDate[person.birthDate.length-1]%2!==0){
        console.log(person.birthDate);
        //no need to continue; instructions say value associtate with key "birthDate"
        //so break out of the loop unless you want duplicates
        break;
    }

}
//Item #4 (arrayOfPersons)
const arrayOfPersons = [
    {firstName:'mitchell',lastName:'jolivette',birthDate:'08-04-1972',gender:'male'},
    {firstName:'hooper',lastName:'hopper',birthDate:'Jan 2, 1970',gender:'female'},
    {firstName:'bubbie',lastName:'licious',birthDate:'December 13. 2018',gender:'male'},
    {firstName:'bossy',lastName:'human',birthDate:'May 10, 1998',gender:'non-binary'},
    {firstName:'ru',lastName:'paul',birthDate:'Novemeber 17, 1960',gender:'performer'}
]
// Item #5
console.log("================Item 5 =================");
arrayOfPersons.map(function(e,i,a){//e=element, i=index,a=array
    console.log(e.firstName, e.lastName, "was born on ", e.birthDate);
});

//Item #6 filter
console.log("================Item 6 =================");
const allMales = arrayOfPersons.filter(function(e,i,a){
    return (e.gender==='male')?true:false;
})
console.log(allMales);

//Item #7
console.log("================Item 7 =================");

const oldFolks = arrayOfPersons.filter(function(e,i,a){
    const myDateMilliseconds = Date.parse('Jan 1, 1990');
    const theDate = Date.parse(e.birthDate);

    return (myDateMilliseconds<theDate)?true:false;
})

console.log(oldFolks);
