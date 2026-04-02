import z from "zod";

function validateAndLog(schema, value)
{
    try 
    {
        const result = schema.parse(value);
        console.log(`성공: ${result}`)    
    } 
    catch (error) 
    {
        console.log(`에러: ${error} | 입력값: ${value}`)
    }
}

const nameSchema = z.toString("문자열이어야 해 !!")

validateAndLog(nameSchema, "abc");