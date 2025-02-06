import { useDispatch, useSelector } from "react-redux";
import { statusButtonPressed } from "./tasksSlice";

const Tasks=()=>{
    const dispatch=useDispatch()
const tasks=useSelector(state=>{
    return state.tasks
})
console.log(tasks)
return(<>
{tasks.tasks.map((task,index)=>(   <div key={task.id || index}>
          <h2>{task.dated}</h2>
          <ul>
            {task.taskData.map((t, i) => (
              <li key={i}><p>{t.title}{"  "}
              <button onClick={()=>dispatch(statusButtonPressed({date:task.dated,id:t.taskId}))}>{t.status?"Completed":"Pending"}</button> </p></li>
             
            ))}
          </ul>
        </div>))}
</>)
}
export default Tasks;