const numberList = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const newNumber = 4;

// numberList.push(newNumber);

// const newNumberList = [numberList[0], numberList[1], numberList[2], newNumber];
const newNumberList = [...numberList, newNumber];
// newNumberList = [newNumber]
console.log(newNumberList);

const person = {
    name: 'Scott',
    age: 36
}

const newPerson = {
    ...person,
    age: person.age + 1,
    birthday: '2-11-83'
}

console.table(person);
console.table(newPerson);