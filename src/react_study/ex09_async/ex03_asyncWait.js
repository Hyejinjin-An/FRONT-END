function waitOneSec() {
  return new Promise( (resolve)=> {
    setTimeout( ()=> resolve("1초 후 완료"), 1000);
  });
}

// 함수 return 값이 Promise인 경우 await 를 해당 함수 앞에 붙여줘야함.
// 함수 내 실행 함수가 await가 걸려있으면 해당 전체함수명 앞에 async를 붙여줘야 함.
async function run() {
  console.log("시작");
  const result = await waitOneSec(); // Promise객체 앞에 await
  console.log(result);
  console.log('끝')
}

// run()

async function step(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msg.startsWith("오")) 
        {
            console.log(msg);
            resolve();
        } else {
            reject("실패: '" + msg + "' 는 '오'로 시작하지 않음");
        }
    }, 1000);
  });
}

async function processSteps()
{
    try 
    {
        await step("오 1단계")
        await step("앗 2단계")
        await step("오 3단계")
        await step("엥 4단계")
    } 
    catch (error) 
    {
        console.log("에러:", err)
    }
    finally
    {
        console.log("finally는 에러 여부와 상관없이 실행")
    }
}