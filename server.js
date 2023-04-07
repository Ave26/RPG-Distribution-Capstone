// first import install libery 

var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
const e = require("express");
const User = require('./src/model/user')
const path = require('path')

//create app

const app = express()

app.use(bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended: true
}))


mongoose.connect('mongodb+srv://ave26:123@rpg-distribution.kxetrua.mongodb.net/rpg');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// CRUD GALING CLIENT

app.use(express.static(path.join(__dirname, "client", "src")));
app.get("*", (__, res) => {
  res.sendFile(path.join(__dirname, "client", "src", "login.html"));
});


app.post('/api/register', async(req, res)=>{
    const { username, password  } = req.body 

    if (!username && !password){
        return res.status(403).json({
            message: 'No Input'
        })
    }

    try{
        const user = await User.create({
            username: username,  
            password: password,
        })
        return res.status(200).json({
            'message': 'Account Created',
            'data': user,
        })

    }catch(e){
        console.log(e)
    }

})


app.post('/api/login', async(req, res)=>{
    const {username, password} = req.body

 if (!username && !password){
        return res.status(403).json({
            message: 'No Input'
        })
    }

    try{
        const user = await User.findOne({
            username: username,
            password: password, 
        })

        if (!user){
            return res.status(404).json({
                message: 'No User Found'
            })
        }     
    
        return res.status(200).json({
            'message': 'Login Successfully',
            'data': user,
        })

    }catch(e){
        console.log(e)
    }

})




app.get('/', async(__, res)=>{
    res.send('Sample Api is Successfull')
})
app.get('/api/user', async(__, res)=>{
    res.send('Sample Api is Successfull')
})



//  http://localhost:3000/login
const port = 3000
app.listen(port, ()=>{
    console.log(`server is running in localhost:${port}`)
})

// conect database




// mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, ()=>{
//     console.log('this is wrong')
// })

// var db = mongoose.connection;

// check connect

// db.on('error', () => console.log("error in connecting database"));
// db.once('open', () => console.log("Connected to Database"));


// app.get("/", (req, res) => {

//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })

//     return res.redirect('login.html');

// }).listen(3000);



// app.post("/login", async (request, response) => {
//     try {
//         //adding
//         const username = request.body.username;
//         const password = request.body.password;

//         const usermail = db.collection('users').findOne({ email: username }, (err, res) => {
//             if (res == null) {
//                 response.send("Invalid information!❌❌❌! Please create account first");
//             }
//             else if (err) throw err;


//             if (res.password === password) {
//                 return response.redirect('login.html');
//             }
//             else {
//                 response.send("Invalid Password!❌❌❌");
//             }


//         });
//     }
//     catch (error) {
//         response.send("Invalid information❌");
//     }

// })