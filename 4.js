//npm i express 
//write the code 
//writing a program to create a server that will run on 3000 port number
var express= require('express')
var app= express()

app.listen(3000,function(err){
    if(err)
     console.log('server cannot be created');
else
{
    console.log('server running at port 3000')
}
})

//admin page code
app.get('/',function(req,res)

{
    res.sendFile(__dirname+'/'+'login.html');
}

);

app.get('/admin',function(req,res,err)

{
    var username=req.query.n1;
    var pwd=req.query.n2;
    console.log(username+' and '+pwd);
    if (username=='jason' && pwd=='1234')
    {
    res.sendFile(__dirname+'/'+'admin.html');
    }else{
    res.sendFile(__dirname+'/'+'login.html');
    }
}

);