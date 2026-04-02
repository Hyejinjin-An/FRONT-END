// 2026.03.19
// 전개연산자 [...x]

const arr1 = [1,2,3];
const arr2 = [4,5, ...arr1, 6];
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex02_useState\ex02_spreadOperation.js'
// [ 4, 5, 1, 2, 3, 6 ]
//console.log(arr2);

const obj1 = {a:1, b:2}
const obj2 = {...obj1, c:3}
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex02_useState\ex02_spreadOperation.js'
// [ 4, 5, 1, 2, 3, 6 ]
// { a: 1, b: 2, c: 3 }
//console.log(obj2);

const obj3 = {...obj2, b:20}
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex02_useState\ex02_spreadOperation.js'
// [ 4, 5, 1, 2, 3, 6 ]
// { a: 1, b: 2, c: 3 }
// { a: 1, b: 20, c: 3 }
//console.log(obj3)

const obj4 = {b:20,...obj2}
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex02_useState\ex02_spreadOperation.js'
// [ 4, 5, 1, 2, 3, 6 ]
// { a: 1, b: 2, c: 3 }
// { a: 1, b: 20, c: 3 }
// { b: 2, a: 1, c: 3 }
//console.log(obj4)


// 연습문제
// 1. 배열 합치기
const fruits1 = ["apple", "banana"]
const fruits2 = ["orange", "grape"]
const fruits = [...fruits1, ...fruits2]
console.log(fruits);

// 2. 객체 합치기
const user = { name: "Tom", age: 20 }
const job = { title: "Developer", company: "Google"}
const person = { ...user, ...job}
console.log(person);


// map 
// key value 를 나눠서 보여주는? entries();
const likes = {
    "왕과 사는 남자":20,
    "주술회전":30,
    "나루토": 14 
}

const likes_arr = Object.entries(likes);
console.log(likes_arr);
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex02_useState\ex02_spreadOperation.js'
// [ 'apple', 'banana', 'orange', 'grape' ]
// { name: 'Tom', age: 20, title: 'Developer', company: 'Google' }
// [ [ '왕과 사는 남자', 20 ], [ '주술회전', 30 ], [ '나루토', 14 ] ]

export default function TitleList() {
    return (
        <>
            {Object.entries(likes).map(([title, thumbsup], index) => {
                return <Title key={index} title={title} thumbsup={thumbsup} />
            })}
            
            {Object.entries(likes).map((value, index) => {
                return <Title key={index} title={value[0]} thumbsup={value[1]} />
            })}
        </>
    )
}


// filter
const filter = [1,2,3,4,5].filter((x)=>{return x > 3})
console.log(filter)