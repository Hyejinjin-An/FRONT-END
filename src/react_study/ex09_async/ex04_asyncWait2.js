async function step(msg) 
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (msg.startsWith("오")) 
        {
            console.log(msg);
            resolve(msg);
        } else {
            reject("실패: '" + msg + "' 는 '오'로 시작하지 않음");
        }
    }, 1000);
  });
}

async function processAll() {
  try 
  {
    await Promise.all([
      step("오! 1단계"),
      step("아! 2단계"),
      step("오! 3단계"),
    ]);
    console.log("모든 단계 성공!");
  } 
  catch (err) 
  {
    console.log("에러:", err);
  } 
  finally 
  {
    console.log("processAll 종료");
  }
}
processAll();


async function processAllSettled() {
  const res = await Promise.allSettled([
    step("오! 1단계"),
    step("아! 2단계", 2000),
    step("오! 3단계")
  ]);
  res.forEach((r,i) => {
    if (r.status === "fulfilled")
    {
      console.log(`${i+1}단계: 성공 (value=${r.value})`);
      console.log(`${i+1}단계: reason (reason=${r.reason})`);
    } 
    else 
      { // "rejected"
      console.log(`${i + 1}단계: value (value=${r.value})`);
      console.log(`${i + 1}단계: 실패 (reason=${r.reason})`);
    }
  })
  console.log("모든 단계 종료 (부분 성공 허용)");
}
processAllSettled();


async function processAny() 
{
  try 
  {
    const result = await Promise.any([
      step("엥! 1단계"), // 실패
      step("오! 2단계", 1000), // 성공 (value는 undefined)
      step("오! 3단계", 500), // 성공
    ]);
    console.log("가장 먼저 성공한 결과 value:", result); // undefined
  } 
  catch (err) 
  {
    console.log("모두 실패:", err);
  } 
  finally 
  {
    console.log("processAny 종료");
  }
}
processAny();


async function processRace() 
{
  try 
  {
    const winner = await Promise.race([
      step2("엥! 1단계"), // 실패
      step2("오! 2단계", 1000), // 성공 (value는 undefined)
      step2("오! 3단계", 500), // 성공
    ])
    console.log("가장 먼저 끝난 결과:", winner);  
  } 
  catch (err) 
  {
    console.log("race 에러:", err);
  } 
  finally 
  {
    console.log("processRace 종료");
  }
}
processRace();
