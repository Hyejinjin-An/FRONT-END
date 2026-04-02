// 비동기 실행 예시

console.log("1. 시작")

// 1초 후 실행
setTimeout( () => {
    console.log("2. 실행")
}, 1000)

console.log("3. 끝")

// 결과
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex09_async\ex01_callback.js'
// 1. 시작
// 3. 끝
// 2. 실행

// function sayHello(name, callback) {
//   console.log("안녕, " + name);
//   callback(); // 콜백 실행
// }

// sayHello("철수", () => {
//   console.log("잘 지내자!")
// })


// 콜백 지옥 ㅋㅋ
setTimeout(() => {
  console.log("1단계 완료");
  setTimeout(() => {
    console.log("2단계 완료");
    setTimeout(() => {
      console.log("3단계 완료");
      setTimeout(() => {
        console.log("4단계 완료");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// setTimeout(()=>{
//   console.log("1단계")
//   setTimeout(()=>{
//     console.log("2단계")
//     setTimeout(()=>{
//       console.log("3단계")
//       setTimeout(()=>{
//         console.log("4단계")
//       }, 500)
//     }, 500)
//   }, 500)
// }, 500)