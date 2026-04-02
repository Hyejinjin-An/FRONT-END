function getMessage(status)
{
  switch(status) 
  {
    case 'success': 
      return '성공';
    case 'error':
      return '실패';
    default:
      return 'unknown';
  }
}

// console.log(getMessage('success')) // 성공
// console.log(getMessage('error')) // 실패
// console.log(getMessage('')) // unknown

function getMessage2(status)
{
  let result;
  switch(status) 
  {
    case 'success':
      result = '성공';
      break;
    case 'error':
      result = '실패';
      break;
    default:
      result = 'unknown';
  }
  return result
}

// console.log(getMessage2('success'))
// console.log(getMessage2('error'))
// console.log(getMessage2(''))


// 연습문제
// 도 개 걸 윷 모
function playYut()
{
    // if(!num)
    if(num === undefined)
    {
        const random = Math.random() * 5
        const num = Math.floor(random)
        console.log(`random : ${random.toFixed(3)}, num: ${num}`)
    }

    switch(num)
    {
        case 0:
            return "윷";
        case 1:
            return "도";
        case 2:
            return "개";
        case 3:
            return "걸";
        case 4:
            return "모";
        default:
            return "ERROR"
    }
}

console.log(playYut())
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex06_useReducer\ex01_switch.js'
// random : 4.831, num: 4
// 모