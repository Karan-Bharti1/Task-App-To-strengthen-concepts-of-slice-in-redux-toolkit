import { useDispatch, useSelector } from "react-redux";
import { fetchTaskData, statusButtonPressed } from "./tasksSlice";
import { useEffect } from "react";

const Tasks=()=>{
    const dispatch=useDispatch()
const tasks=useSelector(state=>{
    return state.tasks
})
useEffect(()=>
{dispatch(fetchTaskData())},[dispatch])
return(<>
{tasks.tasks?.map((chore,index)=>(   <div key={chore.id || index}>
          <h2>{chore.date}</h2>
          <ul>
            {chore.tasks.map((t, i) => (
              <li key={i}><p>{t.task}{"  "}
              <button onClick={()=>dispatch(statusButtonPressed({date:chore.date,id:t.taskId}))}>{t.taskStatus?"Completed":"Pending"}</button> </p></li>
             
            ))}
          </ul>
        </div>))}
</>)
}
export default Tasks;