var express = require("express");
var mysql = require("mysql2");
var app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
var PORT = 3001;
// const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: [
        "GET", "POST"
    ],
    credentials: true
}));

const conn = mysql.createConnection({ host: "localhost", user: "root", password: "Chinnu@2000", database: "DBMS" });

// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads");
//     },
//     filename: (req,file,callback)=>{
//         callback(null,file.originalname);
//     }
// })

// const upload=multer({storage: storage});
conn.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
})

// ***********table farmer ************
// conn.query("create table farmer(fname varchar(15), lname varchar(15),age int, aadhar_no varchar(15), unique_id int, phone_no varchar(15), city varchar(15), state varchar(15), pincode int, password int)", function(err,result)
// {
//     if(err) throw err;
//     console.log("result"+result);
// })


// *** table customer ******
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
// conn.query("Create table admin(username varchar(15),phone_no bigint, email varchar(20), password varchar(15));",function(err,result)
// {
//     if(err)throw err;
//     console.log(result);
// })


app.post("/Geolocation", function (req, res) {
    console.log(req.body);
    conn.query("insert into location(latitude, longitude) values('" + req.body.latitude + "','" + req.body.longitude + "');", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.send("Location inserted");
})


app.post("/farmer_login", function (req, res) {
    console.log(req.body);
    console.log("Hi");
    conn.query("insert into farmer(fname,lname,age,aadhar_no,unique_id,phone_no,city,state,pincode,password)values('" + req.body.fname + "','" + req.body.lname + "','" + req.body.age + "','" + req.body.aadhar_no + "','" + req.body.unique_id + "','" + req.body.phone_no + "','" + req.body.city + "','" + req.body.state + "','" + req.body.pincode + "','" + req.body.password + "');", function (err, result) {
        if (err)
            throw err;
        console.log(result);
    });
    res.send("got this");
})




app.post("/customer_login", function (req, res) {
    console.log(req.body);
    conn.query("insert into customer(fname, lname, phone_no, email, address, state, city, password) values('" + req.body.fname + "','" + req.body.lname + "','" + req.body.phone_no + "','" + req.body.email + "','" + req.body.address + "','" + req.body.state + "','" + req.body.city + "','" + req.body.password + "');", function (err, result) {
        if (err)
            throw err;
        console.log(result);
    });
    res.send("we did it");
})

app.post("/admin_login", function (req, res) {
    console.log(req.body);
    conn.query("select * from admin where ( username='" + req.body.username + "') & ( password='" + req.body.password + "');", function (err, result) {
        console.log(result);
        if (result == "") {
            console.log("wrong");
            res.send("wrong");
        } else {
            console.log("right");
            res.send("right");
        }
    })
    // res.send("admin here");
})


app.post("/check_customer", function (req, res) {
    console.log(req.body);
    const sql = "select * from customer where fname='" + req.body.name + "' && password='" + req.body.password + "';";
    const values = [req.body.name];
    conn.query(sql, function (err, result) {
        if (err)
            console.error(err);


        console.log(sql);
        console.log(result);
        if (result == "") {
            console.log("wrong");
            res.send("wrong");
        } else {
            console.log("right");
            console.log(result);
            res.send(result);
        }
        // res.send("safe");
    });
});

// app.post("/check_farmer", function (req, res) {
//     console.log(req.body);
//     conn.query("select * from farmer where fname='" + req.body.name + "' && password='" + req.body.password + "';", function (err, result) {
//         if (err) 
//             console.log(err);


//         console.log(result);
//         if (result == "") {
//             console.log("wrong");
//             res.send("wrong");
//         } else {
//             console.log("right");
//             res.send(result);
//         }
//     });
// })


app.post("/check_customer", function (req, res) {
    console.log(req.body);
    const sql = "select * from customer where fname='" + req.body.name + "' && password=" + req.body.password + ";";
    const values = [req.body.name];
    conn.query(sql, function (err, result) {

        if (err)
            console.error(err);


        console.log(sql);
        console.log(result);
        if (result == "") {
            console.log("wrong");
            res.send("wrong");
        } else {
            console.log("right");
            console.log(result);
            res.send(result);
        }
        // res.send("safe");
    })
})
app.post("/check_farmer", function (req, res) {
    console.log(req.body);
    const sql = `select * from farmer where fname='${req.body.name}' && password='${req.body.password}'`;
    conn.query(sql, function (err, result) {
        if (err)
            console.log(err);


        console.log(result);
        if (result == "") {
            console.log("wrong");
            res.send("wrong");
        } else {
            console.log("right");
            res.send(result);
        }

    })
})

app.post('/getUserData', (req, res) => {
    const { farmerId } = req.body;
    const sql = "select fname,lname from customer where farmer_id='" + req.body + "';";
    conn.query(sql, function (err, result) {
        if (err)
            console.log(err);


        console.log(result);
        if (result == "") {
            console.log("wrong");
            res.send("wrong");
        } else {
            console.log("right");
            res.send(result);
        }

    })

});

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

const upload = multer();
app.post("/insertProduct", upload.single("file"), (req, res) => {
    const textInput = req.body.text;
    const imageFile = req.file;
    const cost = req.body.cost;
    const description = req.body.description;
    const category = req.body.category;
    const type = req.body.type;
    const date = req.body.date;
    const quantity = req.body.quantity;
    const farmer_id = req.body.farmer_id;
    const imageBuffer = Buffer.from(imageFile.buffer);
    console.log(cost);
    const sql = "insert into product (text, file,description,category,type,product_date,quantity,cost, farmer_id) values (?,?,?,?,?,?,?,?,?);";
    const values = [
        textInput,
        imageBuffer,
        description,
        category,
        type,
        date,
        quantity,
        cost,
        farmer_id,
    ];
    conn.query(sql, values, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "uploading image and text" });
        } else {
            res.json({ message: "successful" });
        }
    });

})

