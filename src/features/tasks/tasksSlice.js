import { createSlice } from "@reduxjs/toolkit";
 export const tasksSlice=createSlice({
name:"tasks",
initialState:{
    tasks:[
        {
            dated:"15/01/2025",
            taskData:[{
                title:"Go to Gym",
                status:true,
                taskId:"T11"
            },
        {
            title:"Buy Groceries",
            status:true,
            taskId:"T12"
        },
    {
        title:"Water Plants",
        status:false,
        taskId:"T13"
    }]
        },
        {
            dated:"16/01/2025",
            taskData:[{
                title:"Go to Gym",
                status:false,
                taskId:"T14"
            },
        {
            title:"Room Cleaning",
            status:true,
            taskId:"T15"
        },
    {
        title:"Water Plants",
        status:true,
        taskId:"T16"
    }]
        }
    ]
},
reducers:{
    statusButtonPressed:(state,action)=>{
const dateIndex=state.tasks.findIndex(task=>task.dated===action.payload.date)
const taskIndex=state.tasks[dateIndex].taskData.findIndex(task=>task.taskId===action.payload.id)
state.tasks[dateIndex].taskData[taskIndex].status= !state.tasks[dateIndex].taskData[taskIndex].status
}
}

})
export const {statusButtonPressed}=tasksSlice.actions
export default tasksSlice.reducer;