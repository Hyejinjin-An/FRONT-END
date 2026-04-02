// resolve와 reject는 성공, 실패로 보낼 수 있다?
const myPromise = new Promise( (resolve, reject) => {
  setTimeout( ()=> {
    // resolve("작업 성공!");
    reject("작업 실패")
  }, 1000)
});

myPromise.then( (result) => {
  console.log("결과: ", result);
}).catch( (error) => {
  console.error("에러: ", error);
});

// 콜백지옥 해결
// 1초 후에 resolve하는 함수
function step(msg) 
{
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(msg);
//       resolve();
//     }, 1000);
//   });
  return new Promise((reject) => {
    setTimeout(() => {
      if(msg.startWith("오"))
      {
        resolve();
      }
      else
      {
        reject()
      }
    }, 1000);
  });
}

// 체이닝으로 순서대로 실행
step("1단계 완료")
  .then(() => step("2단계 완료"))
  .then(() => step("3단계 완료"))
  .catch((err) => console.error("에러:", err));