app.get("/product_display", (req, res) => {
    const sql = "Select * from product where status='not_purchased';";
    conn.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).json({error: "error in fetching"});
        } else {
            const imageData = results.map((row) => {
                const imageBase64 = Buffer.from(row.file).toString("base64");
                const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
                return {
                    id: row.id,
                    imageData: imageUrl,
                    textData: row.text,
                    cost: row.cost,
                    quantity: row.quantity,
                    category: row.category,
                    type: row.type,
                    description: row.description,
                    id: row.product_id,
                    date: row.product_date
                };
            });
            console.log(imageData);
            res.json(imageData);
        }
    });
});


app.post("/product_display_farmer", (req, res) => {
    const farmer_id=req.body.farmer_id;
    const sql = `Select * from product where farmer_id=${farmer_id};`;
    conn.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "error in fetching" });
        } else {
            const imageData = results.map((row) => {
                const imageBase64 = Buffer.from(row.file).toString("base64");
                const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
                return {
                    id: row.id,
                    imageData: imageUrl,
                    textData: row.text,
                    cost: row.cost,
                    quantity: row.quantity,
                    category: row.category,
                    type: row.type,
                    description: row.description,
                    id: row.product_id,
                    date: row.product_date
                };
            });
            console.log(imageData);
            res.json(imageData);
        }
    });
});

app.post("/create_admin", function (req, res) {
    conn.query("insert into admin(username, phone_no, email, password) values ('" + req.body.username + "','" + req.body.phone_no + "','" + req.body.email + "','" + req.body.password + "');", function (err, result) {
        if (err)
            throw err;
        console.log(result);
    });
});
app.get("/", function (req, res) {
    console.log("user called us");
    res.send("hello");
});

app.post("/create_admin", function (req, res) {
    conn.query("insert into admin (username, password) values ('" + req.body.username + "','" + req.body.password + "');", function (err, result) {
        if (err)
            throw err;


        console.log(result);
    })
})
app.get("/", function (req, res) {
    console.log("user called us");
    res.send("hello");
})

app.get("/AllFarmer", function (req, res) {
    conn.query("Select * from farmer;", function (err, Result) {
        if (err)
            throw err;


        console.log(Result);
        res.send(Result);
    })
})

app.get("/AllCustomer", function (req, res) {
    conn.query("select * from customer;", function (err, Result) {
        if (err)
            throw err;


        console.log(Result);
        res.send(Result);
    })
})

// conn.query("create table contact (name varchar(20), email varchar(20), description varchar(200));",function(err,Result){
//     if(err)throw err;
//     console.log(Result);
// })

app.post("/contact", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const description = req.body.description;
    console.log("name is", name);
    sql = `insert into contact (name, email,description) values ('${name}','${email}',
    '${description}');`;
    conn.query(sql, function (err, result) {
        if (err)
            console.log(err);


        console.log(result);
        res.send("successful");
    })
})

// getting product detailed display

