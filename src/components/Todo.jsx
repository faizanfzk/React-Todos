import { useState } from "react";

import { TodoInput } from "./todoinput";

import css from "./Todo.css"

function Todo(){
  const [TodoList,setTodoList]=useState([]);

const getdata=(todo)=>{

setTodoList([...TodoList,todo]);

}

return (<div>
<TodoInput getdata={getdata} />
{TodoList.map((e)=>(
  <div className="style">{e}<button className="but">Completed</button></div>
))}

</div>)


}
export {Todo};

