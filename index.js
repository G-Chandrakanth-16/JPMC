import express from "express"
import axios from "axios";
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    async function getData(){
        const response = await axios.get('http://localhost:3000/data');
        console.log(response.data);
    }
    getData();
    res.sendFile('c:/Users/CVR/Desktop/LocalServer/index.html');
})
app.post("/insert",(req,res)=>{
    //console.log(req.body.id);
    const newData={
         "id": req.body.id,
         "name": req.body.name
    }
    async function postData(){
        const response = await axios.post('http://localhost:3000/data',newData);
        //console.log(response.data);
    }
    postData();
    res.send('chandu');
});
app.post("/delete",(req,res)=>{
    //console.log(req.body.id);
    async function deleteData(){
        const response = await axios.post('http://localhost:3000/data',newData);
        //console.log(response.data);
    }
    deleteData();
    res.send('chandu');
});
app.listen(2000,(req,res)=>{
    console.log('running 2000')
})