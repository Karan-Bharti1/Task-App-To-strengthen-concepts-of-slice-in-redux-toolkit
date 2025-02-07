import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTaskData=createAsyncThunk("tasks/fetchTasks",async()=>{
    const response=await axios.get('https://task-list-hw-server-student-neog-ca.replit.app/tasks')
    console.log(response)
    return response.data
})
 export const tasksSlice=createSlice({
name:"tasks",
initialState:{
    tasks:[],
    status:"idle",
    error:null
},
reducers:{
    statusButtonPressed:(state,action)=>{
const dateIndex=state.tasks.findIndex(task=>task.date===action.payload.date)
const taskIndex=state.tasks[dateIndex].tasks.findIndex(task=>task.taskId===action.payload.id)
state.tasks[dateIndex].tasks[taskIndex].taskStatus= !state.tasks[dateIndex].tasks[taskIndex].taskStatus
}
},
extraReducers:(builder)=>{
    builder.addCase(fetchTaskData.pending,(state)=>{
        state.status="loading"
     })
     builder.addCase(fetchTaskData.fulfilled,(state,action)=>{
        state.status="succeeded"
        state.tasks=action.payload.tasks
     })
     builder.addCase(fetchTaskData.rejected,(state,action)=>{
        state.status="rejected"
        state.error=action.payload.message
     })
}

})
export const {statusButtonPressed}=tasksSlice.actions
export default tasksSlice.reducer;