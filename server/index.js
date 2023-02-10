var express=require("express");
var mysql=require("mysql2");
var app=express();
const cors=require("cors");
var PORT=3001;

app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"],
        credentials: true,
    })
);

const conn=mysql.createConnection({
    host:  "localhost",
    user: "root",
    password: "parth",
    database: "DBMS"
})
conn.connect(function(err)
{
    if(err) throw err;
    console.log("Connected!");
})
// conn.query("create table farmer(fname varchar(15), lname varchar(15),age int, aadhar_no varchar(15), unique_id int, phone_no varchar(15), city varchar(15), state varchar(15), pincode int, password int)", function(err,result)
// {
//     if(err) throw err;
//     console.log("result"+result);
// })


// app.use(function(req,res,next){
//     console.log("Middleware called");
//     next();
// })
app.post("/farmer_login",function(req,res){
    console.log(req.body);
    console.log("Hi");
    conn.query("insert into farmer(fname,lname,aadhar_no,age,phone_no,city,state,password,pincode,unique_id)values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.aadhar_no+"',"+req.body.age+",'"+req.body.phone_no+"','"+req.body.city+"','"+req.body.state+"',"+req.body.password+","+req.body.pincode+",'"+req.body.unique_id+"');",function(err,result){
        if(err)throw err;
        console.log(result);
    });
    res.send("got this");
})
app.post("/customer_login",function(req,res){
    console.log(req.body);
    res.send("we did it");
})
app.get("/",function(req,res){
    console.log("user called us");
    res.send("hello");
})

app.get("/AllFarmer",function(req,res){
    conn.query("Select * from farmer;",function(err,Result){
        if(err) throw err;
        console.log(Result);
        res.send(Result);
    })
})


app.listen(PORT, function(err)
{
    if(err) console.log(err);
    console.log("Server listening at port ",PORT);
})