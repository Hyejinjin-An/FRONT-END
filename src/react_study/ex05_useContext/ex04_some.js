const nums = [1, 3, 5, 7]
// console.log(nums.some( (n) => { n % 2 === 0} ))
// console.log(nums.some( (n) => {n < 4} ))
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex05_useContext\ex04_some.js'
// false
// false

const user = [
    {id:"id1", pw:"1234"},
    {id:"id2", pw:"5678"}
]

const inputId = 'id1';
const inputPw = '1234';

// basic
const isValid = user.some( (u) => {
    return ( u.id === inputId ) && (u.pw === inputPw)
})

// distructuring
const isValidDis = user.some( ({id, pw}) => {
    return ( id === inputId ) && (pw === inputPw)
})

// console.log(isValid)
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex05_useContext\ex04_some.js'
// true

// 연습문제 1
const numbers = [2, 4,6, 8];

console.log(numbers.some( (u) => {u % 2 === 1} ))
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex05_useContext\ex04_some.js'
// false

// 연습문제 2
const members = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

const inValidation = members.some( ({name, age}) => {
    return (
        age >= 25
    )
})
console.log(members.some( (members) => members.age >= 25 ))
console.log(inValidation)
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex05_useContext\ex04_some.js'
// false
// false
// false
