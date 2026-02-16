const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
});

let users =[];

// to get users 
app.get('/users', (req, res) =>{
    res.status(200).json({
        status:"success",
        data:users
    });
});

// to post user
app.post('/users',(req, res)=>{
    const{name,email}=req.body;

    //to validate "@"
    if(!name||!email||!email.includes('@')){
        return res.status(400).json({
            status:"error",
            data:"invalid innput"
        });
    } 
    // to check any duplicate
    const existingUser=users.find(users=>users.email===email);
    if(existingUser){
        return res.status(400).json({
            status:"error",
            data:"user already exists"
        });
    }
    const NewUser={
        id: users.length+1,
        name,
        email
    };
    users.push(NewUser);
    res.status(201).json({
        status:"success",
        data:NewUser
    });
});
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});