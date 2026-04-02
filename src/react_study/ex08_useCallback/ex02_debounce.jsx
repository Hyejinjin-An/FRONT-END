import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

export default function SearchBox() 
{
  const [text, setText] = useState("");
  const debouncedSearch = useCallback(
    debounce((value)=> {
      console.log("API 요청: ", value)
    }, 500),[]
  )
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  }
  return <input type="text" onChange={handleChange}/>
}