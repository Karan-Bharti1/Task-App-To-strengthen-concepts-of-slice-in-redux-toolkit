import { useSelector } from "react-redux";

const Tasks=()=>{
const tasks=useSelector(state=>{
    return state.tasks
})
console.log(tasks)
return(<>
{tasks.tasks.map((task,index)=>(   <div key={task.id || index}>
          <h2>{task.dated}</h2>
          <ul>
            {task.taskData.map((t, i) => (
              <li key={i}><p>{t.title}</p>
              <p>Status: {t.status}</p></li>

            ))}
          </ul>
        </div>))}
</>)
}
export default Tasks;