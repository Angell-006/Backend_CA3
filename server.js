const express =require('express');
const app=express();
app.use(express.json());
const PORT=3010;
const router=require('./router');

app.use("/",router);
app.get("/",async(req,res)=>{
    res.send("<h1>Hello, server is running.</h1>")
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});

