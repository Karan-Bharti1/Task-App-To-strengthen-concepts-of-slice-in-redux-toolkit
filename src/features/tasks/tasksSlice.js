import { createSlice } from "@reduxjs/toolkit";
 export const tasksSlice=createSlice({
name:"tasks",
initialState:{
    tasks:[
        {
            dated:"15/01/2025",
            taskData:[{
                title:"Go to Gym",
                status:"Completed"
            },
        {
            title:"Buy Groceries",
            status:"Completed"
        },
    {
        title:"Water Plants",
        status:"Pending"
    }]
        },
        {
            dated:"16/01/2025",
            taskData:[{
                title:"Go to Gym",
                status:"Pending"
            },
        {
            title:"Room Cleaning",
            status:"Completed"
        },
    {
        title:"Water Plants",
        status:"Completed"
    }]
        }
    ]
},
reducers:{}

})
export default tasksSlice.reducer;