app.post("/product_detailed_display", (req, res) => {
    const id = req.body.id;
    console.log(id);

    const sql = `Select * from product where product_id=${id};`;
    conn.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "error in fetching" });
        } else {
            const imageData = results.map((row) => {
                const imageBase64 = Buffer.from(row.file).toString("base64");
                const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
                return {
                    id: row.id,
                    imageData: imageUrl,
                    textData: row.text,
                    cost: row.cost,
                    quantity: row.quantity,
                    category: row.category,
                    type: row.type,
                    description: row.description,
                    id: row.product_id,
                    date: row.product_date
                };
            });
            console.log(imageData);
            res.json(imageData);
        }
    });
});
app.post("/payment", cors(), async (req, res) => { // let { amount, id } = req.body
    const amount = req.body.amount;
    const id = req.body.id;
    const product_id = req.body.product_id;
    const customer_id = req.body.customer_id;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Spatula company",
            payment_method: id,
            confirm: true
        })

        console.log("Payment is completed", payment)
        sql = `insert into payment(customer_id, product_id, amount ) values ( ${customer_id}, ${product_id}, ${amount})`;
        conn.query(sql, function (err, result) {
            if (err)
                throw (err)



            console.log(result);
        })
        res.send("all right");
    } catch (error) {
        console.log("Error", error)
        res.json("not right")
    }
})

// deleting farmer by admin

app.post("/farmer_delete", (req, res) => {
    const farmer_id = req.body.farmer_id;
    const sql = `delete from farmer where farmer_id=${farmer_id}`;
    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
    })
    console.log(farmer_id);
    res.send("deleted");
})

app.post("/customer_delete", function (req, res) {
    const customer_id = req.body.customer_id;
    const sql = `delete from customer where customer_id=${customer_id};`
    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
    })
    res.send("deleted")
})

// get customer, farmer and viewer messages

app.get("/AllContact", function (req, res) {
    sql = "select * from contact where status='pending'";
    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
        res.send(result);
    })
})

// get all payment detail

app.get("/Allpayment", function (req, res) {
    sql = "select payment.product_id, product.farmer_id, payment.customer_id, payment_id ,customer.fname as customerFname, customer.lname as customerLname, customer.phone_no as customer_phone_no , text, category, type, quantity, description, product_date, email, farmer.fname as farmerFname, farmer.lname as farmerLname, farmer.phone_no as farmer_phone_no from payment, product, farmer, customer where (payment.product_id=product.product_id) && (product.farmer_id=farmer.farmer_id) && (customer.customer_id=payment.customer_id);"

    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
        res.send(result);
    })
})

app.post("/farmer_sales", function (req, res) {
    const farmer_id = req.body.farmer_id;
    sql = `select payment.product_id, product.farmer_id, payment.customer_id, payment_id ,customer.fname as customerFname, customer.lname as customerLname, customer.phone_no as customer_phone_no , text, category, type, quantity, description, product_date, email, farmer.fname as farmerFname, farmer.lname as farmerLname, farmer.phone_no as farmer_phone_no from payment, product, farmer, customer where (payment.product_id=product.product_id) && (product.farmer_id=farmer.farmer_id) && (customer.customer_id=payment.customer_id) && (farmer.farmer_id=${farmer_id});`;
    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
        res.send(result);
    })
})

// getting customer purchase
app.post("/view_purchase", function (req, res) {
    const customer_id = req.body.customer_id;
    sql = `select payment.product_id, product.farmer_id, product.cost, payment.customer_id, payment_id ,customer.fname as customerFname, customer.lname as customerLname, customer.phone_no as customer_phone_no , text, category, type, quantity, description, product_date, email, farmer.fname as farmerFname, farmer.lname as farmerLname, farmer.phone_no as farmer_phone_no from payment, product, farmer, customer where (payment.product_id=product.product_id) && (product.farmer_id=farmer.farmer_id) && (customer.customer_id=payment.customer_id) && (customer.customer_id=${customer_id});`;
    conn.query(sql, function (err, result) {
        if (err)
            throw err;


        console.log(result);
        res.send(result);
    })
})

//  sending reply in nodejs

//  nodemailer code
const https = require("https");
const { response } = require("express");
const agent = new https.Agent({
    rejectUnauthorized: false

})

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,

    auth: {
        user: "82641.parthsoni@gmail.com",
        pass: "parthsoni04082000"
    },
    // authMethod: "LOGIN",
    tls: {
        rejectUnauthorized: false,
        agent: agent
    }
});


app.post("/reply", function (req, res) {
    const email = req.body.email;
    const reply = req.body.reply;
    let mailOptions = {
        from: "82641.parthsoni@gmail.com",
        to: email,
        subject: "test email",
        text: "This is a test email"
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("email sent" + info.response);
        }
    })
    console.log("this is email", email, "this is reply", reply);
    res.send("Thank you");
})

app.post("/farmer_location", function (req, res) {
    // console.log(req);
    const farmer_id = req.body.farmer_id;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    console.log(farmer_id, latitude, longitude);
    const sql = `insert into farmer_location(farmer_id, longitude, latitude) values(${farmer_id}, ${longitude}, ${latitude})`;
    conn.query(sql, function (result, error) {
        if (error) console.log(error);
        console.log(result);
    })
    res.send("fine");
})

