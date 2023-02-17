var express=require("express");
var mysql=require("mysql2");
var app=express();
const cors=require("cors");
const multer=require("multer");
var PORT=3001;
// const bodyParser=require("body-parser");


// app.use(bodyParser.urlencoded({extended: true}));
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

// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads");
//     },
//     filename: (req,file,callback)=>{
//         callback(null,file.originalname);
//     }
// })

// const upload=multer({storage: storage});
conn.connect(function(err)
{
    if(err) throw err;
    console.log("Connected!");
})

// ***********table farmer ************
// conn.query("create table farmer(fname varchar(15), lname varchar(15),age int, aadhar_no varchar(15), unique_id int, phone_no varchar(15), city varchar(15), state varchar(15), pincode int, password int)", function(err,result)
// {
//     if(err) throw err;
//     console.log("result"+result);
// })


//  *** table customer ******
// conn.query("create table customer(fname varchar(20), lname varchar(20), phone_no varchar(15), email varchar(15), address varchar(15), state varchar(15), city varchar(20), password varchar(20));",function(err,Result)
// {
//     if(err)throw err;
//     console.log(Result);
// })

// app.use(function(req,res,next){
//     console.log("Middleware called");
//     next();
// })

// ***** admin table creation ******
// conn.query("Create table admin(username varchar(15), password varchar(15));",function(err,result)
// {
//     if(err)throw err;
//     console.log(result);
// })



app.post("/farmer_login",function(req,res){
    console.log(req.body);
    console.log("Hi");
    conn.query("insert into farmer(fname,lname,aadhar_no,age,phone_no,city,state,password,pincode,unique_id)values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.aadhar_no+"',"+req.body.age+",'"+req.body.phone_no+"','"+req.body.city+"','"+req.body.state+"',"+req.body.password+","+req.body.pincode+","+req.body.unique_id+");",function(err,result){
        if(err)throw err;
        console.log(result);
    });
    res.send("got this");
})
app.post("/customer_login",function(req,res){
    console.log(req.body);
    conn.query("insert into customer(fname, lname, phone_no,email, address, state, city, password) values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.phone_no+"','"+req.body.email+"','"+req.body.address+"','"+req.body.state+"','"+req.body.city+"','"+req.body.password+"');",function(err,result){
        if(err)throw err;
        console.log(result);
    })
    res.send("we did it");

})
app.post("/admin_login",function(req,res){
    console.log(req.body);
    conn.query("select * from admin where ( username='"+req.body.username+"') & ( password='"+req.body.password+"');",function(err,result){
        console.log(result);
        if(result=="")
        {
            console.log("wrong");
            res.send("wrong");
        }
        else{
            console.log("right");
            res.send("right");
        }
    })
    // res.send("admin here");
})

// app.post("/insertProduct",upload.fields([{name:"text"},{name:"file"}]),function(req,res){
//     const{text,file}=req.body;
//     const{originalname,buffer}=req.files.file[0];
//     console.log(text);
//     console.log(originalname);
//     console.log(buffer);
//     // console.log(req.files.file);
//     res.send("got it");
//     // const imageFile=req.files.file;
//     // const imageBuffer=Buffer.from(imageFile.data);
// })

const upload=multer();
app.post("/insertProduct",upload.single('file'),(req,res)=>{
    const textInput=req.body.text;
    const imageFile=req.file;
    const imageBuffer=Buffer.from(imageFile.buffer);
    const sql="insert into demo (text, file) values (?,?);";
    const values=[textInput,imageBuffer];

    conn.query(sql,values,(err,results,fields)=>{
        if(err)
        {
            res.status(500).json({error:"uploading image and text"});
        }else{
            res.json({message: "successful"});
        }
    });


    // res.send("hi");
    console.log(imageBuffer);
})

app.get("/product_display",(req,res)=>{
    const sql="Select text,file from demo;"
    conn.query(sql,(error,results,fields)=>{
        if(error){
            console.error(error);
            res.status(500).json({error:"error in fetching"});
        } else{
            const imageData=results.map(row=>{
                const imageBase64=Buffer.from(row.file).toString("base64");
                const imageUrl=`data:image/jpeg;base64,${imageBase64}`;
                return{
                    id: row.id,
                    imageData: imageUrl,
                    textData: row.text_data
                };
            });
            res.json(imageData);
        }
    })
})

app.post("/create_admin",function(req,res){
    conn.query("insert into admin (username, password) values ('"+req.body.username+"','"+req.body.password+"');",function(err,result){
        if(err)throw err;
        console.log(result);
    })
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

app.get("/AllCustomer",function(req,res){
    conn.query("select * from customer;",function(err,Result){
        if(err)throw err;
        console.log(Result);
        res.send(Result);
    })
})

app.listen(PORT, function(err)
{
    if(err) console.log(err);
    console.log("Server listening at port ",PORT);
})