app.get("/get_location", function (req, res) {
    const sql = `select * from farmer_location;`
    conn.query(sql, function (result, error) {
        if (err) console.log(err);
        res.send(result);
    })
})

// giving farmer location to front end

app.post("/show_location", function (req, res) {
    const product_id = req.body.product_id;
    console.log(product_id);
    sql = `select latitude, longitude, farmer_location.farmer_id from farmer_location, product where farmer_location.farmer_id=product.farmer_id && product_id=${product_id}; `
    conn.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log("the result is", result);
        res.send(result);
    })
})


// Report section

app.post("/total_sale", function (req, res) {
    sql = `select sum(amount) AS answer from payment;`
    conn.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log("the result is", result);
        res.send(result);
    })
})


app.post("/total_farmer", function (req, res) {
    sql = "select count(*) AS answer from farmer";
    conn.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
    })
})

app.post("/total_customer", function (req, res) {
    sql = "select count(*) AS answer from customer";
    conn.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
    })
})

app.post("/query", function(req,res){
    conn.query("select count(*) AS answer from contact;",function(err,result)
    {
        if(err)console.log(err);
        console.log(result);
        res.send(result);
    });

})
app.post("/Pquery", function(req,res){
    conn.query("select count(*) AS answer from contact where status='pending';",function(err,result)
    {
        if(err)console.log(err);
        console.log(result);
        res.send(result);
    });

})
app.post("/Aquery", function(req,res){
    conn.query("select count(*) AS answer from contact where status='answered';",function(err,result)
    {
        if(err)console.log(err);
        console.log(result);
        res.send(result);
    });

})
app.post("/total_product", function(req,res){
    sql="select count(*) AS answer from product";
    conn.query(sql,function(err,result)
    {
        if(err)console.log(err);
        console.log(result);
        res.send(result);
    })
})
app.post("/total_payment", function (req, res) {
    sql = "select count(*) AS answer from payment";
    conn.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log("payment is", result);
        res.send(result);
    })
})

// changing pending emails
app.post("/answered_email",function(req,res)
{
    const email=req.body.emailId;
    conn.query(`update contact set status='answered' where email= '${email}'`,function(err,result)
    {
        if(err)throw console.log(err);
        console.log(result);
        res.send("yes");
    })
})

//read_update_account
app.get('/read_farmer_account/:farmer_id', (req, res) => {
    const farmer_id = req.params.farmer_id;
    console.log(farmer_id)
    let send_data = {
        farmer_id: 0,
        fname: "",
        lname: "",
        age:0,
        aadhar_no:0,
        unique_id:"",
        phone_no: 0,
        state: "",
        city: "",
        password: "",
        pincode:0
    }
    const readFarmerQ = 'select * from farmer where farmer_id =  ' + [farmer_id];
    conn.query(readFarmerQ, (err, result) => {
        if (err)
            throw err;
        else {
            console.log("here");
              send_data.farmer_id= result[0].farmer_id;
              send_data.fname= result[0].fname;
              send_data.lname= result[0].lname;
              send_data.phone_no= result[0].phone_no;
              send_data.unique_id= result[0].unique_id;
              send_data.aadhar_no= result[0].aadhar_no;
              send_data.age= result[0].age;
              send_data.pincode= result[0].pincode;
              send_data.state= result[0].state;
              send_data.city= result[0].city;
              send_data.password= result[0].password;
              console.log(JSON.stringify(send_data));
              res.send(send_data);
        }
    })

}
)

//read_update_account
app.get('/read_customer_account/:customer_id', (req, res) => {
    const customer_id = req.params.customer_id;
    console.log(customer_id)
    let send_data = {
        fname: '', 
        lname: '', 
        phone_no: 0, 
        email: '', 
        address: '', 
        state: '', 
        city: '', 
        password: ''
    }
    const readcustomerQ = 'select * from customer where customer_id =  ' + [customer_id];
    conn.query(readcustomerQ, (err, result) => {
        if (err)
            throw err;
        else {
            console.log("here");
              send_data.customer_id= result[0].customer_id;
              send_data.fname= result[0].fname;
              send_data.lname= result[0].lname;
              send_data.phone_no= result[0].phone_no;
              send_data.email= result[0].email;
              send_data.address= result[0].address;
              send_data.state= result[0].state;
              send_data.city= result[0].city;
              send_data.password= result[0].password;
              console.log(JSON.stringify(send_data));
              res.send(send_data);
        }
    })

}
)



app.listen(PORT, function (err) {
    if (err)
        console.log(err);


    console.log("Server listening at port ", PORT);
})
